import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from './store/useAuthStore';
import { AppLayout } from './components/layout/AppLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Analytics } from '@vercel/analytics/react';

// Robust lazy-loader that automatically catches stale deployment chunks and force-refreshes once
function lazyWithRetry(componentImport) {
  return lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem('page-has-been-force-refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem('page-has-been-force-refreshed', 'false');
      return component;
    } catch (error) {
      const isDynamicImportError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.name === 'ChunkLoadError' ||
        error?.message?.includes('Importing a module script failed') ||
        error?.message?.includes('error loading dynamically imported module');

      if (!pageHasAlreadyBeenForceRefreshed && isDynamicImportError) {
        window.sessionStorage.setItem('page-has-been-force-refreshed', 'true');
        window.location.reload();
        return { default: () => null };
      }

      throw error;
    }
  });
}

// Lazy-loaded Public Pages
const LandingPage = lazyWithRetry(() => import('./pages/LandingPage').then((m) => ({ default: m.LandingPage })));
const AuthPage = lazyWithRetry(() => import('./pages/AuthPage').then((m) => ({ default: m.AuthPage })));
const TermsPage = lazyWithRetry(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazyWithRetry(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const RefundPage = lazyWithRetry(() => import('./pages/RefundPage').then((m) => ({ default: m.RefundPage })));
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const ForgotPasswordPage = lazyWithRetry(() => import('./pages/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })));
const PublicProposalPage = lazyWithRetry(() => import('./pages/PublicProposalPage').then((m) => ({ default: m.PublicProposalPage })));
const PublicInvoicePage = lazyWithRetry(() => import('./pages/PublicInvoicePage').then((m) => ({ default: m.PublicInvoicePage })));
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const PricingPage = lazyWithRetry(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })));
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const DeliveryPage = lazyWithRetry(() => import('./pages/DeliveryPage').then((m) => ({ default: m.DeliveryPage })));
const RazorpayTestPage = lazyWithRetry(() => import('./pages/RazorpayTestPage').then((m) => ({ default: m.RazorpayTestPage })));
const FreelanceRateCalculatorPage = lazyWithRetry(() => import('./pages/tools/FreelanceRateCalculatorPage').then((m) => ({ default: m.FreelanceRateCalculatorPage })));
const ProjectPriceCalculatorPage = lazyWithRetry(() => import('./pages/tools/ProjectPriceCalculatorPage').then((m) => ({ default: m.ProjectPriceCalculatorPage })));
const AiProposalGeneratorPage = lazyWithRetry(() => import('./pages/tools/AiProposalGeneratorPage').then((m) => ({ default: m.AiProposalGeneratorPage })));
const BlogIndexPage = lazyWithRetry(() => import('./pages/blog/BlogIndexPage').then((m) => ({ default: m.BlogIndexPage })));
const WhatIsAgentsMdPage = lazyWithRetry(() => import('./pages/blog/WhatIsAgentsMdPage').then((m) => ({ default: m.WhatIsAgentsMdPage })));
const HowToPriceFreelanceProjectPage = lazyWithRetry(() => import('./pages/blog/HowToPriceFreelanceProjectPage').then((m) => ({ default: m.HowToPriceFreelanceProjectPage })));
const FreelanceScopeOfWorkTemplatePage = lazyWithRetry(() => import('./pages/blog/FreelanceScopeOfWorkTemplatePage').then((m) => ({ default: m.FreelanceScopeOfWorkTemplatePage })));
const PreventScopeCreepPage = lazyWithRetry(() => import('./pages/blog/PreventScopeCreepPage').then((m) => ({ default: m.PreventScopeCreepPage })));

// Lazy-loaded Authenticated Pages
const DashboardPage = lazyWithRetry(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const AnalyzerPage = lazyWithRetry(() => import('./pages/AnalyzerPage').then((m) => ({ default: m.AnalyzerPage })));
const ProposalsPage = lazyWithRetry(() => import('./pages/ProposalsPage').then((m) => ({ default: m.ProposalsPage })));
const ProposalBuilderPage = lazyWithRetry(() => import('./pages/ProposalBuilderPage').then((m) => ({ default: m.ProposalBuilderPage })));
const ClientsPage = lazyWithRetry(() => import('./pages/ClientsPage').then((m) => ({ default: m.ClientsPage })));
const ClientDetailPage = lazyWithRetry(() => import('./pages/ClientDetailPage').then((m) => ({ default: m.ClientDetailPage })));
const ProjectsPage = lazyWithRetry(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const InvoicesPage = lazyWithRetry(() => import('./pages/InvoicesPage').then((m) => ({ default: m.InvoicesPage })));
const ExpensesPage = lazyWithRetry(() => import('./pages/ExpensesPage').then((m) => ({ default: m.ExpensesPage })));
const TemplatesPage = lazyWithRetry(() => import('./pages/TemplatesPage').then((m) => ({ default: m.TemplatesPage })));
const PricingRulesPage = lazyWithRetry(() => import('./pages/PricingRulesPage').then((m) => ({ default: m.PricingRulesPage })));
const AgentsDocPage = lazyWithRetry(() => import('./pages/AgentsDocPage').then((m) => ({ default: m.AgentsDocPage })));
const SettingsPage = lazyWithRetry(() => import('./pages/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const ProposalPrintPage = lazyWithRetry(() => import('./pages/ProposalPrintPage').then((m) => ({ default: m.ProposalPrintPage })));
const InvoicePrintPage = lazyWithRetry(() => import('./pages/InvoicePrintPage').then((m) => ({ default: m.InvoicePrintPage })));
const PaymentReceiptPrintPage = lazyWithRetry(() => import('./pages/PaymentReceiptPrintPage').then((m) => ({ default: m.PaymentReceiptPrintPage })));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-3 p-8 font-sans">
      <Loader2 className="w-7 h-7 text-brand-600 animate-spin" />
      <span className="text-xs text-charcoal-500 font-medium">Loading content...</span>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-background text-charcoal-600 gap-3 font-sans">
        <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
        <span className="text-xs font-medium tracking-wide">Loading Floorly Workspace...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function AppContent() {
  const { isAuthenticated, isLoading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-background text-charcoal-600 gap-3 font-sans">
        <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
        <span className="text-xs font-medium tracking-wide">Initializing Floorly...</span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          {/* Public Marketing & Legal Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/delivery-policy" element={<DeliveryPage />} />
          <Route path="/shipping" element={<DeliveryPage />} />
          <Route path="/shipping-policy" element={<DeliveryPage />} />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage />}
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/tools/freelance-rate-calculator" element={<FreelanceRateCalculatorPage />} />
          <Route path="/tools/project-price-calculator" element={<ProjectPriceCalculatorPage />} />
          <Route path="/tools/freelance-proposal-generator" element={<AiProposalGeneratorPage />} />
          <Route path="/tools/ai-proposal-generator" element={<AiProposalGeneratorPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/what-is-agents-md" element={<WhatIsAgentsMdPage />} />
          <Route path="/blog/how-to-price-a-freelance-project" element={<HowToPriceFreelanceProjectPage />} />
          <Route path="/blog/freelance-scope-of-work-template" element={<FreelanceScopeOfWorkTemplatePage />} />
          <Route path="/blog/prevent-scope-creep-freelance" element={<PreventScopeCreepPage />} />
          <Route path="/checkout-test" element={<RazorpayTestPage />} />
          <Route path="/razorpay-test" element={<RazorpayTestPage />} />

          {/* Public Shared Document View Pages (Accessible by clients without account) */}
          <Route path="/p/:token" element={<PublicProposalPage />} />
          <Route path="/i/:token" element={<PublicInvoicePage />} />

          {/* Authenticated Workspace Application Routes */}
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analyzer" element={<AnalyzerPage />} />
            <Route path="/proposals" element={<ProposalsPage />} />
            <Route path="/proposals/new" element={<ProposalBuilderPage />} />
            <Route path="/proposals/:id/edit" element={<ProposalBuilderPage />} />
            <Route path="/proposals/:id" element={<ProposalBuilderPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/clients/:id" element={<ClientDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/invoices" element={<InvoicesPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/pricing-rules" element={<PricingRulesPage />} />
            <Route path="/agents-doc" element={<AgentsDocPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/:section" element={<SettingsPage />} />
          </Route>

          {/* Dedicated Print Routes (No AppLayout shell, no navbar, no sidebar) */}
          <Route
            path="/proposals/:id/print"
            element={
              <ProtectedRoute>
                <ProposalPrintPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoices/:id/print"
            element={
              <ProtectedRoute>
                <InvoicePrintPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoices/payments/:paymentId/print"
            element={
              <ProtectedRoute>
                <PaymentReceiptPrintPage />
              </ProtectedRoute>
            }
          />

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <Analytics />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
