import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Building2,
  Receipt,
  CreditCard,
  FileText,
  Bell,
  Globe,
  Zap,
  Shield,
  UserCheck,
  ChevronRight,
} from 'lucide-react';

export const SETTINGS_NAV_GROUPS = [
  {
    title: 'Workspace',
    items: [
      { id: 'business', label: 'Business Profile', desc: 'Identity, address & logos', icon: Building2 },
      { id: 'regional', label: 'Regional & Currency', desc: 'Currency & date formatting', icon: Globe },
      { id: 'account', label: 'Account & Security', desc: 'Password & login credentials', icon: UserCheck },
    ],
  },
  {
    title: 'Finance & Invoicing',
    items: [
      { id: 'taxes', label: 'Taxes & Compliance', desc: 'GST, VAT & tax IDs', icon: Receipt },
      { id: 'payments', label: 'Payment Methods', desc: 'Bank, UPI, PayPal & links', icon: CreditCard },
      { id: 'documents', label: 'Document Defaults', desc: 'Prefixes & payment terms', icon: FileText },
    ],
  },
  {
    title: 'Platform & Billing',
    items: [
      { id: 'plan-and-billing', label: 'Plan & Billing', desc: 'Tier, limits & checkout', icon: Zap },
      { id: 'notifications', label: 'Notifications', desc: 'Email alerts & invoice triggers', icon: Bell },
      { id: 'data-and-privacy', label: 'Data & Privacy', desc: 'Exports & account privacy', icon: Shield },
    ],
  },
];

export function SettingsNav({ activeSection, onSelectSection }) {
  return (
    <>
      {/* Desktop Vertical Categorized Nav (260px, Sticky) */}
      <aside className="hidden lg:block w-[260px] shrink-0 sticky top-6 self-start">
        <nav
          aria-label="Settings navigation"
          className="bg-white rounded-2xl border border-[#E8E0CF] p-3 shadow-xs space-y-4"
        >
          {SETTINGS_NAV_GROUPS.map((group, groupIdx) => (
            <div key={group.title} className={groupIdx > 0 ? 'pt-2.5 border-t border-[#E8E0CF]/70' : ''}>
              <div className="px-3 pb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B6676]">
                  {group.title}
                </span>
                <span className="text-[10px] text-[#5B6676]/60 font-mono font-medium">
                  {group.items.length}
                </span>
              </div>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <NavLink
                      key={item.id}
                      to={`/settings/${item.id}`}
                      onClick={() => onSelectSection && onSelectSection(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all duration-150 group relative ${
                        isActive
                          ? 'bg-[#E8F0FB] text-[#0047AB] font-bold shadow-xs'
                          : 'text-[#5B6676] hover:bg-[#FAF5EA] hover:text-[#0E1A2B]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r-full bg-[#0047AB]" />
                      )}

                      <div className="flex items-center gap-2.5 min-w-0 pr-1">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isActive
                              ? 'bg-[#0047AB] text-white shadow-2xs'
                              : 'bg-[#FAF5EA] text-[#5B6676] group-hover:text-[#0E1A2B] group-hover:bg-[#FAF5EA]/80'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>

                        <div className="min-w-0">
                          <div
                            className={`text-[13px] leading-tight truncate ${
                              isActive ? 'font-bold text-[#0047AB]' : 'font-semibold text-[#0E1A2B]'
                            }`}
                          >
                            {item.label}
                          </div>
                          <div className="text-[10.5px] text-[#5B6676] truncate leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive
                            ? 'text-[#0047AB] translate-x-0.5'
                            : 'text-transparent group-hover:text-[#5B6676]/50'
                        }`}
                      />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Tablet & Mobile Horizontally Scrollable Tab Bar */}
      <div className="lg:hidden w-full overflow-x-auto no-scrollbar pb-2 mb-4 border-b border-[#E8E0CF]">
        <div className="flex items-center gap-1.5 min-w-max px-1">
          {SETTINGS_NAV_GROUPS.flatMap((g) => g.items).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <NavLink
                key={item.id}
                to={`/settings/${item.id}`}
                onClick={() => onSelectSection && onSelectSection(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0047AB] text-white shadow-xs'
                    : 'bg-white text-[#5B6676] border border-[#E8E0CF] hover:bg-[#FAF5EA]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

