import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://floorlystudio.me').replace(/\/+$/, '');

const ROUTES = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'Floorly – AI-Scoped Proposals & Price Floors for Freelancers',
    description: 'Floorly turns client briefs into AI proposals with unbreakable price floors. Scope projects, invoice with Stripe & Razorpay, and track true profit.',
    h1: 'Never undercharge again.',
    content: `
      <main>
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
          <h1>Never undercharge again.</h1>
          <p>Floorly turns messy client briefs into AI-scoped proposals that can never drop below your price floor. Built specifically for independent freelancers, solo consultants, and boutique creative studios.</p>
          <p>Paste a client brief or email thread. Floorly scopes technical deliverables with AI, drafts the client agreement, and enforces your deterministic price floor so you never negotiate against yourself or work at a loss.</p>
        </header>

        <section aria-labelledby="core-capabilities">
          <h2 id="core-capabilities">AI-Scoped Proposals &amp; Deterministic Price Floors for Freelancers</h2>
          <ol>
            <li>
              <strong>1. AI-Scoped Proposals from Raw Client Briefs:</strong>
              <p>Stop spending hours decoding vague client requirements. Floorly ingests client emails, RFP documents, and project briefs to generate complete AI-scoped proposals. It identifies exact deliverables, flags out-of-scope tasks, estimates realistic engineering hours, and structures 3-tier milestone schedules that clients can digitally sign in minutes.</p>
            </li>
            <li>
              <strong>2. Unbreakable Price Floors:</strong>
              <p>Freelancers frequently undercharge under client pressure. Floorly enforces a strict mathematical price floor based on your living expenses, tax reserves, hourly break-even costs, and project complexity. The system algorithmically prevents you from sending proposals or issuing invoices below your defined price floor.</p>
            </li>
            <li>
              <strong>3. Branded Proposals &amp; Digital Signatures:</strong>
              <p>Deliver interactive, branded proposals that build trust and close contracts faster. Clients can review milestone breakdowns, select project add-ons, and provide one-click digital signatures with full audit logging.</p>
            </li>
            <li>
              <strong>4. Multi-Currency Global &amp; Domestic Invoicing:</strong>
              <p>Issue professional invoices with automated payment tracking. Accept international cards in USD via Stripe and domestic payments in INR via Razorpay with instant UPI and NetBanking checkout.</p>
            </li>
            <li>
              <strong>5. Real Net Profit &amp; Expense Tracking:</strong>
              <p>Revenue is not profit. Floorly deducts software subscriptions, sub-contractor fees, transaction processing costs, and tax obligations to reveal your true hourly take-home profit margin on every client engagement.</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="feature-summary">
          <h2 id="feature-summary">Why Freelancers Choose Floorly</h2>
          <ul>
            <li><strong>Automated Scope Breakdown:</strong> AI extracts technical deliverables and flags hidden scope creep.</li>
            <li><strong>Mathematically Enforced Price Floors:</strong> Deterministic protection against unprofitable proposals.</li>
            <li><strong>Interactive Client Proposals:</strong> Web-based proposals with one-click digital signatures.</li>
            <li><strong>Dual Payment Rails:</strong> Domestic UPI/INR via Razorpay and global USD cards via Stripe.</li>
            <li><strong>True Net Profit Visibility:</strong> Real-time expense deduction revealing actual take-home margins.</li>
          </ul>
        </section>

        <section aria-labelledby="free-tools">
          <h2 id="free-tools">Free Interactive Financial Tools for Freelancers</h2>
          <p>Calculate your sustainable freelance pricing baseline before you pitch your next prospective client:</p>
          <ul>
            <li><a href="/tools/freelance-rate-calculator">Freelance Hourly Rate &amp; Price Floor Calculator</a> — Determine your absolute minimum hourly rate and daily rate based on living expenses, billable capacity, and business overhead.</li>
            <li><a href="/tools/project-price-calculator">Freelance Project Price &amp; Scope Risk Calculator</a> — Estimate fixed-price project budgets with complexity multipliers and contingency buffers to prevent scope creep losses.</li>
          </ul>
        </section>

        <section aria-labelledby="comparison">
          <h2 id="comparison">Floorly vs. Generic Freelance Invoicing Software</h2>
          <ul>
            <li><strong>Floorly:</strong> Safeguards revenue before you quote with AI scoping, risk detection, and mathematical price floors.</li>
            <li><strong>Generic Invoicing Tools:</strong> Only record numbers after the contract is already signed, offering zero undercharging prevention.</li>
          </ul>
        </section>

        <footer>
          <nav aria-label="Footer Navigation">
            <p>Product &amp; Tools: <a href="/pricing">Pricing</a> | <a href="/tools/freelance-rate-calculator">Rate Calculator</a> | <a href="/tools/project-price-calculator">Price Calculator</a> | <a href="/signup">Sign Up Free</a></p>
            <p>Company: <a href="/about">About Floorly</a> | <a href="/contact">Contact</a> | <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> | Founder: Ritik</p>
            <p>Legal &amp; Compliance: <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | <a href="/refund-policy">Refund Policy</a> | <a href="/delivery">Delivery Policy</a></p>
            <p>Connect &amp; Community: <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">Floorly on GitHub</a> | <a href="https://www.producthunt.com/products/floorly" target="_blank" rel="noopener noreferrer">Floorly on Product Hunt</a> | <a href="https://x.com/floorlystudio" target="_blank" rel="noopener noreferrer">Follow @floorlystudio on X</a></p>
          </nav>
        </footer>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Floorly",
        "headline": "Never undercharge again",
        "description": "Floorly turns client briefs into AI proposals with unbreakable price floors. Scope projects, invoice with Stripe & Razorpay, and track true profit.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "author": {
          "@type": "Person",
          "name": "Ritik",
          "url": "https://github.com/RitikWeb22"
        },
        "creator": {
          "@type": "Person",
          "name": "Ritik",
          "url": "https://github.com/RitikWeb22"
        },
        "offers": [
          { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Solo", "price": "10", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Pro", "price": "19", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Agency", "price": "49", "priceCurrency": "USD" }
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
  const templatePath = path.join(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run "vite build" first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf8');

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
