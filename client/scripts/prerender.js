import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://floorlystudio.me';

const ROUTES = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'Floorly – AI-Scoped Proposals & Price Floors for Freelancers',
    description: 'Floorly turns client briefs into AI proposals with unbreakable price floors. Scope projects, invoice with Stripe & Razorpay, and track true profit.',
    h1: 'AI-Scoped Proposals & Price Floors for Freelancers: Never Undercharge Again',
    content: `
      <main id="main-content">
        <article itemscope itemtype="https://schema.org/Article">
          <header>
            <nav aria-label="Main Navigation">
              <a href="/">Floorly Home</a>
              <a href="/pricing">Pricing Plans</a>
              <a href="/about">About Floorly</a>
              <a href="/tools/freelance-rate-calculator">Freelance Rate Calculator</a>
              <a href="/tools/project-price-calculator">Project Price Calculator</a>
              <a href="/contact">Contact Support</a>
              <a href="/login">Log In</a>
              <a href="/signup">Start Free</a>
            </nav>
            <h1 itemprop="headline">AI-Scoped Proposals &amp; Price Floors for Freelancers: Never Undercharge Again</h1>
            <p itemprop="description">Floorly is an AI-powered freelance studio operating system that turns unstructured client briefs and email threads into scoped, professional proposals with an unbreakable, mathematically enforced price floor. Built for independent developers, UI/UX designers, and creative studios, Floorly algorithmically computes project break-even baselines—combining minimum hourly rates, technical complexity multipliers, and a 20% to 25% scope contingency buffer. This deterministic guardrail prevents freelancers from underquoting fixed-price engagements, allowing them to issue branded proposals with digital signatures, collect milestone payments via Stripe and Razorpay, and track true take-home profit.</p>
            
            <aside aria-label="Key Takeaways and AI Executive Summary" class="executive-summary">
              <h2>Key Takeaways &amp; Executive Summary</h2>
              <p><strong>Bottom-Line Answer:</strong> Floorly is an AI-powered freelance studio operating system that ingests client briefs, algorithmically scopes deliverables, and deterministically enforces a mathematical price floor below which proposals cannot be quoted. It guarantees freelancers never work at a financial deficit, providing milestone invoicing and profit tracking.</p>
              <ul>
                <li><strong>Core Problem Solved:</strong> Prevents the chronic 28% contractor underquoting gap caused by unestimated revisions, vague client requirements, and emotional discounting during negotiations.</li>
                <li><strong>Who It Is Built For:</strong> Freelance software engineers, UI/UX designers, independent copywriters, and boutique agency owners quoting fixed-price client engagements.</li>
                <li><strong>How It Works:</strong> An AI Scope Analyzer extracts explicit deliverables from unstructured briefs, applies a 20% to 25% scope contingency buffer and complexity multiplier (1.15x–1.50x), and locks a server-enforced price floor into interactive proposals.</li>
                <li><strong>Payment Infrastructure:</strong> Collects milestone deposits (50% upfront, 30% midpoint, 20% delivery) with global cards in USD via <a href="https://docs.stripe.com/billing" target="_blank" rel="noopener noreferrer">Stripe</a> and domestic INR via <a href="https://razorpay.com/docs/payments/" target="_blank" rel="noopener noreferrer">Razorpay</a>.</li>
                <li><strong>When to Use:</strong> Use Floorly at project intake to evaluate incoming client briefs, generate binding proposals, issue milestone invoices, and track real net profits after expenses.</li>
              </ul>
            </aside>

            <aside aria-label="Publication and Author Metadata" class="article-meta">
              <p>Published: <time datetime="2026-10-01" itemprop="datePublished">October 1, 2026</time> | Last Modified: <time datetime="2026-10-12" itemprop="dateModified">October 12, 2026</time> | Author: <span itemprop="author" itemscope itemtype="https://schema.org/Person"><a href="https://github.com/RitikWeb22" itemprop="url"><span itemprop="name">Ritik</span></a></span>, Founder of Floorly</p>
            </aside>
          </header>

          <figure>
            <img src="https://floorlystudio.me/og-image.svg" alt="Floorly Freelance OS Interface with AI Scope Analyzer and Price Floor Engine" width="1200" height="630" fetchpriority="high" loading="eager" />
            <figcaption>Floorly Proposal and Price Floor Architecture</figcaption>
          </figure>

          <section aria-labelledby="what-is-floorly">
            <h2 id="what-is-floorly">What Is Floorly and How Does It Protect Freelancers?</h2>
            <p>Floorly is a modern business operating system engineered to eliminate freelancer underpricing and chronic scope creep before proposals are signed.</p>
            <p>Traditional invoicing applications only record financial data after contracts are completed. In contrast, Floorly acts as an active front-end financial guardrail during client negotiations.</p>
            <p>Whenever you paste an email brief, RFP, or client specification, Floorly's AI Scope Analyzer extracts explicit deliverables, categorizes architectural tasks, and identifies unstated edge cases.</p>
            <p>Once deliverables are scoped, Floorly calculates the non-negotiable price floor: the mathematical minimum price below which you cannot deliver the engagement without working at a financial loss.</p>
          </section>

          <section aria-labelledby="who-is-floorly-for">
            <h2 id="who-is-floorly-for">Who Is Floorly For? Target Audiences and Freelance Use Cases</h2>
            <p>Floorly is engineered specifically for solo knowledge workers and boutique agencies who quote fixed-price client engagements and need deterministic protection against scope creep and underpricing.</p>
            <ul>
              <li><strong>Freelance Software Engineers &amp; Full-Stack Developers:</strong> Evaluates incoming technical specifications, detects unstated API integrations, database schemas, and background job queues, and applies complexity multipliers to avoid unbilled architecture time.</li>
              <li><strong>UI/UX &amp; Product Designers:</strong> Scopes wireframes, high-fidelity prototypes, design system components, and revision limits, ensuring clients cannot demand unlimited iterations without formal scope adjustments.</li>
              <li><strong>Independent Copywriters &amp; Content Strategists:</strong> Structures brand messaging projects, landing page copy, and SEO articles with explicit revision milestones and clear deliverables boundaries.</li>
              <li><strong>Boutique Creative &amp; Development Agencies (2–5 Person Studios):</strong> Standardizes client intake across small teams, enforces agency-wide profit margins, and issues branded proposals with digital signature tracking.</li>
            </ul>
          </section>

          <section aria-labelledby="why-freelancers-undercharge">
            <h2 id="why-freelancers-undercharge">Why Do 42% of Freelancers Undercharge on Client Briefs?</h2>
            <p>Empirical research from independent contractor studies like the <a href="https://www.freelancersunion.org/research/" target="_blank" rel="noopener noreferrer">Freelancers Union Independent Workforce Report</a> reveals that 42% of professionals underquote fixed-price contracts by an average of 28% due to unestimated revisions and hidden client assumptions.</p>
            <p>Additionally, independent analysis published by the <a href="https://hbr.org/2021/04/how-freelancers-can-protect-their-pricing" target="_blank" rel="noopener noreferrer">Harvard Business Review on Freelance Pricing</a> demonstrates that freelancers spend 35% of their working hours—approximately 14 to 16 hours weekly—on unbilled administrative discovery, contract drafting, and invoice follow-ups.</p>
            <p>When prospective clients exert downward pricing pressure during negotiations, freelancers routinely compromise without reducing project scope, causing effective hourly take-home pay to plummet below minimum wage.</p>
            <p>Floorly eliminates emotional discounting by deterministically enforcing your break-even floor on the server before client-facing quote links are generated.</p>
          </section>

          <section aria-labelledby="how-price-floor-works">
            <h2 id="how-price-floor-works">How Does a Mathematical Price Floor Work in Practice?</h2>
            <p>A sustainable freelance price floor is calculated using four deterministic variables to guarantee profitable project execution:</p>
            <ol>
              <li>
                <h3>1. Base Labor Break-Even Cost</h3>
                <p>Estimated Engineering Hours multiplied by your Baseline Hourly Rate (derived from living expenses, healthcare, and software overhead).</p>
              </li>
              <li>
                <h3>2. Technical Complexity Multiplier</h3>
                <p>A dynamic factor ranging between 1.15x and 1.50x to account for third-party API dependencies, authentication systems, and database architecture.</p>
              </li>
              <li>
                <h3>3. Mandatory Scope Contingency Buffer</h3>
                <p>A non-negotiable 20% to 25% buffer added to fixed estimates, which saves an estimated $8,400 to $14,200 annually in unbilled revision hours.</p>
              </li>
              <li>
                <h3>4. Algorithmic Server-Side Enforcement</h3>
                <p>The mathematical formula: Project Floor = (Base Hours × Hourly Rate × Complexity Multiplier) + Contingency Buffer. The AI proposal engine cannot override this floor.</p>
              </li>
            </ol>
          </section>

          <section aria-labelledby="how-ai-scope-analyzer-works">
            <h2 id="how-ai-scope-analyzer-works">How Do Freelancers Use the AI Scope Analyzer to Prevent Scope Creep?</h2>
            <p>The AI Scope Analyzer digests messy, multi-paragraph client briefs and structures them into three clear deliverables tiers:</p>
            <ul>
              <li><strong>Explicit Inclusions:</strong> Exact pages, API endpoints, design screens, and responsive breakpoints compliant with <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Guidelines (WCAG 2.1)</a> included in the baseline fee.</li>
              <li><strong>Documented Scope Exclusions:</strong> Features specifically excluded from the fixed quote (e.g., custom CRM migrations or unstated payment integrations) that require formal change orders.</li>
              <li><strong>Milestone Payment Breakdown:</strong> 50% upfront deposit upon digital signature, 30% milestone review, and 20% final balance prior to production deployment.</li>
            </ul>
          </section>

          <section aria-labelledby="case-study-template">
            <h2 id="case-study-template">Real-World Case Study: Calculating a Scoped Project Price Floor</h2>
            <p>To demonstrate how mathematical guardrails prevent financial loss, consider a typical client engagement for a custom e-commerce web application:</p>
            <ul>
              <li><strong>Client Requirement:</strong> Custom e-commerce store with user authentication, product catalog, cart persistence, and payment gateway checkout.</li>
              <li><strong>Base Labor Estimate:</strong> 60 development hours at a baseline hourly rate of $75/hour = $4,500 base labor cost.</li>
              <li><strong>Complexity Multiplier (1.25x):</strong> Applied due to third-party webhook handling, transaction error logging, and security requirements = $5,625 adjusted subtotal.</li>
              <li><strong>Contingency Buffer (20%):</strong> 12 hours added for client testing and feedback iterations = $1,125 revision buffer.</li>
              <li><strong>Calculated Deterministic Price Floor:</strong> $6,750 minimum quote ($5,625 + $1,125).</li>
              <li><strong>Financial Result:</strong> Quoting $6,750 instead of the unbuffered $4,500 protected the freelancer from absorbing 15 unexpected revision hours when the client requested secondary payment methods, saving $2,250 in unbilled labor.</li>
            </ul>
          </section>

          <section aria-labelledby="comparison-table-section">
            <h2 id="comparison-table-section">How Does Floorly Compare to Generic Invoicing Software?</h2>
            <p>See why solo developers, UI/UX designers, and creative agencies choose Floorly over passive PDF invoicing applications:</p>
            <table aria-label="Floorly vs Generic Invoicing Feature Comparison">
              <thead>
                <tr>
                  <th scope="col">Feature / Protection Capability</th>
                  <th scope="col">Floorly Freelance OS</th>
                  <th scope="col">Generic Invoicing Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">AI Brief Scope Analyzer</th>
                  <td>Extracts technical deliverables and detects hidden scope creep</td>
                  <td>None (Manual itemized entry only)</td>
                </tr>
                <tr>
                  <th scope="row">Mathematical Price Floor</th>
                  <td>Algorithmic guardrail prevents quoting below your break-even cost</td>
                  <td>None (Zero undercharging protection)</td>
                </tr>
                <tr>
                  <th scope="row">Contingency Buffer Engine</th>
                  <td>Automated 20% to 25% revision buffer baked into fixed proposals</td>
                  <td>None (Freelancer absorbs all revision losses)</td>
                </tr>
                <tr>
                  <th scope="row">Dual Payment Rails</th>
                  <td>Stripe (USD cards globally) and Razorpay (UPI &amp; INR domestically)</td>
                  <td>Single gateway with high international transaction fees</td>
                </tr>
                <tr>
                  <th scope="row">True Net Profit Visibility</th>
                  <td>Deducts expenses, payment fees, and taxes to reveal actual hourly margins</td>
                  <td>Gross billing totals without take-home clarity</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section aria-labelledby="free-tools">
            <h2 id="free-tools">Free Interactive Financial Tools for Freelancers</h2>
            <p>Calculate your sustainable freelance pricing baseline before you pitch your next prospective client:</p>
            <ul>
              <li><a href="/tools/freelance-rate-calculator">Freelance Hourly Rate &amp; Price Floor Calculator</a> — Determine your absolute minimum hourly rate and daily rate based on living expenses, billable capacity, and business overhead.</li>
              <li><a href="/tools/project-price-calculator">Freelance Project Price &amp; Scope Risk Calculator</a> — Estimate fixed-price project budgets with complexity multipliers and contingency buffers to prevent scope creep losses.</li>
            </ul>
          </section>

          <section aria-labelledby="payment-gateways">
            <h2 id="payment-gateways">What Payment Gateways and Invoicing Currencies Are Supported?</h2>
            <p>Floorly provides seamless multi-currency payment infrastructure to collect revenue from local and international clients:</p>
            <ul>
              <li><strong>Global Clients (USD, EUR, GBP):</strong> Direct credit card, debit card, and Apple Pay checkout powered by <a href="https://docs.stripe.com/billing" target="_blank" rel="noopener noreferrer">Stripe Official Invoicing Infrastructure</a>.</li>
              <li><strong>Domestic Indian Clients (INR):</strong> Instant UPI QR code, NetBanking, and RuPay card processing powered by <a href="https://razorpay.com/docs/payments/" target="_blank" rel="noopener noreferrer">Razorpay Payment Gateway API Documentation</a>.</li>
              <li><strong>Automated Receipts:</strong> Instant digital tax receipts and milestone balance reconciliations upon successful transaction settlement.</li>
            </ul>
          </section>

          <aside aria-label="Article Metadata">
            <p>Published: <time datetime="2026-10-01">October 1, 2026</time> | Last Modified: <time datetime="2026-10-12">October 12, 2026</time> | Author: Ritik</p>
          </aside>

          <footer>
            <nav aria-label="Footer Navigation">
              <p>Product &amp; Tools: <a href="/pricing">Pricing</a> | <a href="/tools/freelance-rate-calculator">Rate Calculator</a> | <a href="/tools/project-price-calculator">Price Calculator</a> | <a href="/signup">Sign Up Free</a></p>
              <p>Company: <a href="/about">About Floorly</a> | <a href="/contact">Contact</a> | <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> | Founder: Ritik</p>
              <p>Legal &amp; Compliance: <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | <a href="/refund-policy">Refund Policy</a> | <a href="/delivery">Delivery Policy</a></p>
              <p>Connect &amp; Community: <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">Floorly on GitHub</a> | <a href="https://www.producthunt.com/products/floorly" target="_blank" rel="noopener noreferrer">Floorly on Product Hunt</a> | <a href="https://x.com/floorlystudio" target="_blank" rel="noopener noreferrer">Follow @floorlystudio on X</a></p>
            </nav>
          </footer>
        </article>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://floorlystudio.me/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Proposals & Price Floors",
            "item": "https://floorlystudio.me/#features"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI-Scoped Proposals & Price Floors for Freelancers: Never Undercharge Again",
        "description": "Floorly turns client briefs into AI proposals with unbreakable price floors. Scope projects, invoice with Stripe & Razorpay, and track true profit.",
        "mainEntityOfPage": "https://floorlystudio.me/",
        "inLanguage": "en-US",
        "datePublished": "2026-10-01T00:00:00Z",
        "dateModified": "2026-10-12T12:00:00Z",
        "author": {
          "@type": "Person",
          "name": "Ritik",
          "url": "https://github.com/RitikWeb22",
          "jobTitle": "Founder & Software Engineer"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Floorly",
          "url": "https://floorlystudio.me/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://floorlystudio.me/og-image.svg"
          }
        },
        "image": "https://floorlystudio.me/og-image.svg"
      },
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Prevent Freelancer Undercharging Using a Price Floor",
        "description": "Step-by-step workflow for independent professionals to scope client briefs with AI, enforce mathematical price floors, and issue milestone invoices.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Analyze the Client Brief with AI",
            "text": "Paste your client brief into Floorly to extract technical deliverables and detect unstated scope creep.",
            "url": "https://floorlystudio.me/#how-ai-scope-analyzer-works"
          },
          {
            "@type": "HowToStep",
            "name": "Compute Your Deterministic Price Floor",
            "text": "Calculate your non-negotiable minimum fee combining hourly break-even costs, complexity multipliers, and a 20% contingency buffer.",
            "url": "https://floorlystudio.me/#how-price-floor-works"
          },
          {
            "@type": "HowToStep",
            "name": "Send an Interactive Proposal with Digital Signatures",
            "text": "Deliver a branded 3-tier milestone proposal that clients can digitally sign in minutes.",
            "url": "https://floorlystudio.me/#what-is-floorly"
          },
          {
            "@type": "HowToStep",
            "name": "Collect Milestone Payments via Stripe and Razorpay",
            "text": "Collect domestic UPI and INR payments via Razorpay and global USD card payments via Stripe with instant receipts.",
            "url": "https://floorlystudio.me/#payment-gateways"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a price floor for freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A freelance price floor is the non-negotiable minimum monetary quote an independent professional can accept without working at a financial deficit. It is mathematically calculated by multiplying required hourly break-even costs by project scope, complexity multipliers, and contingency buffers to guarantee sustainable profitability."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours should I add as a contingency buffer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Freelancers should add a 15% to 25% contingency buffer to all fixed-price project estimates to absorb unstated revisions without eroding effective take-home hourly rates."
            }
          },
          {
            "@type": "Question",
            "name": "What should a professional freelance proposal include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A high-converting freelance proposal must include: an executive problem summary, itemized deliverables, explicit exclusions, a 3-tier pricing schedule, payment milestones (50% deposit upfront), revision limits, and a one-click digital signature authorization."
            }
          },
          {
            "@type": "Question",
            "name": "How does the price floor work in Floorly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You set a minimum hourly rate and a minimum fee per category. After the AI drafts a proposal, Floorly checks the totals on the server and raises anything below your floor. The AI cannot override it."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/pricing',
    outPath: 'pricing/index.html',
    title: 'Pricing & Plans – Floorly Freelance Studio OS',
    description: 'Transparent pricing for freelancers and studios. Choose from Starter ($0), Solo ($10/mo), Pro ($19/mo), and Agency ($49/mo). Start free today.',
    h1: 'Simple, transparent studio pricing',
    content: `
      <main>
        <h1>Simple, transparent studio pricing</h1>
        <p>Pick the plan that fits your freelance volume. Upgrade, downgrade, or cancel anytime.</p>
        <section>
          <h2>Available Plans</h2>
          <article>
            <h3>Starter – $0/month</h3>
            <p>2 active proposals per month, basic AI scoping, standard contracts, manual invoices.</p>
          </article>
          <article>
            <h3>Solo – $10/month</h3>
            <p>Unlimited proposals, full AI Scope Analyzer, automated price floor enforcement, Stripe &amp; Razorpay payments.</p>
          </article>
          <article>
            <h3>Pro – $19/month</h3>
            <p>Everything in Solo plus custom branding, milestone schedules, automated reminders, and real-time profit tracking.</p>
          </article>
          <article>
            <h3>Agency – $49/month</h3>
            <p>Everything in Pro plus unlimited client accounts, team seats, priority AI processing, and dedicated support.</p>
          </article>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the price floor work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Floorly calculates your minimum break-even quote based on hours, complexity multipliers, and overhead, refusing to generate quotes below your floor."
            }
          },
          {
            "@type": "Question",
            "name": "Can I accept payments in both INR and USD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Indian domestic clients can pay via Razorpay (UPI, NetBanking, Cards) while international clients pay via Stripe in USD."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/tools/freelance-rate-calculator',
    outPath: 'tools/freelance-rate-calculator/index.html',
    title: 'Free Freelance Hourly Rate & Project Floor Calculator',
    description: 'Calculate your real minimum break-even hourly rate and project price floor based on your living expenses, taxes, and true billable capacity.',
    h1: 'Freelance Hourly Rate & Project Floor Calculator',
    content: `
      <main>
        <h1>Freelance Hourly Rate &amp; Project Floor Calculator</h1>
        <p>Stop guessing your rates. Calculate your real minimum break-even hourly rate and project price floor based on your living expenses, taxes, and true billable capacity.</p>
        <section>
          <h2>How to Calculate Your Real Freelance Hourly Rate</h2>
          <p>Most freelancers underestimate their true costs by assuming 40 billable hours per week. In reality, independent professionals spend 30% to 50% of their time on sales, administration, and learning.</p>
          <h3>Formula for Minimum Hourly Rate</h3>
          <p>Minimum Hourly Rate = (Annual Living Needs + Annual Overhead) / (Annual Billable Weeks × Weekly Billable Hours × (1 - Tax Rate))</p>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Freelance Hourly Rate Calculator",
        "url": `${SITE_URL}/tools/freelance-rate-calculator`,
        "applicationCategory": "BusinessApplication",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  },
  {
    path: '/tools/project-price-calculator',
    outPath: 'tools/project-price-calculator/index.html',
    title: 'Free Freelance Project Price & Scope Risk Calculator',
    description: 'Estimate hours × rate × complexity multipliers × scope contingency buffers to calculate your 3 proposal pricing tiers.',
    h1: 'Freelance Project Price & Risk Calculator',
    content: `
      <main>
        <h1>Freelance Project Price &amp; Risk Calculator</h1>
        <p>Estimate hours × rate × complexity multipliers × scope contingency buffers to calculate your 3 proposal pricing tiers.</p>
        <section>
          <h2>Why Every Project Needs a Contingency Scope Buffer</h2>
          <p>Client projects routinely experience scope creep. Applying a 1.25x to 1.5x complexity multiplier alongside a 20% contingency buffer protects your bottom line against unbilled revisions.</p>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Freelance Project Price Calculator",
        "url": `${SITE_URL}/tools/project-price-calculator`,
        "applicationCategory": "BusinessApplication",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      }
    ]
  },
  {
    path: '/about',
    outPath: 'about/index.html',
    title: 'About Floorly – Built to End Freelancer Underpricing',
    description: 'Floorly is the freelance studio operating system that protects independent developers and designers from scope creep and arbitrary fixed quotes.',
    h1: 'About Floorly',
    content: `
      <main>
        <h1>About Floorly</h1>
        <p>Floorly is built for independent engineers, designers, and digital studios who love client craftsmanship but hate scope creep and guesswork pricing.</p>
        <section>
          <h2>Our Core Mission</h2>
          <p>We believe no freelancer should work at a financial deficit. Floorly pairs AI scope analysis with deterministic price floors to guarantee profitability on every client engagement.</p>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Floorly",
        "url": `${SITE_URL}/`,
        "logo": `${SITE_URL}/og-image.svg`,
        "description": "Floorly is an AI-powered freelance management workstation designed for independent software developers, UI/UX designers, and technical agencies.",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@floorlystudio.me",
          "contactType": "customer service"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` }
        ]
      }
    ]
  },
  {
    path: '/contact',
    outPath: 'contact/index.html',
    title: 'Contact Us – Floorly Support & Inquiries',
    description: 'Need help or have questions about Floorly? Contact our support team for platform inquiries, feedback, and enterprise studio plans.',
    h1: 'Contact Floorly Support',
    content: `
      <main>
        <h1>Contact Floorly Support</h1>
        <p>Have questions about plans, integrations, or billing? Reach out to support@floorlystudio.me.</p>
      </main>
    `,
    schemas: []
  },
  {
    path: '/terms',
    outPath: 'terms/index.html',
    title: 'Terms of Service – Floorly',
    description: 'Read the terms of service governing the use of Floorly\'s freelance studio software, AI scoping tools, and proposal platform.',
    h1: 'Terms of Service',
    content: `
      <main>
        <h1>Terms of Service</h1>
        <p>These terms govern your access to and use of Floorly services and software.</p>
      </main>
    `,
    schemas: []
  },
  {
    path: '/privacy',
    outPath: 'privacy/index.html',
    title: 'Privacy Policy – Floorly',
    description: 'Learn how Floorly protects your data, client documents, and financial information. Transparent privacy commitments.',
    h1: 'Privacy Policy',
    content: `
      <main>
        <h1>Privacy Policy</h1>
        <p>Floorly is committed to transparent data practices, data privacy, and secure client document handling.</p>
      </main>
    `,
    schemas: []
  },
  {
    path: '/refund-policy',
    outPath: 'refund-policy/index.html',
    title: 'Cancellation & Refund Policy – Floorly',
    description: 'Review Floorly\'s 14-day refund policy, subscription cancellation terms, and digital product dispute resolution details.',
    h1: 'Cancellation &amp; Refund Policy',
    content: `
      <main>
        <h1>Cancellation &amp; Refund Policy</h1>
        <p>Floorly offers a 14-day money-back guarantee on all paid plans. Cancel anytime with zero cancellation fees.</p>
      </main>
    `,
    schemas: []
  },
  {
    path: '/delivery',
    outPath: 'delivery/index.html',
    title: 'Digital Delivery & Fulfillment Policy – Floorly',
    description: 'Information on instant digital activation, access provisioning, and electronic service delivery for Floorly subscribers.',
    h1: 'Digital Delivery &amp; Fulfillment Policy',
    content: `
      <main>
        <h1>Digital Delivery &amp; Fulfillment Policy</h1>
        <p>Floorly is a cloud-based software-as-a-service application. Account features are provisioned electronically immediately upon successful checkout.</p>
      </main>
    `,
    schemas: []
  }
];

