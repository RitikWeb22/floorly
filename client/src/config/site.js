/**
 * Client Site Configuration
 * Driven by Vite environment variables with dynamic fallback from backend business-info
 */

const rawSiteEnv = import.meta.env.VITE_SITE_URL;
const canonicalOrigin = (rawSiteEnv && !rawSiteEnv.includes('vercel.app'))
  ? rawSiteEnv
  : (typeof window !== 'undefined' && !window.location.origin.includes('vercel.app') ? window.location.origin : 'https://floorlystudio.me');

export const siteConfig = {
  siteUrl: canonicalOrigin.replace(/\/+$/, ''),
  siteName: 'Floorly',
  siteTitle: 'Floorly – AI-Scoped Proposals & Price Floors for Freelancers',
  defaultOgImage: 'https://floorlystudio.me/og-image.png',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@floorlystudio.me',
  privacyEmail: import.meta.env.VITE_PRIVACY_EMAIL || import.meta.env.VITE_SUPPORT_EMAIL || 'privacy@floorlystudio.me',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || import.meta.env.VITE_SUPPORT_EMAIL || 'support@floorlystudio.me',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '8287384970',
  contactAddress: import.meta.env.VITE_CONTACT_ADDRESS || 'Munirka, New Delhi, India 110067',
  legalName: import.meta.env.VITE_LEGAL_NAME || 'Ritik',
  grievanceOfficerName: import.meta.env.VITE_GRIEVANCE_OFFICER_NAME || 'Ritik',
  grievanceEmail: import.meta.env.VITE_GRIEVANCE_EMAIL || import.meta.env.VITE_SUPPORT_EMAIL || 'support@floorlystudio.me',
  legalJurisdiction: import.meta.env.VITE_LEGAL_JURISDICTION || 'New Delhi, India',
};

// Attempt to fetch business compliance info asynchronously
if (typeof window !== 'undefined') {
  fetch('/api/v1/public/business-info')
    .then((r) => r.json())
    .then((data) => {
      if (data && data.success) {
        if (data.legalName) siteConfig.legalName = data.legalName;
        if (data.contactAddress) siteConfig.contactAddress = data.contactAddress;
        if (data.contactPhone) siteConfig.contactPhone = data.contactPhone;
        if (data.supportEmail) siteConfig.supportEmail = data.supportEmail;
        if (data.grievanceOfficerName) siteConfig.grievanceOfficerName = data.grievanceOfficerName;
        if (data.grievanceEmail) siteConfig.grievanceEmail = data.grievanceEmail;
        if (data.legalJurisdiction) siteConfig.legalJurisdiction = data.legalJurisdiction;
        if (data.siteUrl) siteConfig.siteUrl = data.siteUrl;
      }
    })
    .catch(() => {
      // Graceful fallback to static siteConfig values
    });
}
