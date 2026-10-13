import React, { useState } from 'react';
import {
  Eye,
  EyeOff,
  Building,
  CreditCard,
  Receipt,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Check,
  FileText,
  X,
} from 'lucide-react';
import { maskAccountNumber } from './settingsConstants';

export function LivePreviewCard({ formData, onClose }) {
  const [showMasked, setShowMasked] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // Address line composite
  const addressParts = [
    formData.addressLine1,
    formData.addressLine2,
    formData.city,
    formData.state,
    formData.postalCode,
  ].filter(Boolean);
  const fullAddress = addressParts.join(', ');

  const bank = formData.paymentMethods?.bankTransfer;
  const paypal = formData.paymentMethods?.paypal;
  const online = formData.paymentMethods?.onlinePayment;
  const upi = formData.paymentMethods?.upi;
  const other = formData.paymentMethods?.other;
  const defaultMethod = formData.paymentMethods?.defaultMethod || 'bankTransfer';

  const isIndiaOrInr = formData.country === 'IN' || formData.defaultCurrency === 'INR' || formData.currency === 'INR';

  const previewContent = (
    <div className="space-y-4 text-xs text-[#0E1A2B]">
      {/* 1. Letterhead Card */}
      <div className="bg-[#FAF5EA]/60 rounded-xl p-3.5 border border-[#E8E0CF] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6676]">
            Document Header
          </span>
          <span className="text-[10px] font-mono text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.5 rounded font-medium">
            Proposal / Invoice
          </span>
        </div>

        {formData.logoUrl ? (
          <img
            src={formData.logoUrl}
            alt="Studio logo"
            className="h-8 max-w-[140px] object-contain rounded"
          />
        ) : (
          <h2 className="text-base font-semibold text-[#0E1A2B] font-display tracking-[-0.01em] leading-none">
            {formData.businessName || formData.name || 'Your Studio Name'}
          </h2>
        )}

        <div className="text-[11px] text-[#5B6676] space-y-0.5 leading-tight">
          {formData.businessEmail && <p>{formData.businessEmail}</p>}
          {formData.businessPhone && <p>{formData.businessPhone}</p>}
          {fullAddress && <p className="whitespace-pre-line">{fullAddress}</p>}
          {formData.website && <p className="text-[#0047AB] font-medium">{formData.website}</p>}
        </div>

        {formData.taxEnabled && formData.taxId && (
          <div className="pt-2 border-t border-[#E8E0CF] text-[11px] font-semibold text-[#0E1A2B] flex items-center justify-between">
            <span className="text-[#5B6676]">{formData.taxIdLabel || formData.taxType || 'Tax ID'}:</span>
            <span className="font-mono">{formData.taxId}</span>
          </div>
        )}
      </div>

      {/* 2. Tax Summary Preview */}
      <div className="bg-[#FAF5EA]/60 rounded-xl p-3.5 border border-[#E8E0CF] space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6676] block">
          Tax Application
        </span>
        {formData.taxEnabled ? (
          <div className="space-y-1 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-[#5B6676]">{formData.taxType || 'Tax'} rate:</span>
              <span className="font-bold text-[#0E1A2B]">{formData.taxRate || 0}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5B6676]">Calculation:</span>
              <span className="font-semibold text-[#0E1A2B] capitalize">
                {formData.taxMode === 'inclusive' ? 'Tax-inclusive' : 'Tax-exclusive'}
              </span>
            </div>
            {formData.country === 'IN' && formData.stateOfSupply && (
              <div className="flex items-center justify-between">
                <span className="text-[#5B6676]">State of supply:</span>
                <span className="font-semibold text-[#0E1A2B]">{formData.stateOfSupply}</span>
              </div>
            )}
            {formData.reverseChargeNote && (
              <p className="pt-1 text-[10px] italic text-[#5B6676] border-t border-[#E8E0CF] leading-tight">
                {formData.reverseChargeText || 'VAT reverse charge applies: the customer is liable for VAT.'}
              </p>
            )}
          </div>
        ) : (
          <p className="text-[11px] text-[#5B6676] italic">
            Tax is disabled. No tax line items will appear on invoices.
          </p>
        )}
      </div>

      {/* 3. Invoice Remittance Preview */}
      <div className="bg-[#FAF5EA]/60 rounded-xl p-3.5 border border-[#E8E0CF] space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6676]">
            Payment Remittance
          </span>
          <span className="text-[10px] font-semibold text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.5 rounded">
            Client view
          </span>
        </div>

        {/* Bank transfer */}
        {bank?.enabled && (
          <div
            className={`p-2.5 rounded-lg border text-[11px] space-y-1 ${
              defaultMethod === 'bankTransfer'
                ? 'bg-white border-[#0047AB]/30 shadow-2xs'
                : 'bg-white/70 border-[#E8E0CF]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#0E1A2B]">
              <span className="flex items-center gap-1">
                <Building className="w-3 h-3 text-[#0047AB]" />
                <span>Bank transfer</span>
              </span>
              {defaultMethod === 'bankTransfer' && (
                <span className="text-[10px] text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.2 rounded font-bold">
                  Default
                </span>
              )}
            </div>

            <div className="text-[#5B6676] space-y-0.5">
              {bank.accountHolder && <p>Name: <strong className="text-[#0E1A2B]">{bank.accountHolder}</strong></p>}
              {bank.bankName && <p>Bank: <strong className="text-[#0E1A2B]">{bank.bankName}</strong></p>}
              {(bank.accountNumber || bank.iban) && (
                <div className="flex items-center justify-between">
                  <p>
                    Account: <strong className="text-[#0E1A2B]">
                      {showMasked ? (bank.accountNumber || bank.iban) : maskAccountNumber(bank.accountNumber || bank.iban)}
                    </strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowMasked(!showMasked)}
                    aria-label={showMasked ? 'Hide account number' : 'Show full account number'}
                    className="text-[#0047AB] hover:underline p-0.5"
                  >
                    {showMasked ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  </button>
                </div>
              )}
              {bank.swiftBic && <p>SWIFT/BIC: <strong className="text-[#0E1A2B]">{bank.swiftBic}</strong></p>}
              {bank.routingCode && (
                <p>
                  {bank.routingCodeLabel || 'Routing'}: <strong className="text-[#0E1A2B]">{bank.routingCode}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        {/* PayPal */}
        {paypal?.enabled && (
          <div
            className={`p-2.5 rounded-lg border text-[11px] space-y-1 ${
              defaultMethod === 'paypal'
                ? 'bg-white border-[#0047AB]/30 shadow-2xs'
                : 'bg-white/70 border-[#E8E0CF]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#0E1A2B]">
              <span>PayPal</span>
              {defaultMethod === 'paypal' && (
                <span className="text-[10px] text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.2 rounded font-bold">
                  Default
                </span>
              )}
            </div>
            <p className="text-[#5B6676]">{paypal.email}</p>
          </div>
        )}

        {/* Online link */}
        {online?.enabled && (
          <div
            className={`p-2.5 rounded-lg border text-[11px] space-y-1 ${
              defaultMethod === 'onlinePayment'
                ? 'bg-white border-[#0047AB]/30 shadow-2xs'
                : 'bg-white/70 border-[#E8E0CF]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#0E1A2B]">
              <span>{online.label || 'Online payment link'}</span>
              {defaultMethod === 'onlinePayment' && (
                <span className="text-[10px] text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.2 rounded font-bold">
                  Default
                </span>
              )}
            </div>
            <p className="text-[#0047AB] truncate font-medium">{online.url}</p>
          </div>
        )}

        {/* UPI */}
        {isIndiaOrInr && upi?.enabled && (
          <div
            className={`p-2.5 rounded-lg border text-[11px] space-y-1 ${
              defaultMethod === 'upi'
                ? 'bg-white border-[#0047AB]/30 shadow-2xs'
                : 'bg-white/70 border-[#E8E0CF]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[#0E1A2B]">
              <span>UPI ID</span>
              {defaultMethod === 'upi' && (
                <span className="text-[10px] text-[#0047AB] bg-[#E8F0FB] px-1.5 py-0.2 rounded font-bold">
                  Default
                </span>
              )}
            </div>
            <p className="text-[#0E1A2B] font-mono font-bold">{upi.upiId}</p>
          </div>
        )}

        {/* Other */}
        {other?.enabled && other.instructions && (
          <div className="p-2.5 rounded-lg border bg-white/70 border-[#E8E0CF] text-[11px]">
            <p className="text-[#5B6676] whitespace-pre-line leading-relaxed">
              {other.instructions}
            </p>
          </div>
        )}

        {!bank?.enabled && !paypal?.enabled && !online?.enabled && (!upi?.enabled || !isIndiaOrInr) && !other?.enabled && (
          <p className="text-[11px] text-[#B54708] italic">
            No payment methods are currently active. Invoices will prompt you to configure payment methods.
          </p>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Live Preview Card (340px) */}
      <aside className="hidden xl:block w-[340px] shrink-0 sticky top-6 self-start">
        <div className="bg-white rounded-2xl border border-[#E8E0CF] p-5 shadow-sm relative overflow-hidden">
          {/* Top subtle brand accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0047AB] via-[#0047AB]/70 to-[#FFC72C]" />

          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E8E0CF] pt-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#E8F0FB] flex items-center justify-center text-[#0047AB]">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0E1A2B] leading-none font-display">
                  Live Preview
                </h3>
                <p className="text-[10.5px] text-[#5B6676] mt-0.5">
                  Client document letterhead
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#067647] animate-pulse" title="Live sync active" />
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-lg text-[#5B6676] hover:bg-[#FAF5EA] hover:text-[#0E1A2B] transition-colors"
                  title="Hide preview"
                  aria-label="Hide preview"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {previewContent}
        </div>
      </aside>

      {/* Mobile / Tablet Collapsible Drawer Card */}
      <div className="xl:hidden w-full mb-6">
        <div className="bg-white rounded-2xl border border-[#E8E0CF] overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setMobileExpanded(!mobileExpanded)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-[#FAF5EA]/50 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#E8F0FB] flex items-center justify-center text-[#0047AB]">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-bold text-[#0E1A2B]">
                Live document preview
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5B6676]">
              <span>{mobileExpanded ? 'Collapse' : 'Tap to expand'}</span>
              {mobileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {mobileExpanded && (
            <div className="p-4 border-t border-[#E8E0CF] bg-[#FAF5EA]/20">
              {previewContent}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