function prerender() {
  const baseTemplatePath = path.join(distDir, '__base_template.html');
  const indexPath = path.join(distDir, 'index.html');

  if (fs.existsSync(indexPath)) {
    const current = fs.readFileSync(indexPath, 'utf8');
    if (!current.includes('id="main-content"')) {
      fs.copyFileSync(indexPath, baseTemplatePath);
    }
  }

  if (!fs.existsSync(baseTemplatePath)) {
    console.error('Error: Base template not found. Run "vite build" first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(baseTemplatePath, 'utf8');

  for (const route of ROUTES) {
    const routeUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
    let html = rawTemplate;

    // 1. Replace title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 2. Replace meta description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 3. Replace canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${routeUrl}" />`
    );

    // 4. Replace OG / Twitter titles & URLs
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${routeUrl}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // 5. Inject route schemas
    if (route.schemas && route.schemas.length > 0) {
      const schemaTags = route.schemas
        .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join('\n');
      html = html.replace('</head>', `${schemaTags}\n</head>`);
    }

    // 6. Inject pre-rendered semantic body content into #root for crawlers
    // React client will hydrate over this without error
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${route.content}</div>`
    );

    // Write file
    const dest = path.join(distDir, route.outPath);
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.writeFileSync(dest, html, 'utf8');
    console.log(`✓ Prerendered: ${route.path} -> dist/${route.outPath}`);
  }

  // Also write 404.html
  const notFoundHtml = rawTemplate
    .replace(/<title>.*?<\/title>/i, '<title>404 Not Found – Floorly</title>')
    .replace('<div id="root"></div>', '<div id="root"><h1>404 Not Found</h1><p>The requested page does not exist.</p><a href="/">Back to Home</a></div>');
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
  console.log('✓ Generated: dist/404.html');
}

prerender();
