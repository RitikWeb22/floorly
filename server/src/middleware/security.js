/**
 * Security Middleware Suite for Floorly API
 * - Standard HTTP Security Headers (NoSQL/XSS/Clickjacking protections)
 * - Deep object sanitizer against MongoDB operator injection ($gt, $where, etc.)
 */

// Deep sanitize an object to strip keys starting with '$', containing '.', or attempting prototype pollution
const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

export function sanitizeData(data) {
  if (!data || typeof data !== 'object' || Buffer.isBuffer(data)) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(sanitizeData);
  }

  const clean = Object.create(null);
  for (const key of Object.keys(data)) {
    // Drop keys that could be used for MongoDB operator injection or Prototype Pollution
    if (key.startsWith('$') || key.includes('.') || DANGEROUS_KEYS.has(key)) {
      continue;
    }
    clean[key] = sanitizeData(data[key]);
  }
  return clean;
}

// Middleware that applies deep sanitization to req.body, req.query, and req.params
export function sanitizeRequest(req, res, next) {
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeData(req.body);
  }
  if (req.query && typeof req.query === 'object') {
    req.query = sanitizeData(req.query);
  }
  if (req.params && typeof req.params === 'object') {
    req.params = sanitizeData(req.params);
  }
  next();
}

// Middleware that sets standard security HTTP headers
export function securityHeaders(req, res, next) {
  // Prevent MIME-sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Prevent clickjacking via iframes
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  // Legacy XSS filter activation
  res.setHeader('X-XSS-Protection', '1; mode=block');
  // Enforce HTTPS HSTS for 2 years with preloading
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  // Prevent Internet Explorer from executing downloads in site's context
  res.setHeader('X-Download-Options', 'noopen');
  // Restrict Adobe Flash / PDF cross-domain policy
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  // Control referrer information leakage
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Disable dangerous browser device features by default
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  // Content Security Policy - Report-Only mode during verification & staging
  res.setHeader(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://checkout.razorpay.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https: http://localhost:5000 http://localhost:5173 ws: wss:;"
  );
  // Remove X-Powered-By header if present
  res.removeHeader('X-Powered-By');

  next();
}

