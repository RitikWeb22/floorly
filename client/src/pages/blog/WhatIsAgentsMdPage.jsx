import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileCode2,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Share2,
  Copy,
  Sparkles,
  Shield,
  Terminal,
  Cpu,
  Layers,
  Code2,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';

export function WhatIsAgentsMdPage() {
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
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B6676] hover:text-[#0047AB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Guides</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/pricing"
            className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] px-3 py-1.5 transition-colors hidden sm:inline-block"
          >
            Pricing
          </Link>
          <Link
            to="/signup"
            className="text-xs font-semibold bg-[#0047AB] text-white px-3.5 py-1.5 rounded-lg hover:bg-[#003A8C] transition-colors shadow-sm"
          >
            Generate AGENTS.md Free
          </Link>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="flex-1 py-12 px-4 sm:px-8 max-w-4xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[#5B6676] flex items-center gap-2 mb-6">
          <Link to="/" className="hover:text-[#0047AB]">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#0047AB]">Blog</Link>
          <span>/</span>
          <span className="text-[#0E1A2B]">What is AGENTS.md?</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Tooling &amp; Developer Handoffs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1A2B] leading-tight mb-5">
            What is AGENTS.md? The Definitive Guide to AI Coding Assistant Handoffs in Cursor, Claude Code &amp; Copilot
          </h1>

          <p className="text-base sm:text-lg text-[#5B6676] leading-relaxed mb-6 font-normal">
            As autonomous AI coding agents like Cursor, Claude Code, GitHub Copilot Workspace, and Windsurf transform software development, human developers need a reliable method to pass deterministic project rules, architectural boundaries, and scope constraints to AI. Here is what AGENTS.md is, why it matters, and how to write one.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E8E0CF] text-xs text-[#5B6676]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold text-sm">
                R
              </div>
              <div>
                <span className="font-bold text-[#0E1A2B] block text-sm">Ritik</span>
                <span>Founder &amp; Systems Engineer at Floorly</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>October 15, 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>9 min read</span>
              </span>
            </div>
          </div>
        </header>

        {/* Executive Summary Callout */}
        <aside className="bg-white rounded-2xl border-l-4 border-[#0047AB] border border-[#E8E0CF] p-6 mb-10 shadow-sm">
          <h2 className="text-base font-bold text-[#0E1A2B] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0047AB]" />
            <span>Key Takeaways &amp; Executive Summary</span>
          </h2>
          <ul className="text-sm text-[#5B6676] space-y-2 list-disc list-inside">
            <li><strong>AGENTS.md Definition:</strong> A markdown convention placed in the root directory of a project that instructs AI coding agents (Cursor, Claude Code, Copilot, Windsurf) on project architecture, coding standards, forbidden packages, and milestone scopes.</li>
            <li><strong>The Core Problem Solved:</strong> Eliminates hallucinated architectural rewrites, inappropriate library imports, and broken client handoffs when non-technical clients or subsequent developers open the repository in AI editors.</li>
            <li><strong>Relationship to Floorly:</strong> Floorly automatically generates a tailor-made <code>AGENTS.md</code> file directly from your approved client proposal deliverables, preventing scope creep and ensuring AI agents respect project limits.</li>
          </ul>
        </aside>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-[#0E1A2B] space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              1. The Rise of AI Coding Assistants and the Context Problem
            </h2>
            <p>
              In modern software engineering, coding is no longer a purely manual process of typing syntax character by character. Developers and their clients routinely use AI tools such as <strong>Cursor IDE</strong>, <strong>Claude Code</strong>, <strong>GitHub Copilot Workspace</strong>, and <strong>Aider</strong> to write features, generate unit tests, refactor components, and fix production bugs.
            </p>
            <p className="mt-3">
              However, large language models (LLMs) suffer from a fundamental flaw: <em>lack of persistent architectural context</em>. When an AI agent is prompted to "add authentication to the app", it has no intrinsic memory of whether your project standardized on JWT cookies, OAuth 2.0 PKCE, or Supabase Auth. Without strict instruction, the agent will guess—frequently introducing redundant dependencies, mixing styling paradigms (such as mixing CSS modules into a Tailwind project), or implementing patterns that contradict the original client proposal.
            </p>
            <p className="mt-3">
              This is where <code>AGENTS.md</code> becomes critical. Just as <code>README.md</code> communicates project instructions to human developers, <code>AGENTS.md</code> communicates deterministic ground rules, architectural constraints, and deliverable boundaries to artificial intelligence agents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              2. What Exactly is an AGENTS.md File?
            </h2>
            <p>
              An <code>AGENTS.md</code> file is a structured Markdown specification stored at the root of a code repository (e.g. <code>/AGENTS.md</code> or <code>.cursorrules</code> / <code>CLAUDE.md</code> companion) that serves as the single source of truth for all autonomous agents interacting with that codebase.
            </p>
            <p className="mt-3">
              Unlike a generic README that describes features and marketing copy, an <code>AGENTS.md</code> file contains strict operational boundaries written in imperative, machine-readable prose. It specifies:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1.5 text-[#5B6676]">
              <li><strong>Technology Stack Constraints:</strong> Exact versions of frameworks, styling libraries, and state managers.</li>
              <li><strong>Forbidden Practices:</strong> Explicit lists of banned libraries, patterns (e.g. "Do not use inline CSS", "Never modify migrations directly").</li>
              <li><strong>Scope of Work Boundaries:</strong> Exactly what deliverables were scoped and paid for, preventing AI from implementing unauthorized features that cause scope creep.</li>
              <li><strong>Testing &amp; Verification Rules:</strong> Exact terminal commands the agent must run before declaring a task complete.</li>
              <li><strong>Directory Layout &amp; Naming Conventions:</strong> File naming schemas (kebab-case vs PascalCase) and structural organization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              3. Anatomy of a Production-Grade AGENTS.md
            </h2>
            <p>
              A robust AGENTS.md file follows a systematic 6-part hierarchy that search agents and language models parse with minimal context dilution:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 not-prose">
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 1</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Project Identity &amp; Role</h3>
                <p className="text-xs text-[#5B6676]">Defines the persona and operational boundaries of the AI agent within the repository.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 2</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Tech Stack &amp; Hard Constraints</h3>
                <p className="text-xs text-[#5B6676]">Locks down allowed frameworks, package managers, and explicitly banned libraries.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 3</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Contract Scope &amp; Deliverables</h3>
                <p className="text-xs text-[#5B6676]">Extracts agreed milestone features directly from the client proposal or SOW.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 4</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Architecture &amp; Folder Schema</h3>
                <p className="text-xs text-[#5B6676]">Enforces where new files must live, state flow conventions, and API structures.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 5</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Verification &amp; Test Protocol</h3>
                <p className="text-xs text-[#5B6676]">Terminal commands for linting, type-checking, and test validation before finishing tasks.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-[#E8E0CF] shadow-sm">
                <span className="text-xs font-bold text-[#0047AB] uppercase">Section 6</span>
                <h3 className="font-bold text-sm text-[#0E1A2B] mt-1 mb-1">Client Handoff Directives</h3>
                <p className="text-xs text-[#5B6676]">Clear notes explaining how the client or their future contractors should prompt the AI.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              4. Complete Practical Example: Production AGENTS.md
            </h2>
            <p>
              Here is a concrete, production-ready <code>AGENTS.md</code> file generated for a client web development engagement (e.g. an autonomous SaaS portal):
            </p>

            <div className="bg-[#0E1A2B] text-slate-200 rounded-xl p-5 font-mono text-xs overflow-x-auto shadow-lg not-prose my-4">
              <pre><code>{`# AGENTS.md - Project Specification & Coding Guidelines
# Generated by Floorly (https://floorlystudio.me)
# Target AI Tools: Cursor, Claude Code, GitHub Copilot, Windsurf

## 1. Project Role & System Identity
You are a senior full-stack software engineer acting on behalf of the client.
Your goal is to implement features adhering strictly to the agreed client scope.
Do NOT invent unrequested features, install unapproved packages, or re-architect existing modules.

## 2. Technology Stack & Hard Constraints
- Framework: React 18 with Vite (TypeScript strict mode)
- Styling: Tailwind CSS (NO raw CSS files, NO CSS-in-JS libraries)
- State Management: Zustand for global client state, TanStack Query for server state
- Routing: react-router-dom v6 (Data Router pattern)
- Backend: Node.js with Express and Zod validation schemas
- Database: PostgreSQL with Prisma ORM
- STRICT BANS:
  - Do NOT install axios (use native fetch or typed API clients).
  - Do NOT install lodash, moment.js (use date-fns or native modern JS).
  - Do NOT install component libraries (e.g. Material UI, AntD); use curated Tailwind components.

## 3. Scoped Deliverables (Floorly Contract Milestone 1 & 2)
The client has contracted and paid for ONLY the following modules:
1. User Authentication (Google OAuth + Magic Link via Supabase)
2. Interactive Project Scoping Form (Multi-step wizard with local autosave)
3. Stripe Milestone Checkout Session integration
4. PDF Invoice Export generator
Any request outside these 4 items requires a formal Scope Change Order.

## 4. Architecture & Coding Conventions
- File names: kebab-case for utilities, PascalCase for React components (e.g., \`InvoiceCard.tsx\`).
- Co-locate tests alongside implementation files (e.g., \`pricingEngine.ts\` and \`pricingEngine.test.ts\`).
- Ensure all asynchronous calls handle error boundaries gracefully without unhandled rejections.

## 5. Verification Commands (MUST Pass Before Completion)
Before declaring any task or file edit complete, run:
1. \`npm run lint\` (Must pass with 0 errors)
2. \`npm run typecheck\` (TypeScript verification)
3. \`npm run test\` (Unit test suite execution)

## 6. Client Handoff Instructions
When non-technical stakeholders prompt you:
- Explain changes in clear plain English.
- Never delete database migrations or environment variable templates.
- Maintain documentation integrity in README.md.`}</code></pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              5. Why Freelancers Need AGENTS.md in Client Handoffs
            </h2>
            <p>
              When a freelance developer or agency finishes a digital project and hands over the repository, the client frequently hires a junior in-house developer or opens Cursor themselves to make tweaks. Without an <code>AGENTS.md</code> file:
            </p>
            <ol className="list-decimal list-inside mt-3 space-y-2 text-[#5B6676]">
              <li><strong>The AI Breaks Architecture:</strong> The client asks Cursor to "add a contact form", and the AI installs redundant dependencies or writes raw SQLite code in a PostgreSQL application.</li>
              <li><strong>The Client Blames the Freelancer:</strong> When the build breaks two weeks later, the client assumes the original freelancer wrote buggy code, damaging your professional reputation and referral pipeline.</li>
              <li><strong>Scope Creep Defense:</strong> Having the agreed deliverables documented in <code>AGENTS.md</code> prevents the client from assuming that out-of-scope features were included in the original project warranty.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              6. How Floorly Automates AGENTS.md Generation
            </h2>
            <p>
              Writing an <code>AGENTS.md</code> file manually for every project takes time. Floorly solves this by coupling AI client brief scoping with deterministic project governance:
            </p>
            <p className="mt-3">
              When you paste an unstructured client brief into Floorly, the <Link to="/about" className="text-[#0047AB] font-semibold underline">AI Scope Analyzer</Link> extracts inclusions, exclusions, and milestone deliverables. Once your client signs off on the proposal, Floorly's <strong>AGENTS.md Generator</strong> produces a downloadable, production-hardened specification tailored to Cursor, Claude Code, and Copilot with a single click.
            </p>

            <div className="bg-[#0047AB]/5 border border-[#0047AB]/20 rounded-xl p-5 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
              <div>
                <h3 className="font-bold text-sm text-[#0047AB]">Automate Client AGENTS.md Specs</h3>
                <p className="text-xs text-[#5B6676] mt-0.5">Turn client proposals into machine-readable developer guardrails in seconds.</p>
              </div>
              <Link
                to="/signup"
                className="bg-[#0047AB] hover:bg-[#003A8C] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              >
                Start Free with Floorly
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0E1A2B] tracking-tight mb-4">
              Frequently Asked Questions About AGENTS.md
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold text-sm text-[#0E1A2B]">Is AGENTS.md compatible with Claude Code and Cursor?</dt>
                <dd className="text-sm text-[#5B6676] mt-1">Yes. While Cursor also supports <code>.cursorrules</code>, modern AI coding tools (including Claude Code, Copilot, and Aider) recognize root-level Markdown instruction files like <code>AGENTS.md</code> and <code>CLAUDE.md</code>.</dd>
              </div>
              <div>
                <dt className="font-bold text-sm text-[#0E1A2B]">Should AGENTS.md be committed to version control?</dt>
                <dd className="text-sm text-[#5B6676] mt-1">Yes. <code>AGENTS.md</code> should be committed directly to Git so that every collaborator, automated CI pipeline, and AI agent operates under identical architectural constraints.</dd>
              </div>
            </dl>
          </section>
        </div>

        {/* Related Articles Section */}
        <div className="mt-14 pt-8 border-t border-[#E8E0CF]">
          <h2 className="text-xl font-bold text-[#0E1A2B] mb-6">Related Freelance Engineering Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/blog/how-to-price-a-freelance-project"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Pricing Strategy</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                How to Price a Freelance Project: Hourly Floors, Fixed Fees &amp; Break-Even Math
              </h3>
            </Link>

            <Link
              to="/blog/prevent-scope-creep-freelance"
              className="bg-white p-5 rounded-xl border border-[#E8E0CF] hover:border-[#0047AB] hover:shadow-md transition-all group"
            >
              <span className="text-xs font-semibold text-[#0047AB] block mb-1">Contract Protection</span>
              <h3 className="text-sm font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug">
                How to Prevent Scope Creep in Freelance Projects: 7 Practical Contract Tactics
              </h3>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
