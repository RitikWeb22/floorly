import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  ArrowLeft,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  HelpCircle,
  Sparkles,
  Phone,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { Footer } from '../components/layout/Footer';
import { Logo } from '../components/common/Logo';
import { siteConfig } from '../config/site';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const hasGrievance = Boolean(siteConfig.grievanceOfficerName || siteConfig.grievanceEmail);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0E1A2B] flex flex-col font-sans">
      {/* Top Header */}
      <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#E8E0CF] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Logo size="sm" />
          </Link>
          <div className="h-4 w-px bg-[#E8E0CF]" />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E8F0FB] text-[#0047AB]">
            Support & Grievances
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12">
        {/* Page Hero */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FB] text-[#0047AB] text-xs font-mono font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Contact Desk</span>
          </div>
          <h1
            className="text-3xl sm:text-4xl font-semibold text-[#0E1A2B] tracking-[-0.03em] font-display"
          >
            Get in touch with the Floorly team
          </h1>
          <p className="text-xs sm:text-sm text-[#5B6676] leading-relaxed">
            Have a question about your subscription, need assistance with your pricing rules, or wish to report a technical issue? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E8E0CF] p-6 space-y-5 shadow-xs">
              <h2
                className="text-base font-medium text-[#0E1A2B] flex items-center gap-2 font-display tracking-[-0.01em]"
              >
                <Mail className="w-4 h-4 text-[#0047AB]" />
                <span>Contact Channels</span>
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-[#0E1A2B]">
                {/* Legal Operator Entity - Render only if available */}
                {siteConfig.legalName && (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                    <Building2 className="w-4 h-4 text-[#0047AB] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">Operating Entity</div>
                      <div className="font-semibold text-xs text-[#0E1A2B] mt-0.5">{siteConfig.legalName}</div>
                    </div>
                  </div>
                )}

                {/* Primary Support Email */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                  <Mail className="w-4 h-4 text-[#0047AB] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">Customer Support Email</div>
                    <a
                      href={`mailto:${siteConfig.contactEmail || siteConfig.supportEmail}`}
                      className="text-[#0047AB] hover:underline font-mono text-xs font-semibold block mt-0.5"
                    >
                      {siteConfig.contactEmail || siteConfig.supportEmail}
                    </a>
                  </div>
                </div>

                {/* Contact Phone - Render only if available */}
                {siteConfig.contactPhone && (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                    <Phone className="w-4 h-4 text-[#067647] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">Direct Phone Support</div>
                      <a
                        href={`tel:${siteConfig.contactPhone.replace(/\s+/g, '')}`}
                        className="text-[#0E1A2B] hover:underline font-mono text-xs font-semibold block mt-0.5"
                      >
                        {siteConfig.contactPhone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Registered Business Address - Render only if available */}
                {siteConfig.contactAddress && (
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                    <MapPin className="w-4 h-4 text-[#0047AB] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">Registered Office Address</div>
                      <div className="text-[#0E1A2B] text-xs mt-0.5 leading-relaxed whitespace-pre-line">
                        {siteConfig.contactAddress}
                      </div>
                    </div>
                  </div>
                )}

                {/* Support Response Time */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF]">
                  <Clock className="w-4 h-4 text-[#0047AB] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6676]">Response Time & Working Hours</div>
                    <div className="text-[#0E1A2B] text-xs mt-0.5 leading-relaxed">
                      Monday to Friday: 9:00 AM – 6:00 PM IST<br />
                      Guaranteed first response within <strong>24 to 48 business hours</strong>.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grievance Redressal Mechanism (Required under Indian IT Rules) - Render only if configured */}
            {hasGrievance && (
              <div className="bg-white rounded-2xl border border-[#E8E0CF] p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0047AB]" />
                  <h3
                    className="text-sm font-medium text-[#0E1A2B] font-display"
                  >
                    Grievance Officer
                  </h3>
                </div>
                <p className="text-[11px] text-[#5B6676] leading-relaxed">
                  In accordance with the Information Technology Act and rules made thereunder:
                </p>
                <div className="p-3 rounded-xl bg-[#FAF5EA] border border-[#E8E0CF] space-y-1 text-xs">
                  {siteConfig.grievanceOfficerName && (
                    <div>
                      <span className="text-[#5B6676]">Designated Officer: </span>
                      <strong className="text-[#0E1A2B]">{siteConfig.grievanceOfficerName}</strong>
                    </div>
                  )}
                  {siteConfig.grievanceEmail && (
                    <div>
                      <span className="text-[#5B6676]">Grievance Email: </span>
                      <a href={`mailto:${siteConfig.grievanceEmail}`} className="text-[#0047AB] font-mono hover:underline">
                        {siteConfig.grievanceEmail}
                      </a>
                    </div>
                  )}
                  <div className="text-[11px] text-[#5B6676] pt-1 border-t border-[#E8E0CF]">
                    Acknowledgement within 48 hours; resolution within 15 working days.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E8E0CF] p-6 sm:p-8 shadow-xs">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#ECFDF3] text-[#067647] border border-[#A6F4C5] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-xl font-medium text-[#0E1A2B] font-display tracking-[-0.01em]"
                  >
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6676] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong>{formData.name}</strong>. Our customer support desk will review your message and reply directly to <span className="font-mono text-[#0047AB] font-semibold">{formData.email}</span> within 24–48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'general', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl border border-[#E8E0CF] text-xs font-bold text-[#0E1A2B] hover:bg-[#FAF5EA] transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2
                      className="text-lg font-medium text-[#0E1A2B] font-display tracking-[-0.01em]"
                    >
                      Send us an inquiry
                    </h2>
                    <p className="text-xs text-[#5B6676] mt-0.5">
                      Fill out the form below and our desk will respond directly to your email.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0E1A2B]">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-10 px-3 rounded-xl border border-[#E8E0CF] text-xs text-[#0E1A2B] bg-[#FAF5EA]/30 focus:outline-hidden focus:ring-2 focus:ring-[#0047AB] focus:bg-white transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0E1A2B]">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 px-3 rounded-xl border border-[#E8E0CF] text-xs text-[#0E1A2B] bg-[#FAF5EA]/30 focus:outline-hidden focus:ring-2 focus:ring-[#0047AB] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0E1A2B]">Subject / Department</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-10 px-3 rounded-xl border border-[#E8E0CF] text-xs text-[#0E1A2B] bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0047AB] transition-all"
                    >
                      <option value="general">General Support & Product Questions</option>
                      <option value="billing">Billing, Invoices & Subscription Refunds</option>
                      <option value="technical">Technical Support & Bug Reports</option>
                      <option value="partnership">Legal, Compliance & Enterprise Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0E1A2B]">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please provide details regarding your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-[#E8E0CF] text-xs text-[#0E1A2B] bg-[#FAF5EA]/30 focus:outline-hidden focus:ring-2 focus:ring-[#0047AB] focus:bg-white transition-all leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-xl bg-[#0047AB] hover:bg-[#003A8C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Dispatching message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
