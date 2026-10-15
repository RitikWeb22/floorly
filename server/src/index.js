import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config, validateRequiredEnv } from './config/env.js';
import { logger } from './logger.js';

// Validate environment variables immediately (fail fast)
validateRequiredEnv();

import authRouter from './routes/auth.js';
import clientsRouter from './routes/clients.js';
import analysesRouter from './routes/analyses.js';
import pricingRouter from './routes/pricing.js';
import proposalsRouter from './routes/proposals.js';
import projectsRouter from './routes/projects.js';
import invoicesRouter from './routes/invoices.js';
import expensesRouter from './routes/expenses.js';
import agentsDocRouter from './routes/agentsDoc.js';
import dashboardRouter from './routes/dashboard.js';
import subscriptionRouter from './routes/subscription.js';
import demoRouter from './routes/demo.js';
import templatesRouter from './routes/templates.js';
import publicDocumentsRouter from './routes/publicDocuments.js';
import razorpayCheckoutRouter from './routes/razorpayCheckout.js';

import dns from 'dns';

// Fix Windows DNS querySrv ECONNREFUSED issue by using Google/Cloudflare public DNS
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (dnsErr) {
  logger.warn({ err: dnsErr.message }, 'Could not set custom DNS servers');
}

import { securityHeaders, sanitizeRequest } from './middleware/security.js';
import { rateLimit } from './middleware/rateLimiter.js';
import { ensureAllDatabaseIndexes } from './config/dbIndexes.js';
import { initRedis, getCacheStatus } from './services/redisService.js';
import { errorHandler } from './middleware/errorHandler.js';


const app = express();
app.disable('x-powered-by');

// Trust reverse proxy (Render, AWS, Nginx, Cloudflare) in production to correctly detect https scheme
if (config.isProduction || process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}
// Active payment providers: Razorpay / Stripe unified adapter
// Cloud Redis cache cluster connected

// Initialize Redis caching layer with automatic fallback
initRedis();

// Connect to MongoDB Atlas & reconcile 1M+ scale indexes
if (config.mongoUri) {
  try {
    await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 10000 });
    logger.info('Connected to MongoDB Atlas cluster successfully');
    await ensureAllDatabaseIndexes();
  } catch (err) {
    logger.error({ err: err.message }, 'MongoDB Atlas connection failed');
  }
} else {
  logger.warn('No MONGO_URI provided in environment variables');
}

// Security & Request sanitization middleware
app.use(securityHeaders);

const configuredFrontendUrls = (process.env.FRONTEND_URL || '')
  .split(',')
  .map((u) => u.trim().replace(/\/+$/, ''))
  .filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    const cleanOrigin = origin.replace(/\/+$/, '');
    if (
      configuredFrontendUrls.length === 0 ||
      configuredFrontendUrls.includes(cleanOrigin) ||
      cleanOrigin.endsWith('.vercel.app') ||
      cleanOrigin === 'http://localhost:5173' ||
      cleanOrigin === 'http://127.0.0.1:5173'
    ) {
      return callback(null, true);
    }
    return callback(new Error(`CORS origin not allowed: ${origin}`), false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Admin-Api-Key',
    'Stripe-Signature',
    'X-Webhook-Signature',
    'X-Razorpay-Signature',
    'X-Provider',
  ],
}));


// Global API rate limiter (protects all API endpoints against DDoS & brute-force abuse)
const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: 'Too many requests from this IP address. Please slow down and try again shortly.',
});

// Stricter rate limiter for expensive AI scoping requests (protects Gemini API quota & prevents wallet draining)
const aiRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 40,
  message: 'AI scoping rate limit reached. Please wait a few minutes before submitting new briefs.',
});

// Webhook route: express.raw mounted BEFORE express.json and sanitizeRequest with 2mb limit
app.use(
  ['/api/v1/subscription/webhook', '/api/v1/subscription/webhook/:provider'],
  express.raw({ type: '*/*', limit: '2mb' })
);

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(sanitizeRequest);


// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    logger.info({
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      durationMs: Date.now() - start,
    }, 'HTTP Request');
  });
  next();
});

// Root landing endpoint for browser and platform health monitoring
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 Floorly API is active and running',
    version: '1.0.0',
    status: 'healthy',
    frontend: process.env.FRONTEND_URL || 'https://floorlystudio.me',
    endpoints: {
      health: '/health',
      businessInfo: '/api/v1/public/business-info',
    },
  });
});

// Health check endpoint with Redis and database telemetry
app.get('/health', (req, res) => {
  const cacheStatus = getCacheStatus();
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Floorly Developer Platform API',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    cache: cacheStatus,
    uptime: process.uptime(),
  });
});

// Public business information endpoint for Razorpay and legal compliance
app.get('/api/v1/public/business-info', (req, res) => {
  res.json({
    success: true,
    legalName: process.env.LEGAL_NAME || 'Ritik Sharma',
    contactAddress: process.env.CONTACT_ADDRESS || 'Munirka, New Delhi, India 110067',
    contactPhone: process.env.CONTACT_PHONE || '8287384970',
    supportEmail: process.env.SUPPORT_EMAIL || 'support@floorlystudio.me',
    grievanceOfficerName: process.env.GRIEVANCE_OFFICER_NAME || 'Ritik Sharma',
    grievanceEmail: process.env.GRIEVANCE_EMAIL || process.env.SUPPORT_EMAIL || 'support@floorlystudio.me',
    legalJurisdiction: process.env.LEGAL_JURISDICTION || 'New Delhi, India',
    siteUrl: process.env.SITE_URL || process.env.FRONTEND_URL || 'https://floorlystudio.me',
  });
});

// Apply global API rate limiter to all API endpoints
app.use('/api', apiRateLimiter);
app.use('/api/v1', apiRateLimiter);

// Mount versioned API routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/clients', clientsRouter);
app.use('/api/v1/analyses', aiRateLimiter, analysesRouter);
app.use('/api/v1/pricing', pricingRouter);
app.use('/api/v1/proposals', proposalsRouter);
app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/invoices', invoicesRouter);
app.use('/api/v1/expenses', expensesRouter);
app.use('/api/v1/agents-doc', aiRateLimiter, agentsDocRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/subscription', subscriptionRouter);
app.use('/api/v1/demo', demoRouter);
app.use('/api/v1/templates', templatesRouter);
app.use('/api/v1/public', publicDocumentsRouter);


// Razorpay Standard Checkout API endpoints:
// POST /api/create-order & POST /api/verify-payment
app.use('/api', razorpayCheckoutRouter);
app.use('/api/v1', razorpayCheckoutRouter);

// Centralized 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    code: 'ROUTE_NOT_FOUND',
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Centralized Production Error Handler Middleware
app.use(errorHandler);

// Global Process Exception Handlers for Production Stability
process.on('unhandledRejection', (reason) => {
  logger.error({ reason: reason?.message || reason }, 'Unhandled Promise Rejection');
});

process.on('uncaughtException', (err) => {
  logger.fatal({ err: err.message, stack: err.stack }, 'Uncaught Exception in process');
  // Allow pending requests to drain before exiting in production
  if (process.env.NODE_ENV === 'production') {
    process.exit(1);
  }
});

app.listen(config.port, () => {
  logger.info(`🚀 Floorly API running on http://localhost:${config.port}`);
});

export default app;
