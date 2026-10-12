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
    description: 'Floorly turns client briefs into AI-scoped proposals that can never drop below your price floor. Invoice, collect payments via Stripe & Razorpay, and track real profit.',
    h1: 'Never undercharge again.',
    content: `
      <main>
        <header>
          <h1>Never undercharge again.</h1>
          <p>Paste a client brief. Floorly scopes it with AI, writes the proposal, and refuses to quote below your minimum. Then it invoices, tracks payments and shows your real profit.</p>
          <nav>
            <a href="/pricing">View Pricing Plans</a>
            <a href="/tools/freelance-rate-calculator">Free Rate Calculator</a>
            <a href="/tools/project-price-calculator">Project Price Calculator</a>
            <a href="/signup">Start Free</a>
          </nav>
        </header>
        <section>
          <h2>How Floorly Works</h2>
          <div>
            <h3>1. AI Scope Analyzer</h3>
            <p>Paste any client brief or email thread. Floorly extracts exact technical deliverables and flags hidden scope creep before you send a quote.</p>
          </div>
          <div>
            <h3>2. Deterministic Price Floor Guardrail</h3>
            <p>Calculate your break-even baseline. Floorly algorithmically prevents quoting below your safety floor so you never work at a loss.</p>
          </div>
          <div>
            <h3>3. Interactive Client Proposals &amp; Signatures</h3>
            <p>Send branded proposals clients can review and digitally sign in seconds, complete with deliverable breakdowns and milestone schedules.</p>
          </div>
          <div>
            <h3>4. Multi-Currency Milestone Invoicing</h3>
            <p>Collect domestic payments via Razorpay (UPI &amp; INR) and global payments via Stripe (USD) with instant digital receipts.</p>
          </div>
        </section>
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Floorly",
        "headline": "Never undercharge again",
        "description": "Floorly turns client briefs into AI-scoped proposals that can never drop below your price floor.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": [
          { "@type": "Offer", "name": "Starter", "price": "0", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Solo", "price": "10", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Pro", "price": "19", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Agency", "price": "49", "priceCurrency": "USD" }
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
    schemas: []
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
