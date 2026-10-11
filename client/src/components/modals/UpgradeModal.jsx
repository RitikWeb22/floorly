import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../../config/plans';

export function UpgradeModal({ isOpen, onClose, currentPlan = 'starter' }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E8E0CF] max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-[#E8E0CF] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-[#E8F0FB] text-[#0047AB]">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2
                className="text-xl sm:text-2xl font-black text-[#0E1A2B]"
                style={{ fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" }}
              >
                Choose the Right Plan for Your Studio
              </h2>
            </div>
            <p className="text-xs text-[#5B6676] mt-1">
              Unlock unlimited clients, autonomous AI scoping, and client-specific AGENTS.md generation.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5B6676] hover:bg-[#FAF5EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRICING_PLANS.filter((p) => p.id !== 'free').map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-5 border flex flex-col justify-between ${
                plan.popular
                  ? 'border-[#0047AB] bg-[#E8F0FB]/30 ring-2 ring-[#0047AB]/20'
                  : 'border-[#E8E0CF] bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-[#0E1A2B]">{plan.name}</h3>
                  {plan.popular && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#FFC72C] text-[#0E1A2B]">
                      Popular
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-black text-[#0E1A2B]">${plan.monthly}</span>
                  <span className="text-xs text-[#5B6676]">/month</span>
                </div>
                <div className="space-y-2 text-xs text-[#0E1A2B] mb-4">
                  {plan.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#067647] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  navigate('/pricing');
                }}
                className={`w-full py-2 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1 ${
                  plan.popular
                    ? 'bg-[#0047AB] text-white hover:bg-[#003A8C]'
                    : 'bg-white border border-[#E8E0CF] text-[#0E1A2B] hover:bg-[#FAF5EA]'
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center border-t border-[#E8E0CF]">
          <button
            type="button"
            onClick={() => {
              onClose();
              navigate('/pricing');
            }}
            className="text-xs font-bold text-[#0047AB] hover:underline inline-flex items-center gap-1"
          >
            <span>Compare full feature matrix & annual discounts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
