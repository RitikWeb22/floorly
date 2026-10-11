/**
 * Client Site Configuration
 * Driven by Vite environment variables with dynamic fallback from backend business-info
 */

export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || window.location.origin,
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@floorly.com',
  privacyEmail: import.meta.env.VITE_PRIVACY_EMAIL || import.meta.env.VITE_SUPPORT_EMAIL || 'privacy@floorly.com',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || import.meta.env.VITE_SUPPORT_EMAIL || 'support@floorly.com',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '',
  contactAddress: import.meta.env.VITE_CONTACT_ADDRESS || '',
  legalName: import.meta.env.VITE_LEGAL_NAME || '',
  grievanceOfficerName: import.meta.env.VITE_GRIEVANCE_OFFICER_NAME || '',
  grievanceEmail: import.meta.env.VITE_GRIEVANCE_EMAIL || '',
  legalJurisdiction: import.meta.env.VITE_LEGAL_JURISDICTION || '',
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
