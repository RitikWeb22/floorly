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
    description: 'Floorly turns client briefs into scoped proposals with price floors. Prevent underquoting, add payment links, and track true profit margins.',
    h1: 'AI-Scoped Proposals & Price Floors for Freelancers: Never Undercharge Again',
    content: `
      <main id="main-content">
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
          <h1>AI-Scoped Proposals &amp; Price Floors for Freelancers: Never Undercharge Again</h1>
          <p>Floorly is a web app for freelancers and small studios. Paste a client brief, and AI scopes the work and estimates the hours. Every proposal is checked against a minimum price you set, so it can't go below your floor. Then invoice by milestone, record payments, and see your profit after expenses and your own time. Built for freelance developers, designers, writers and small agencies who send fixed-price proposals.</p>
          <p><small>Last updated: October 13, 2026</small></p>
          
          <aside aria-label="Key Takeaways and AI Executive Summary" class="executive-summary">
            <h2>What are the key takeaways and summary of Floorly?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Floorly is a proposal scoping and price floor web app that prevents freelance professionals from quoting below their minimum break-even rate. It parses raw client briefs into milestones, guarantees quotes meet server-side floor thresholds, and tracks net profit margins on milestone invoices.</p>
            <ul>
              <li><strong>Target Audience:</strong> Solo freelance software engineers, product designers, writers, and small digital agency owners quoting fixed-price contracts.</li>
              <li><strong>Primary Use Cases:</strong> Evaluating incoming client briefs, calculating deterministic price floors, defending against scope creep, and milestone invoicing.</li>
              <li><strong>When to Use:</strong> At project intake when negotiating proposals with clients, to ensure every contract protects your effective hourly rate.</li>
              <li><strong>Core Problem Solved:</strong> Prevents quoting below your minimum by catching unestimated revisions, vague client requirements, and emotional discounting during negotiations.</li>
              <li><strong>Client Payment Details:</strong> Users add their own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to proposals and invoices, and record payments in Floorly.</li>
            </ul>
          </aside>
        </header>

        <figure>
          <img src="https://floorlystudio.me/og-image.png" alt="Floorly Interface with AI Scope Analyzer and Price Floor Engine" width="1200" height="630" fetchpriority="high" loading="eager" />
          <figcaption>Floorly Proposal and Price Floor Architecture</figcaption>
        </figure>

        <section aria-labelledby="what-is-floorly">
          <h2 id="what-is-floorly">What is Floorly and how does it protect freelancers?</h2>
          <p><strong>Direct Answer:</strong> Floorly is a web app designed to help freelancers eliminate underpricing and unbilled scope creep before proposals are approved by checking all quotes against a server-side price floor.</p>
          <p>Traditional invoicing tools record financial data only after contracts are underway. In contrast, Floorly acts as an active front-end guardrail during proposal creation.</p>
          <p>Whenever you paste an email brief, RFP, or client specification, Floorly's AI Scope Analyzer extracts deliverables, categorizes tasks, and identifies potential edge cases.</p>
          <p>Once deliverables are scoped, Floorly checks the proposal against your price floor: the minimum price needed to deliver the project sustainably based on your minimum rates.</p>
        </section>

        <section aria-labelledby="who-is-floorly-for">
          <h2 id="who-is-floorly-for">Who is Floorly built for and when should you use it?</h2>
          <p><strong>Direct Answer:</strong> Floorly is built for solo knowledge workers and boutique studios quoting fixed-price work who want to avoid chronic underpricing and scope creep.</p>
          <ul>
            <li><strong>Freelance Software Engineers &amp; Full-Stack Developers:</strong> Evaluates incoming technical specifications, detects unstated API integrations, database requirements, and background queues, applying configurable complexity multipliers.</li>
            <li><strong>UI/UX &amp; Product Designers:</strong> Scopes wireframes, prototypes, design systems, and revision limits with a configurable contingency buffer.</li>
            <li><strong>Independent Copywriters &amp; Content Strategists:</strong> Structures deliverables with clear milestones where clients accept online.</li>
            <li><strong>Boutique Creative &amp; Development Studios:</strong> Standardizes proposal intake across small teams, ensuring quotes adhere to studio price floors.</li>
          </ul>
        </section>

        <section aria-labelledby="why-freelancers-undercharge">
          <h2 id="why-freelancers-undercharge">Why do freelancers undercharge on fixed-price projects?</h2>
          <p><strong>Direct Answer:</strong> Freelancers undercharge primarily because initial client briefs omit technical dependencies, and client negotiations trigger emotional discounting without scope reduction.</p>
          <p>When prospective clients negotiate on price, freelancers often discount their rates without reducing project scope, eroding their effective hourly earnings.</p>
          <p>Floorly removes emotional discounting by checking quotes against your break-even floor on the server before client-facing links are shared.</p>
        </section>

        <section aria-labelledby="how-price-floor-works">
          <h2 id="how-price-floor-works">How does a freelance price floor work in practice?</h2>
          <p><strong>Direct Answer:</strong> A freelance price floor establishes the minimum quote needed to cover baseline labor, technical complexity, and contingency buffers so quotes never drop below break-even.</p>
          <ol>
            <li>
              <h3>1. How is base labor cost calculated?</h3>
              <p>Estimated project hours multiplied by your baseline hourly rate based on living costs and business overhead.</p>
            </li>
            <li>
              <h3>2. How does the technical complexity multiplier adjust project rates?</h3>
              <p>A configurable multiplier that accounts for technical integrations, legacy codebases, and architectural risks.</p>
            </li>
            <li>
              <h3>3. Why is a configurable scope contingency buffer essential?</h3>
              <p>A configurable buffer added to fixed estimates to absorb unstated client revisions and edge cases without lowering effective hourly pay.</p>
            </li>
            <li>
              <h3>4. How does server-side floor enforcement work?</h3>
              <p>Floorly checks total pricing against your minimum hourly rate and category floor, preventing proposals from being generated below your minimum.</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="how-ai-scope-analyzer-works">
          <h2 id="how-ai-scope-analyzer-works">How do freelancers use the AI Scope Analyzer to prevent scope creep?</h2>
          <p><strong>Direct Answer:</strong> The AI Scope Analyzer scans raw briefs and parses them into explicit inclusions, documented exclusions, and milestone payment schedules before contracts are signed.</p>
          <ul>
            <li><strong>Explicit Inclusions:</strong> Exact pages, API endpoints, design screens, and responsive deliverables included in the baseline fee.</li>
            <li><strong>Documented Scope Exclusions:</strong> Features specifically excluded from the fixed quote that require formal change orders.</li>
            <li><strong>Milestone Schedules:</strong> Clear milestone breakdown where users add their own payment details or links and clients accept online.</li>
          </ul>
        </section>

        <section aria-labelledby="illustrative-example">
          <h2 id="illustrative-example">Example (illustrative): How does the pricing calculation work?</h2>
          <p>Industry compensation research from the <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics</a> highlights that factoring non-billable administrative time, technical complexity, and contingency buffers into baseline hourly rates is critical to prevent undercharging in professional service contracting.</p>
          <p>For a sample 40-hour project at a baseline rate of $50/hr, Floorly adds a configurable 10% scope contingency (+4h) and applies a 1.25x multiplier for medium complexity. This calculates structured package tiers starting at $2,750 (Essential), $3,300 (Standard), and $4,150 (Premium), while ensuring total pricing never drops below your configured category floor ($500).</p>
          <ul>
            <li><strong>Base Labor:</strong> $2,200 (44 total hours @ $50/hr)</li>
            <li><strong>Complexity Multiplier:</strong> 1.25x (Medium complexity)</li>
            <li><strong>Scope Contingency:</strong> 10% (+4h)</li>
            <li><strong>Calculated Package Tiers:</strong> Essential $2,750 | Standard $3,300 | Premium $4,150</li>
            <li><strong>Category Floor Enforcement:</strong> Ensures total quote never falls below minimum configured threshold ($500)</li>
          </ul>
        </section>

        <section aria-labelledby="free-tools">
          <h2 id="free-tools">What free interactive pricing calculators are available for freelancers?</h2>
          <p>Floorly provides free interactive web calculators to evaluate hourly baselines and project pricing:</p>
          <ul>
            <li><a href="/tools/freelance-rate-calculator">Freelance Hourly Rate &amp; Price Floor Calculator</a> — Determine your minimum hourly rate and daily rate based on living expenses, billable capacity, and overhead.</li>
            <li><a href="/tools/project-price-calculator">Freelance Project Price &amp; Scope Risk Calculator</a> — Estimate fixed-price project budgets with complexity multipliers and contingency buffers.</li>
          </ul>
        </section>

        <section aria-labelledby="payment-gateways">
          <h2 id="payment-gateways">How do clients pay invoices generated in Floorly?</h2>
          <p><strong>Direct Answer:</strong> Clients pay freelancers directly. Floorly does not collect payments from users' clients; you add your own payment details or payment link to proposals and invoices, and record payments in Floorly when received.</p>
          <ul>
            <li><strong>Direct Payment Details:</strong> Add bank transfer details, UPI information for INR, or direct deposit accounts to invoices.</li>
            <li><strong>Your Own Payment Links:</strong> Insert your own Stripe payment link, PayPal link, or Razorpay payment link directly into proposals and invoices.</li>
            <li><strong>Payment Tracking:</strong> Record client payments in Floorly once received to track project balance and true net profit.</li>
          </ul>
        </section>

        <footer>
          <nav aria-label="Footer Navigation">
            <p>Product &amp; Tools: <a href="/pricing">Pricing</a> | <a href="/tools/freelance-rate-calculator">Rate Calculator</a> | <a href="/tools/project-price-calculator">Price Calculator</a> | <a href="/signup">Sign Up Free</a></p>
            <p>Company: <a href="/about">About Floorly</a> | <a href="/contact">Contact</a> | <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> | Founder: Ritik</p>
            <p>Legal &amp; Compliance: <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | <a href="/refund-policy">Refund Policy</a> | <a href="/delivery">Delivery Policy</a></p>
            <p>Connect &amp; Community: <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">Floorly on GitHub</a> | <a href="https://www.producthunt.com/products/floorly" target="_blank" rel="noopener noreferrer">Floorly on Product Hunt</a></p>
          </nav>
        </footer>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://floorlystudio.me/#article",
        "headline": "AI-Scoped Proposals & Price Floors for Freelancers: Never Undercharge Again",
        "description": "Floorly turns client briefs into scoped proposals with price floors. Prevent underquoting, add payment links, and track true profit margins.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://floorlystudio.me/",
        "datePublished": "2026-10-13T00:00:00Z",
        "dateModified": "2026-10-13T00:00:00Z",
        "author": {
          "@type": "Person",
          "name": "Ritik",
          "url": "https://github.com/RitikWeb22"
        },
        "publisher": {
          "@id": "https://floorlystudio.me/#organization"
        },
        "image": "https://floorlystudio.me/og-image.png"
      },
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
        "@type": "HowTo",
        "name": "How to Prevent Freelancer Undercharging Using a Price Floor",
        "description": "Step-by-step workflow for independent professionals to scope client briefs with AI, enforce price floors, and issue milestone invoices.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Analyze the Client Brief with AI",
            "text": "Paste your client brief into Floorly to extract deliverables and detect unstated scope creep.",
            "url": "https://floorlystudio.me/#how-ai-scope-analyzer-works"
          },
          {
            "@type": "HowToStep",
            "name": "Compute Your Price Floor",
            "text": "Calculate your minimum fee combining hourly rates, complexity multipliers, and a configurable contingency buffer.",
            "url": "https://floorlystudio.me/#how-price-floor-works"
          },
          {
            "@type": "HowToStep",
            "name": "Send an Interactive Proposal Where Clients Accept Online",
            "text": "Deliver a branded 3-tier milestone proposal that clients can review and accept online.",
            "url": "https://floorlystudio.me/#what-is-floorly"
          },
          {
            "@type": "HowToStep",
            "name": "Record Client Payments",
            "text": "Add your own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to invoices and record payments in Floorly once received.",
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
              "text": "A freelance price floor is the minimum monetary quote an independent professional sets for a project or hourly rate to cover their labor and business expenses. It combines your baseline hourly rate, estimated hours, and configurable scope buffers so you never quote below your minimum."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours should I add as a contingency buffer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contingency buffers are configurable based on project complexity, with a common starting buffer of 10% to 20% on fixed-price estimates. This extra margin absorbs unanticipated revisions and project edge cases without lowering your effective hourly earnings."
            }
          },
          {
            "@type": "Question",
            "name": "What should a professional freelance proposal include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A professional freelance proposal includes an executive project summary, itemized deliverables, explicit out-of-scope exclusions, a 3-tier pricing schedule, milestone payment terms, revision limits, and a link where clients accept online."
            }
          },
          {
            "@type": "Question",
            "name": "How does the price floor work in Floorly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You set a minimum hourly rate and a minimum fee per category. After the AI drafts a proposal, Floorly checks the totals on the server and raises anything below your floor. The AI can't override it."
            }
          },
          {
            "@type": "Question",
            "name": "How do my clients pay me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Floorly does not collect payments from your clients. You add your own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to proposals and invoices, and record payments in Floorly once received."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/pricing',
    outPath: 'pricing/index.html',
    title: 'Pricing & Plans – Floorly',
    description: 'Transparent pricing for freelancers and studios. Choose from Starter ($0), Solo ($9/mo), Pro ($19/mo), and Agency ($49/mo). Start free today.',
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
            <h3>Solo – $9/month</h3>
            <p>Unlimited proposals, full AI Scope Analyzer, automated price floor enforcement, client invoices with custom payment links, basic profit tracking.</p>
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
              "text": "Floorly checks AI recommendations against your minimum hourly rate and minimum project floor, ensuring proposals cannot be quoted below your configured minimum."
            }
          },
          {
            "@type": "Question",
            "name": "How do clients pay invoices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Floorly does not collect payments from your clients. You add your own payment details or payment link (bank transfer, PayPal, Stripe/Razorpay link, UPI for INR) to invoices and record payments in Floorly."
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
          <p>Most freelancers underestimate their true costs by assuming 40 billable hours per week. In reality, significant time is spent on administrative tasks, proposals, and non-billable operations.</p>
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
    description: 'Estimate hours, rates, complexity multipliers, and contingency buffers to calculate your 3 proposal pricing tiers.',
    h1: 'Freelance Project Price & Risk Calculator',
    content: `
      <main>
        <h1>Freelance Project Price &amp; Risk Calculator</h1>
        <p>Estimate hours, rates, complexity multipliers, and contingency buffers to calculate your 3 proposal pricing tiers.</p>
        <section>
          <h2>Why Every Project Needs a Contingency Scope Buffer</h2>
          <p>Client projects routinely experience scope creep. Applying configurable complexity multipliers alongside a scope contingency buffer protects your bottom line against unbilled revisions.</p>
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
    description: 'Floorly is freelance proposal software that protects independent developers and designers from scope creep and arbitrary fixed quotes.',
    h1: 'About Floorly',
    content: `
      <main>
        <h1>About Floorly</h1>
        <p>Floorly is built for independent engineers, designers, and digital studios who love client craftsmanship and want clear scope boundaries and pricing protections.</p>
        <section>
          <h2>Our Core Mission</h2>
          <p>We help freelancers maintain sustainable pricing. Floorly pairs AI scope analysis with configurable price floors to protect your baseline on every client engagement.</p>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Floorly",
        "url": `${SITE_URL}/`,
        "logo": `${SITE_URL}/og-image.png`,
        "description": "Floorly is an AI-powered freelance management and proposal tool designed for independent software developers, UI/UX designers, and technical agencies.",
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
    description: 'Need help or have questions about Floorly? Contact our support team for platform inquiries, feedback, and studio plans.',
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
    description: 'Read the terms of service governing the use of Floorly\'s freelance software, AI scoping tools, and proposal platform.',
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
