import React, { useEffect, useRef } from 'react';

/**
 * AdSenseBanner Component
 * Renders an isolated Google AdSense display unit ONLY on pages where mounted.
 * Dynamically injects AdSense script on-demand so rest of SaaS stays 100% ad-free.
 */
export function AdSenseBanner({
  slot = import.meta.env.VITE_ADSENSE_SLOT_ID || '2876778418',
  client = import.meta.env.VITE_ADSENSE_CLIENT_ID || 'ca-pub-1416168271239862',
  format = 'auto',
  responsive = 'true',
  className = '',
}) {
  const adRef = useRef(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    // If no client publisher ID is provided yet, don't execute script
    if (!client) return;

    // Dynamically inject Google AdSense script only on pages using this component
    const scriptId = 'google-adsense-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }

    // Push ad slot once script is ready
    if (!isLoadedRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isLoadedRef.current = true;
        }
      } catch (err) {
        // Suppress AdSense duplicate or layout errors
      }
    }
  }, [client, slot]);

  // If no AdSense publisher ID configured yet, display clean, muted placeholder in DEV mode
  if (!client) {
    if (import.meta.env.DEV) {
      return (
        <aside
          aria-label="Sponsored Advertisement Slot"
          className={`my-8 p-4 rounded-xl border border-dashed border-[#CCD5E0] bg-[#FAF5EA]/50 text-center text-xs text-[#5B6676] max-w-2xl mx-auto ${className}`}
        >
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#0047AB] block mb-1">
            Google AdSense Placement Slot
          </span>
          <span>Set <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E8E0CF]">VITE_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXX</code> in your .env to show live ads.</span>
        </aside>
      );
    }
    // In production without configured ID, collapse silently
    return null;
  }

  return (
    <aside
      aria-label="Advertisement"
      className={`my-8 max-w-4xl mx-auto w-full overflow-hidden text-center ${className}`}
    >
      <div className="text-[10px] font-semibold text-[#8C98A9] uppercase tracking-wider mb-1.5">
        Advertisement
      </div>
      <div ref={adRef} className="bg-white rounded-xl border border-[#E8E0CF] p-2 min-h-[90px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minWidth: '280px', width: '100%' }}
          data-ad-client={client}
          data-ad-slot={slot || undefined}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </aside>
  );
}
