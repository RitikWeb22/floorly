import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory or workspace root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const nodeEnv = process.env.NODE_ENV || 'development';

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv,
  isProduction: nodeEnv === 'production',
  isTest: nodeEnv === 'test',

  // Authentication & Security (REQUIRED in production)
  jwtSecret: process.env.JWT_SECRET || (nodeEnv === 'test' ? 'test-secret-key-32-chars-long-minimum' : 'floorly-super-secret-jwt-key-2026-secure-development-only'),
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  adminApiKey: process.env.ADMIN_API_KEY || '',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL || '',

  // Database (REQUIRED)
  mongoUri: process.env.MONGO_URI || '',

  // Domains & URLs
  siteUrl: (process.env.SITE_URL || process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/+$/, ''),
  frontendUrl: (process.env.FRONTEND_URL || process.env.SITE_URL || 'http://localhost:5173').replace(/\/+$/, ''),

  // Support & Privacy Emails
  supportEmail: process.env.SUPPORT_EMAIL || 'support@floorlystudio.me',
  privacyEmail: process.env.PRIVACY_EMAIL || process.env.SUPPORT_EMAIL || 'privacy@floorlystudio.me',

  // Contact Channels & Legal
  legalName: process.env.LEGAL_NAME || 'Ritik Sharma',
  contactEmail: process.env.CONTACT_EMAIL || 'support@floorlystudio.me',
  contactPhone: process.env.CONTACT_PHONE || '8287384970',
  contactAddress: process.env.CONTACT_ADDRESS || 'Munirka, New Delhi, India 110067',
  legalJurisdiction: process.env.LEGAL_JURISDICTION || 'New Delhi, India',

  // AI Configuration (Google Gemini) - Configured via environment variables only
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  aiPrimaryModel: process.env.AI_PRIMARY_MODEL || process.env.GEMINI_MODEL || 'gemini-2.5-flash',
  aiFallbackModel: process.env.AI_FALLBACK_MODEL || 'gemini-2.5-flash',
  geminiModel: process.env.AI_PRIMARY_MODEL || process.env.GEMINI_MODEL || 'gemini-2.5-flash',

  // Subscription Billing System 1
  billingEnabled: process.env.BILLING_ENABLED === 'true',
  billingProvider: process.env.BILLING_PROVIDER || 'stripe', // 'stripe' | 'razorpay' | 'merchant-of-record'
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  razorpayKeyId: process.env.RAZORPAY_KEY_ID || '',
  razorpayKeySecret: process.env.RAZORPAY_KEY_SECRET || '',
  razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || '',
  morApiKey: process.env.MOR_API_KEY || '',
  morWebhookSecret: process.env.MOR_WEBHOOK_SECRET || '',
  adminApiKey: process.env.ADMIN_API_KEY || '',
  adminOverrideEnabled: process.env.ADMIN_OVERRIDE_ENABLED === 'true',
  adminIpAllowlist: process.env.ADMIN_IP_ALLOWLIST ? process.env.ADMIN_IP_ALLOWLIST.split(',').map((s) => s.trim()).filter(Boolean) : [],
  gracePeriodDays: parseInt(process.env.GRACE_PERIOD_DAYS || '7', 10),

  // Transactional Email Service
  resendApiKey: process.env.RESEND_API_KEY || '',
  smtpHost: process.env.SMTP_HOST || '',
  smtpPort: parseInt(process.env.SMTP_PORT || '587', 10),
  smtpUser: process.env.SMTP_USER || '',
  smtpPass: process.env.SMTP_PASS || '',
  smtpFrom: process.env.SMTP_FROM || 'Floorly <no-reply@floorlystudio.me>',
};

/**
 * Fail-fast startup validation for required environment variables
 */
export function validateRequiredEnv() {
  const missing = [];

  // Mongo URI is strictly required unless running in a test suite mock
  if (!config.mongoUri && config.nodeEnv !== 'test') {
    missing.push('MONGO_URI');
  }

  // In production, JWT_SECRET must be explicitly provided and not default
  if (config.isProduction) {
    if (!process.env.JWT_SECRET) {
      missing.push('JWT_SECRET (must be configured in production)');
    } else if (process.env.JWT_SECRET.length < 32) {
      missing.push('JWT_SECRET (must be at least 32 characters in production)');
    }
  }

  // Enforce ADMIN_API_KEY length >= 32 at startup when admin override endpoint is enabled
  if (config.adminOverrideEnabled) {
    if (!config.adminApiKey || config.adminApiKey.length < 32) {
      missing.push('ADMIN_API_KEY (must be at least 32 characters when ADMIN_OVERRIDE_ENABLED=true)');
    }
  }

  if (missing.length > 0) {
    const errorMsg = [
      '',
      '================================================================================',
      '🚨 FATAL SERVER STARTUP ERROR: Missing required environment variable(s):',
      ...missing.map((m) => `   - ${m}`),
      '',
      'The server will not start without these required configurations.',
      'Please check your .env file or refer to .env.example for setup guidance.',
      '================================================================================',
      '',
    ].join('\n');

    console.error(errorMsg);
    throw new Error(`Startup failed: missing required environment variables: ${missing.join(', ')}`);
  }
}

/**
 * Returns the exact Google OAuth callback redirect URI
 * Reads from GOOGLE_CALLBACK_URL environment variable first,
 * or dynamically resolves using request protocol and host.
 */
export function getGoogleCallbackUrl(req) {
  const host = req?.get ? req.get('host') : req?.headers?.host;
  const isLocalRequest = host ? (host.includes('localhost') || host.includes('127.0.0.1')) : !config.isProduction;

  // When testing or running locally, use the local callback URL
  if (isLocalRequest) {
    const proto = req?.protocol || 'http';
    const localHost = host || `localhost:${config.port}`;
    return `${proto}://${localHost}/api/v1/auth/google/callback`;
  }

  // If incoming request is available in production, prioritize the actual host being visited
  if (req && host) {
    const proto = req.headers?.['x-forwarded-proto'] || req.protocol || (req.secure ? 'https' : 'http');
    return `${proto}://${host}/api/v1/auth/google/callback`;
  }

  // Use configured callback URL with auto-correction for stale service names
  if (config.googleCallbackUrl) {
    return config.googleCallbackUrl.replace('floorly-api.onrender.com', 'floorly.onrender.com');
  }

  return 'https://floorly.onrender.com/api/v1/auth/google/callback';
}

