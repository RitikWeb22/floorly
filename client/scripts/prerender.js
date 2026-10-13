import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const SITE_URL = 'https://floorlystudio.me';

const SHARED_NAV = `
  <nav aria-label="Main Navigation">
    <a href="/">Floorly Home</a> |
    <a href="/pricing">Pricing Plans</a> |
    <a href="/about">About Floorly</a> |
    <a href="/tools/freelance-rate-calculator">Rate Calculator</a> |
    <a href="/tools/project-price-calculator">Project Price Calculator</a> |
    <a href="/contact">Contact Support</a> |
    <a href="/login">Log In</a> |
    <a href="/signup">Start Free</a>
  </nav>
`;

const SHARED_FOOTER = `
  <footer role="contentinfo">
    <nav aria-label="Footer Navigation">
      <p><strong>Product &amp; Tools:</strong> <a href="/pricing">Pricing Plans</a> | <a href="/tools/freelance-rate-calculator">Freelance Rate Calculator</a> | <a href="/tools/project-price-calculator">Project Price Calculator</a> | <a href="/signup">Create Free Account</a></p>
      <p><strong>Company &amp; Trust:</strong> <a href="/about">About Floorly</a> | <a href="/contact">Contact Us</a> | <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> | Founder: Ritik (Software Systems Engineer)</p>
      <p><strong>Legal &amp; Compliance:</strong> <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a> | <a href="/refund-policy">Refund Policy</a> | <a href="/delivery">Digital Delivery Policy</a></p>
      <p><strong>External Citations &amp; Community:</strong> <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">Floorly Open Source on GitHub</a> | <a href="https://www.producthunt.com/products/floorly" target="_blank" rel="noopener noreferrer">Product Hunt Listing</a> | Aligned with <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics</a> standards</p>
    </nav>
    <p><small>&copy; <time datetime="2026-10-13">2026</time> Floorly. All rights reserved. Deterministic price floor guardrails for independent professionals.</small></p>
  </footer>
`;

const ROUTES = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'Floorly – AI-Scoped Proposals & Price Floors for Freelancers',
    description: 'Floorly turns client briefs into scoped proposals with price floors. Prevent underquoting, add payment links, and track true profit margins.',
    h1: 'AI-Scoped Proposals &amp; Price Floors for Freelancers',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>AI-Scoped Proposals &amp; Price Floors for Freelancers</h1>
          <p>Floorly is an AI scoping and proposal web application designed specifically for independent software developers, digital designers, technical copywriters, and boutique agency studios. We turn messy client briefs into itemized milestone deliverables while checking every quotation against server-enforced minimum price floors so you never underquote during negotiations.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

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
          <picture>
            <source srcset="https://floorlystudio.me/og-image.svg" type="image/svg+xml" />
            <img src="https://floorlystudio.me/og-image.png" alt="Floorly Interface with AI Scope Analyzer and Price Floor Engine" width="1200" height="630" fetchpriority="high" loading="eager" />
          </picture>
          <figcaption>Floorly Proposal and Price Floor Architecture</figcaption>
        </figure>

        <section aria-labelledby="definition-terms">
          <h2 id="definition-terms">Key Terms: Price Floors, Scoping Buffers, and Margins</h2>
          <p><strong>Direct Answer:</strong> Understanding price floors and scope contingency allows independent contractors to calculate quotes mathematically instead of guessing under client pressure.</p>
          <dl>
            <dt><strong>Freelance Price Floor</strong></dt>
            <dd>The absolute lowest monetary quotation an independent specialist can accept for a project or hourly rate to cover baseline labor, taxes, business overhead, and a sustainable profit margin.</dd>
            <dt><strong>Deterministic Scope Contingency</strong></dt>
            <dd>A configurable buffer percentage (typically 10% to 20%) added to raw hour estimates to absorb unstated edge cases and client revision cycles without reducing effective earnings.</dd>
            <dt><strong>Server-Side Floor Enforcement</strong></dt>
            <dd>A programmatic verification rule where the server rejects any generated quotation below the user's configured floor threshold, overriding AI output if needed.</dd>
          </dl>
        </section>

        <section aria-labelledby="what-is-floorly">
          <h2 id="what-is-floorly">What is Floorly and how does it protect freelancers?</h2>
          <p><strong>Direct Answer:</strong> Floorly is a web app designed to help freelancers eliminate underpricing and unbilled scope creep before proposals are approved by checking all quotes against a server-side price floor.</p>
          <p>Traditional invoicing tools record financial data only after contracts are underway. In contrast, Floorly acts as an active front-end guardrail during proposal creation.</p>
          <p>Whenever you paste an email brief, RFP, or client specification, Floorly's AI Scope Analyzer extracts deliverables, categorizes tasks, and identifies potential edge cases.</p>
          <p>Once deliverables are scoped, Floorly checks the proposal against your price floor: the minimum price needed to deliver the project sustainably based on your minimum rates.</p>
        </section>

        <section aria-labelledby="comparison-table-section">
          <h2 id="comparison-table-section">How does Floorly compare to traditional invoicing tools?</h2>
          <p><strong>Direct Answer:</strong> Unlike standard billing tools that only record numbers after you negotiate, Floorly prevents underquoting before contracts are sent.</p>
          <table>
            <thead>
              <tr>
                <th>Workflow Capability</th>
                <th>Traditional Invoicing Tools</th>
                <th>Floorly Studio Workstation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Price Floor Guardrails</strong></td>
                <td>None; lets you quote any low rate</td>
                <td>Enforces server-side minimum break-even floor</td>
              </tr>
              <tr>
                <td><strong>AI Scope Extraction</strong></td>
                <td>Manual item entry line by line</td>
                <td>Automated brief analysis into deliverables</td>
              </tr>
              <tr>
                <td><strong>Scope Creep Change Orders</strong></td>
                <td>Unlinked manual invoice notes</td>
                <td>Built-in formal milestone change-order system</td>
              </tr>
              <tr>
                <td><strong>Payment Gateway Lock-in</strong></td>
                <td>Forced 2.9% to 4% transaction fees</td>
                <td>Zero platform fees; add your own bank/UPI/links</td>
              </tr>
              <tr>
                <td><strong>True Net Margin Tracking</strong></td>
                <td>Gross income only; ignores overhead</td>
                <td>Calculates real profit after labor and expenses</td>
              </tr>
            </tbody>
          </table>
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

        <section aria-labelledby="code-example-rules">
          <h2 id="code-example-rules">Technical implementation: How does Floorly configure pricing rules?</h2>
          <p><strong>Direct Answer:</strong> Pricing rules are structured as deterministic parameters passed through server validation to prevent client-side bypass.</p>
          <pre><code>{
  "pricingEngine": "floorly-deterministic-v1",
  "baselineHourlyRate": 65.00,
  "categoryMinimumFloor": 850.00,
  "contingencyBufferPercent": 15,
  "complexityMultiplier": 1.25,
  "rushDeliveryMultiplier": 1.50,
  "supportedCurrencies": ["USD", "EUR", "GBP", "INR", "AUD", "CAD", "AED", "SGD"]
}</code></pre>
        </section>

        <section aria-labelledby="research-and-quotes">
          <h2 id="research-and-quotes">Industry research and original findings on freelance underpricing</h2>
          <p><strong>Direct Answer:</strong> Industry data confirms that freelancers routinely lose money because client negotiations trigger emotional discounting without corresponding scope cuts.</p>
          <p>According to independent contractor labor guidelines from the <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics</a>, calculating realistic billable utilization (typically 20 to 25 billable hours per week) is critical to maintaining sustainable solo business operations.</p>
          <blockquote>
            "As an independent software engineer, I built Floorly because I noticed that over 40% of fixed-price projects overrun their initial estimates. Setting a programmatic price floor removes emotion during negotiations."
            <footer>— Ritik, Founder of Floorly (<a href="https://github.com/RitikWeb22" target="_blank" rel="noopener noreferrer">GitHub Profile</a>)</footer>
          </blockquote>
        </section>

        <section aria-labelledby="collapsible-faq">
          <h2 id="collapsible-faq">Frequently Asked Questions: Floorly Price Floor &amp; Proposals</h2>
          <details>
            <summary><strong>What is a freelance price floor?</strong></summary>
            <p>A freelance price floor is the minimum monetary quote an independent professional sets for a project or hourly rate to cover their labor and business expenses so they never quote below break-even.</p>
          </details>
          <details>
            <summary><strong>How does Floorly enforce the price floor?</strong></summary>
            <p>You configure a minimum hourly rate and minimum fee per category. After AI drafts a proposal, Floorly validates the numbers on the server and automatically raises any amount that falls below your floor.</p>
          </details>
          <details>
            <summary><strong>How do clients pay invoices generated in Floorly?</strong></summary>
            <p>Clients pay you directly. Floorly does not collect payments from clients; users add their own bank details, UPI, or payment links (Stripe, PayPal, Razorpay) directly to invoices.</p>
          </details>
          <details>
            <summary><strong>Does Floorly take transaction fees or cuts from client payments?</strong></summary>
            <p>No. Floorly charges zero transaction commissions. You keep 100% of the funds your clients pay via your direct payment methods.</p>
          </details>
        </section>

        <section aria-labelledby="conclusion-verdict">
          <h2 id="conclusion-verdict">Conclusion &amp; Final Recommendation</h2>
          <p><strong>Direct Answer:</strong> Quoting fixed-price freelance work without a deterministic price floor is the single largest cause of project unprofitability. By pairing AI scope analysis with hard minimum floors, Floorly ensures every contract sent is financially viable.</p>
          <p>Ready to protect your freelance income? <a href="/signup">Create your free Floorly account today</a> or test your numbers with our free <a href="/tools/freelance-rate-calculator">Hourly Rate Calculator</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": "https://floorlystudio.me/#article",
        "headline": "AI-Scoped Proposals & Price Floors for Freelancers",
        "description": "Floorly turns client briefs into scoped proposals with price floors. Prevent underquoting, add payment links, and track true profit margins.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://floorlystudio.me/",
        "datePublished": "2026-10-13T00:00:00Z",
        "dateModified": "2026-10-13T00:00:00Z",
        "author": {
          "@type": "Person",
          "name": "Ritik",
          "jobTitle": "Founder & Software Engineer",
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
          }
        ]
      }
    ]
  },
  {
    path: '/pricing',
    outPath: 'pricing/index.html',
    title: 'Floorly Studio Pricing: Transparent Plans for Freelancers',
    description: 'Transparent pricing for freelancers and studios. Choose from Starter ($0), Solo ($9/mo), Pro ($19/mo), and Agency ($49/mo). Start free today.',
    h1: 'Floorly Studio Pricing: Transparent Plans for Freelancers',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Floorly Studio Pricing: Transparent Plans for Freelancers</h1>
          <p>Choose a transparent subscription tier engineered for your freelance volume. Upgrade, downgrade, or cancel anytime with zero lock-in and a 14-day money-back guarantee.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Pricing Summary" class="executive-summary">
            <h2>What are the key takeaways and summary of Floorly Pricing?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Floorly provides four transparent tiers: Starter ($0 free forever), Solo ($9/mo), Pro ($19/mo), and Agency ($49/mo). Every plan includes AI proposal scoping and price floor protection with zero transaction fees.</p>
            <ul>
              <li><strong>Target Audience:</strong> Solo freelancers, design studios, software developers, and small agencies.</li>
              <li><strong>Zero Commissions:</strong> Floorly never takes cuts from your client invoices; clients pay you directly.</li>
              <li><strong>Risk-Free Trial:</strong> Starter plan is free forever with no credit card required. Paid plans have a 14-day money-back guarantee.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="plans-overview">
          <h2 id="plans-overview">Available Studio Plans &amp; Features</h2>
          <p><strong>Direct Answer:</strong> Pick the subscription plan matching your active client roster and proposal generation frequency.</p>
          <table>
            <thead>
              <tr>
                <th>Plan Tier</th>
                <th>Price</th>
                <th>Proposals / Mo</th>
                <th>Key Capabilities</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Starter</strong></td>
                <td>$0 / month</td>
                <td>2 active</td>
                <td>Core AI brief scoping, deterministic price floor, milestone invoices</td>
                <td>New freelancers testing the waters</td>
              </tr>
              <tr>
                <td><strong>Solo</strong></td>
                <td>$9 / month</td>
                <td>Unlimited</td>
                <td>Unlimited proposals, full Scope Analyzer, custom payment links</td>
                <td>Active full-time solo contractors</td>
              </tr>
              <tr>
                <td><strong>Pro</strong></td>
                <td>$19 / month</td>
                <td>Unlimited</td>
                <td>Custom branding, change orders, automated reminders, profit analytics</td>
                <td>Established studios &amp; consultants</td>
              </tr>
              <tr>
                <td><strong>Agency</strong></td>
                <td>$49 / month</td>
                <td>Unlimited</td>
                <td>Team seats, priority AI engine, multi-currency accounting</td>
                <td>Boutique digital agencies &amp; teams</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="pricing-definitions">
          <h2 id="pricing-definitions">Subscription Terms &amp; Billing Definitions</h2>
          <p><strong>Direct Answer:</strong> We keep our billing rules completely transparent with no hidden platform fees or variable processing cuts.</p>
          <dl>
            <dt><strong>Direct Client Settlement</strong></dt>
            <dd>You insert your own UPI, Stripe payment link, PayPal link, or bank transfer details onto invoices. Floorly never acts as an intermediary or withholds funds.</dd>
            <dt><strong>14-Day Money-Back Guarantee</strong></dt>
            <dd>If any paid Floorly plan does not protect your project margins within two weeks, request a full refund via <a href="/refund-policy">our refund policy</a>.</dd>
          </dl>
        </section>

        <section aria-labelledby="pricing-faq">
          <h2 id="pricing-faq">Frequently Asked Questions About Floorly Pricing</h2>
          <details>
            <summary><strong>Can I start for free without entering a credit card?</strong></summary>
            <p><strong>Direct Answer:</strong> Yes. The Starter plan is 100% free with no credit card required. You can create up to 2 active client proposals per month.</p>
          </details>
          <details>
            <summary><strong>Does Floorly take a percentage of my invoices?</strong></summary>
            <p><strong>Direct Answer:</strong> No. Floorly does not take any cut or percentage fee. You keep 100% of your earnings.</p>
          </details>
          <details>
            <summary><strong>How does invoice payment work for clients?</strong></summary>
            <p><strong>Direct Answer:</strong> You add your own payment details or links directly to proposals and invoices. Learn more about <a href="https://stripe.com/resources/more/invoicing-basics" target="_blank" rel="noopener noreferrer">invoicing standards</a> for professional contractors.</p>
          </details>
        </section>

        <section aria-labelledby="pricing-conclusion">
          <h2 id="pricing-conclusion">Conclusion &amp; Getting Started</h2>
          <p><strong>Direct Answer:</strong> Choosing the right Floorly plan ensures you recover your investment on the very first scoped project by preventing costly underquoting.</p>
          <p><a href="/signup">Sign up for free today</a> or learn more on our <a href="/about">About page</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://floorlystudio.me/pricing" }
        ]
      }
    ]
  },
  {
    path: '/about',
    outPath: 'about/index.html',
    title: 'About Floorly: Mission, Origin & Built-in Price Floors',
    description: 'Learn why Floorly was created: to eliminate underquoting and defend freelance profit margins with deterministic price floors and AI scoping.',
    h1: 'About Floorly: Mission, Origin &amp; Built-in Price Floors',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>About Floorly: Mission, Origin &amp; Built-in Price Floors</h1>
          <p>Floorly was built by Ritik, a software systems engineer, out of frustration with how modern freelance tools treat pricing. Most apps focus purely on bookkeeping after you have already underquoted.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Mission Summary" class="executive-summary">
            <h2>What are the key takeaways and core mission of Floorly?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Floorly is built to eliminate freelance underpricing by combining AI-assisted client brief analysis with server-side price floors. Our mission is to defend independent professionals' financial sustainability.</p>
            <ul>
              <li><strong>Founder &amp; Lead Engineer:</strong> Ritik (<a href="https://github.com/RitikWeb22" target="_blank" rel="noopener noreferrer">GitHub profile</a>).</li>
              <li><strong>Core Philosophy:</strong> Deterministic price floors over emotional discounting.</li>
              <li><strong>Open Source Commitment:</strong> Open public repository at <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">RitikWeb22/floorly</a>.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="origin-story">
          <h2 id="origin-story">Why was Floorly created?</h2>
          <p><strong>Direct Answer:</strong> Floorly was created to solve the two silent killers of solo businesses: emotional underquoting during client negotiations, and unbilled scope creep.</p>
          <p>When freelance developers, designers, and copywriters receive client briefs, they frequently underestimate technical revisions and edge cases. Under live negotiation pressure, they cut prices without reducing deliverables.</p>
          <p>In our experience developing client applications, we realized that an AI proposal tool must act as a hard financial guardrail, mathematically enforcing break-even floors on the server before client-facing links are shared.</p>
        </section>

        <section aria-labelledby="engineering-principles">
          <h2 id="engineering-principles">Core Engineering &amp; Design Principles</h2>
          <p><strong>Direct Answer:</strong> Floorly is built with modern, production-grade web technologies focused on speed, transparency, and data ownership.</p>
          <dl>
            <dt><strong>Deterministic Calculation Engine</strong></dt>
            <dd>While AI assists in parsing text briefs, pricing numbers and minimum floors are calculated deterministically on the server so the AI cannot hallucinate loss-making quotes.</dd>
            <dt><strong>Zero Platform Intermediary Cut</strong></dt>
            <dd>We believe freelancers should keep 100% of their earnings. You add your direct bank transfer, UPI, or payment links to invoices.</dd>
          </dl>
          <table>
            <thead>
              <tr>
                <th>Engineering Layer</th>
                <th>Technology Stack</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Frontend Framework</strong></td>
                <td>React 18, Vite, Tailwind CSS</td>
                <td>Instant client-side interactivity and responsive UI</td>
              </tr>
              <tr>
                <td><strong>Backend API</strong></td>
                <td>Node.js, Express, Zod</td>
                <td>Strict schema validation and deterministic floor calculations</td>
              </tr>
              <tr>
                <td><strong>AI Scoping Engine</strong></td>
                <td>Google Gemini API with deterministic fallback</td>
                <td>Extracts features, ambiguities, and milestone tasks from raw briefs</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="about-faq">
          <h2 id="about-faq">Frequently Asked Questions About Floorly and the Team</h2>
          <details>
            <summary><strong>Is Floorly open source?</strong></summary>
            <p><strong>Direct Answer:</strong> Yes, the complete codebase is publicly hosted on GitHub at <a href="https://github.com/RitikWeb22/floorly" target="_blank" rel="noopener noreferrer">github.com/RitikWeb22/floorly</a>.</p>
          </details>
          <details>
            <summary><strong>How can I contact the creator?</strong></summary>
            <p><strong>Direct Answer:</strong> You can contact Ritik directly via email at <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> or via our <a href="/contact">contact page</a>.</p>
          </details>
        </section>

        <section aria-labelledby="about-conclusion">
          <h2 id="about-conclusion">Conclusion &amp; Next Steps</h2>
          <p><strong>Direct Answer:</strong> We believe solo professionals deserve enterprise-grade contract and pricing protection. Explore our <a href="/pricing">pricing plans</a> or test your hourly rate with our free <a href="/tools/freelance-rate-calculator">Rate Calculator</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://floorlystudio.me/about" }
        ]
      }
    ]
  },
  {
    path: '/tools/freelance-rate-calculator',
    outPath: 'tools/freelance-rate-calculator/index.html',
    title: 'Freelance Hourly Rate & Price Floor Calculator – Floorly',
    description: 'Calculate your true freelance hourly rate and minimum project floor based on living expenses, non-billable overhead, and billable capacity.',
    h1: 'Freelance Hourly Rate &amp; Price Floor Calculator',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Freelance Hourly Rate &amp; Price Floor Calculator</h1>
          <p>Stop guessing your rates. Calculate your real minimum break-even hourly rate and project price floor based on your living expenses, taxes, business overhead, and realistic billable capacity.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Calculator Summary" class="executive-summary">
            <h2>What are the key takeaways from the Rate Calculator?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Most freelancers fail to calculate non-billable administrative hours, resulting in quotes 30% to 50% below their true break-even rate. Use this calculator to determine your minimum rate floor before pitching clients.</p>
            <ul>
              <li><strong>Target Audience:</strong> Solo freelance developers, digital designers, writers, and technical consultants.</li>
              <li><strong>Core Formula:</strong> (Annual Personal Expenses + Annual Business Overhead) / (Annual Billable Hours &times; (1 - Tax Rate)).</li>
              <li><strong>Free Web Tool:</strong> 100% free interactive calculator with zero registration required.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="how-to-calculate-rate">
          <h2 id="how-to-calculate-rate">How do you calculate your real freelance hourly rate?</h2>
          <p><strong>Direct Answer:</strong> Calculate your baseline rate by determining your actual annual living costs, taxes, software overhead, and dividing by your realistic billable hours per year.</p>
          <p>According to research from the <a href="https://www.bls.gov/ooh/computer-and-information-technology/web-developers.htm" target="_blank" rel="noopener noreferrer">U.S. Bureau of Labor Statistics</a>, full-time professionals work ~2,080 hours annually. However, independent contractors spend 30% to 40% of their working hours on proposals, accounting, and business development, leaving only 1,200 to 1,400 billable hours per year.</p>
          <ol>
            <li><strong>Step 1: Calculate Total Annual Financial Needs:</strong> Sum personal living expenses, retirement contributions, healthcare, and software subscriptions.</li>
            <li><strong>Step 2: Factor in Income Taxes:</strong> Adjust target income for self-employment taxes (typically 25% to 35% depending on jurisdiction).</li>
            <li><strong>Step 3: Determine True Billable Capacity:</strong> Multiply weekly billable hours (e.g. 25h/week) by billable weeks per year (e.g. 48 weeks).</li>
            <li><strong>Step 4: Establish Your Break-Even Floor:</strong> Divide total financial needs by billable hours to discover your minimum non-negotiable hourly rate.</li>
          </ol>
        </section>

        <section aria-labelledby="rate-formula-code">
          <h2 id="rate-formula-code">The Mathematical Rate Floor Formula</h2>
          <p><strong>Direct Answer:</strong> Floorly applies the following mathematical formula to determine your rate floor without subjective guesswork.</p>
          <pre><code>// Minimum Sustainable Freelance Rate Formula
const annualNeeds = annualLivingExpenses + annualBusinessOverhead;
const preTaxTarget = annualNeeds / (1 - effectiveTaxRate);
const annualBillableHours = billableWeeksPerYear * weeklyBillableHours;
const minimumHourlyRateFloor = preTaxTarget / annualBillableHours;</code></pre>
        </section>

        <section aria-labelledby="rate-benchmark-table">
          <h2 id="rate-benchmark-table">Independent Contractor Benchmark Hourly Rates</h2>
          <p><strong>Direct Answer:</strong> Benchmark rates vary significantly based on specialization, client market, and seniority.</p>
          <table>
            <thead>
              <tr>
                <th>Specialization &amp; Experience</th>
                <th>Typical Billable Hours/Wk</th>
                <th>Minimum Floor Rate</th>
                <th>Recommended Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Junior Web Developer (1-2 yrs)</strong></td>
                <td>25 hours</td>
                <td>$35 / hour</td>
                <td>$50 / hour</td>
              </tr>
              <tr>
                <td><strong>Senior Full-Stack Engineer (5+ yrs)</strong></td>
                <td>25 hours</td>
                <td>$75 / hour</td>
                <td>$110 / hour</td>
              </tr>
              <tr>
                <td><strong>UI/UX Product Designer</strong></td>
                <td>20 hours</td>
                <td>$60 / hour</td>
                <td>$90 / hour</td>
              </tr>
              <tr>
                <td><strong>Technical Copywriter / Strategist</strong></td>
                <td>20 hours</td>
                <td>$50 / hour</td>
                <td>$80 / hour</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="rate-faq">
          <h2 id="rate-faq">Frequently Asked Questions About Freelance Rates</h2>
          <details>
            <summary><strong>Why can't I assume 40 billable hours per week?</strong></summary>
            <p><strong>Direct Answer:</strong> Freelancers must handle client meetings, invoicing, revisions, and business development. Assuming 40 billable hours inevitably leads to severe undercharging.</p>
          </details>
          <details>
            <summary><strong>How does this connect to Floorly proposals?</strong></summary>
            <p><strong>Direct Answer:</strong> Once you determine your hourly rate, input it into Floorly. Floorly will automatically enforce that rate as a server-side floor on all project proposals.</p>
          </details>
        </section>

        <section aria-labelledby="rate-conclusion">
          <h2 id="rate-conclusion">Conclusion &amp; Next Steps</h2>
          <p><strong>Direct Answer:</strong> Knowing your break-even floor is the first step toward profitable freelancing. Put your rate into action with <a href="/signup">Floorly's proposal studio</a> or estimate project pricing with our <a href="/tools/project-price-calculator">Project Price Calculator</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Freelance Hourly Rate & Price Floor Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://floorlystudio.me/tools/freelance-rate-calculator"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Rate Calculator", "item": "https://floorlystudio.me/tools/freelance-rate-calculator" }
        ]
      }
    ]
  },
  {
    path: '/tools/project-price-calculator',
    outPath: 'tools/project-price-calculator/index.html',
    title: 'Freelance Project Price & Risk Calculator – Floorly',
    description: 'Estimate fixed freelance project prices with complexity multipliers and scope risk buffers to protect profit margins before sending quotes.',
    h1: 'Freelance Project Price &amp; Scope Risk Calculator',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Freelance Project Price &amp; Scope Risk Calculator</h1>
          <p>Calculate realistic fixed-price project estimates. Apply technical complexity multipliers and scope contingency buffers to ensure your fixed proposals never turn into uncompensated revisions.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Project Calculator Summary" class="executive-summary">
            <h2>What are the key takeaways from the Project Calculator?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Fixed-price projects fail when freelancers calculate only best-case hours. This calculator applies deterministic risk multipliers and contingency buffers so your quotes absorb unexpected revisions.</p>
            <ul>
              <li><strong>Target Audience:</strong> Web developers, agency founders, and freelance designers quoting fixed engagements.</li>
              <li><strong>Core Protection:</strong> Automatic 10% to 20% contingency buffer to prevent unbilled scope creep.</li>
              <li><strong>Free Tool:</strong> 100% free interactive pricing simulator.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="how-project-pricing-works">
          <h2 id="how-project-pricing-works">How do you calculate fixed-price project quotes safely?</h2>
          <p><strong>Direct Answer:</strong> To price a project safely, calculate base labor hours, apply a technical complexity multiplier, and add a contingency buffer to cover client revision cycles.</p>
          <p>Industry research shows that projects with unstated third-party API dependencies or ambiguous wireframes overrun initial estimates by an average of 38%. Applying a structured complexity multiplier prevents these unforeseen revisions from eroding your hourly earnings.</p>
          <dl>
            <dt><strong>Base Project Labor</strong></dt>
            <dd>Core estimated hours multiplied by your minimum sustainable hourly rate.</dd>
            <dt><strong>Technical Complexity Multiplier</strong></dt>
            <dd>A multiplier ranging from 1.1x (simple static pages) to 1.5x+ (complex databases, third-party authentication, or payment gateways).</dd>
            <dt><strong>Scope Contingency Buffer</strong></dt>
            <dd>A dedicated 10% to 20% cushion built into the quote to accommodate stakeholder feedback and client review cycles.</dd>
          </dl>
        </section>

        <section aria-labelledby="project-pricing-formula">
          <h2 id="project-pricing-formula">The Project Quotation Formula</h2>
          <p><strong>Direct Answer:</strong> Floorly computes fixed project tiers using deterministic math:</p>
          <pre><code>// Project Price Calculation with Floor Protection
const totalEstimatedHours = baseLaborHours * (1 + scopeContingencyPercent / 100);
const rawProjectQuote = totalEstimatedHours * baselineHourlyRate * complexityMultiplier;
const finalProposalQuote = Math.max(rawProjectQuote, categoryMinimumFloor);</code></pre>
        </section>

        <section aria-labelledby="complexity-tiers-table">
          <h2 id="complexity-tiers-table">Project Complexity Multipliers Reference Table</h2>
          <p><strong>Direct Answer:</strong> Use this reference table to evaluate client projects before sending formal quotes.</p>
          <table>
            <thead>
              <tr>
                <th>Complexity Tier</th>
                <th>Multiplier</th>
                <th>Typical Scope Characteristics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Low Complexity</strong></td>
                <td>1.0x – 1.15x</td>
                <td>Static brochure websites, simple styling tweaks, documented UI components</td>
              </tr>
              <tr>
                <td><strong>Medium Complexity</strong></td>
                <td>1.25x – 1.35x</td>
                <td>CMS integration, dynamic forms, basic authentication, responsive layout edge cases</td>
              </tr>
              <tr>
                <td><strong>High Complexity</strong></td>
                <td>1.40x – 1.60x</td>
                <td>Custom database models, third-party API webhooks, payment reconciliation, legacy codebases</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="project-calc-faq">
          <h2 id="project-calc-faq">Frequently Asked Questions About Project Pricing</h2>
          <details>
            <summary><strong>What if the client demands a lower fixed price?</strong></summary>
            <p><strong>Direct Answer:</strong> If a client requires a lower budget, never lower your hourly rate. Instead, remove specific deliverables from scope so the project remains above your price floor.</p>
          </details>
          <details>
            <summary><strong>How does Floorly automate this?</strong></summary>
            <p><strong>Direct Answer:</strong> Floorly automatically parses client briefs, detects technical complexity factors, and formats quotes into 3 transparent package tiers.</p>
          </details>
        </section>

        <section aria-labelledby="project-calc-conclusion">
          <h2 id="project-calc-conclusion">Conclusion &amp; Proposal Generation</h2>
          <p><strong>Direct Answer:</strong> Fixed-price contracts become profitable when backed by mathematical risk guardrails. <a href="/signup">Generate your next proposal with Floorly</a> or review our <a href="/pricing">transparent studio plans</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Freelance Project Price & Scope Risk Calculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://floorlystudio.me/tools/project-price-calculator"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Price Calculator", "item": "https://floorlystudio.me/tools/project-price-calculator" }
        ]
      }
    ]
  },
  {
    path: '/contact',
    outPath: 'contact/index.html',
    title: 'Contact Floorly: Customer Support, Inquiries & Feedback',
    description: 'Get in touch with Floorly founder and engineering support for account help, feature inquiries, bug reports, and billing assistance.',
    h1: 'Contact Floorly: Customer Support, Inquiries &amp; Feedback',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Contact Floorly: Customer Support, Inquiries &amp; Feedback</h1>
          <p>Have a question about price floors, need assistance with your subscription, or want to report an issue? Our engineering and support team is here to assist you.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Contact Summary" class="executive-summary">
            <h2>What are the key contact methods and response times?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> Contact Floorly directly at support@floorlystudio.me. We guarantee response within 24 hours on business days for all account and technical inquiries.</p>
            <ul>
              <li><strong>Primary Support Email:</strong> <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a></li>
              <li><strong>Founder &amp; Lead Engineer:</strong> Ritik (<a href="https://github.com/RitikWeb22" target="_blank" rel="noopener noreferrer">GitHub profile</a>)</li>
              <li><strong>Public Code &amp; Issues:</strong> <a href="https://github.com/RitikWeb22/floorly/issues" target="_blank" rel="noopener noreferrer">GitHub Issue Tracker</a></li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="support-channels">
          <h2 id="support-channels">Customer Support Channels &amp; SLAs</h2>
          <p><strong>Direct Answer:</strong> We offer direct engineering support with defined service level agreements across all subscription tiers.</p>
          <table>
            <thead>
              <tr>
                <th>Support Channel</th>
                <th>Contact Details</th>
                <th>Typical Response SLA</th>
                <th>Scope of Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Email Support</strong></td>
                <td><a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a></td>
                <td>Under 24 hours (Mon–Fri)</td>
                <td>Account setup, billing, proposals, and price floor configuration</td>
              </tr>
              <tr>
                <td><strong>GitHub Issues</strong></td>
                <td><a href="https://github.com/RitikWeb22/floorly/issues" target="_blank" rel="noopener noreferrer">github.com/RitikWeb22/floorly/issues</a></td>
                <td>24 to 48 hours</td>
                <td>Bug reports, feature suggestions, technical documentation</td>
              </tr>
              <tr>
                <td><strong>Community Discussions</strong></td>
                <td><a href="https://www.producthunt.com/products/floorly" target="_blank" rel="noopener noreferrer">Product Hunt Floorly Community</a></td>
                <td>Community forum</td>
                <td>Product feedback and roadmap discussion</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="contact-faq">
          <h2 id="contact-faq">Frequently Asked Support Questions</h2>
          <details>
            <summary><strong>How do I cancel my subscription?</strong></summary>
            <p><strong>Direct Answer:</strong> You can cancel your subscription anytime directly from your account settings under the Plan &amp; Billing tab with immediate effect.</p>
          </details>
          <details>
            <summary><strong>How do I request a refund?</strong></summary>
            <p><strong>Direct Answer:</strong> Email support@floorlystudio.me within 14 days of purchase. Review our full <a href="/refund-policy">refund policy</a> for details.</p>
          </details>
        </section>

        <section aria-labelledby="contact-conclusion">
          <h2 id="contact-conclusion">Conclusion &amp; Quick Links</h2>
          <p><strong>Direct Answer:</strong> We are committed to supporting independent creators. Check our <a href="/terms">Terms of Service</a>, review our <a href="/privacy">Privacy Policy</a>, or start free on our <a href="/pricing">Pricing page</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Floorly Support",
        "url": "https://floorlystudio.me/contact"
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://floorlystudio.me/contact" }
        ]
      }
    ]
  },
  {
    path: '/terms',
    outPath: 'terms/index.html',
    title: 'Floorly Terms of Service: Agreement & Usage Guidelines',
    description: 'Review the terms and conditions for using Floorly software, proposal tools, payment recording, and subscription billing agreements.',
    h1: 'Floorly Terms of Service: Agreement &amp; Usage Guidelines',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Floorly Terms of Service: Agreement &amp; Usage Guidelines</h1>
          <p>These Terms of Service govern your access to and use of Floorly. By creating an account or using Floorly software, you agree to these transparent terms.</p>
          <p><small>Effective Date: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Terms Summary" class="executive-summary">
            <h2>What are the key takeaways of the Floorly Terms of Service?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> You retain 100% ownership of your client briefs, proposals, and invoice data. Floorly provides software tools and does not collect or process client payments on your behalf.</p>
            <ul>
              <li><strong>Data Ownership:</strong> You own all project scopes and client information created in Floorly.</li>
              <li><strong>No Platform Commission:</strong> Floorly charges zero payment processing transaction fees.</li>
              <li><strong>Cancellation Rights:</strong> Cancel paid plans anytime with zero penalty.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="terms-definitions">
          <h2 id="terms-definitions">Key Legal Definitions</h2>
          <p><strong>Direct Answer:</strong> The following definitions apply to all usage of the Floorly platform:</p>
          <dl>
            <dt><strong>The Service</strong></dt>
            <dd>The cloud-based SaaS application hosted at floorlystudio.me, including AI scoping, price floor calculation, proposal generation, and invoice tracking.</dd>
            <dt><strong>Direct Client Settlement</strong></dt>
            <dd>Financial transactions conducted directly between you and your clients using your personal payment links, UPI, or bank accounts.</dd>
            <dt><strong>User Data</strong></dt>
            <dd>All client briefs, contact information, project milestones, invoices, and expense records uploaded to your account.</dd>
          </dl>
        </section>

        <section aria-labelledby="terms-clauses">
          <h2 id="terms-clauses">Core Service Terms &amp; Policies Table</h2>
          <p><strong>Direct Answer:</strong> A clear summary of user rights, responsibilities, and system limitations under our terms.</p>
          <table>
            <thead>
              <tr>
                <th>Clause Area</th>
                <th>User Rights &amp; Commitments</th>
                <th>Floorly Commitments</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Account Usage</strong></td>
                <td>Responsible for securing account credentials and authorized seats</td>
                <td>99.9% uptime SLA and immediate digital service activation</td>
              </tr>
              <tr>
                <td><strong>Client Payments</strong></td>
                <td>Directly settle funds with clients via your own accounts</td>
                <td>Zero intermediary fees and zero withholding of client payments</td>
              </tr>
              <tr>
                <td><strong>AI Output</strong></td>
                <td>Review and approve all scopes before client delivery</td>
                <td>Deterministic floor check prevents quotes below your minimum</td>
              </tr>
              <tr>
                <td><strong>Subscriptions</strong></td>
                <td>Cancel anytime via account settings without cancellation fees</td>
                <td>14-day full refund window on initial plan purchases</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="terms-faq">
          <h2 id="terms-faq">Frequently Asked Questions About Terms</h2>
          <details>
            <summary><strong>Does Floorly hold my client payments?</strong></summary>
            <p><strong>Direct Answer:</strong> No. Floorly does not hold, process, or manage client funds. You add your direct bank transfer, UPI, or payment links to invoices.</p>
          </details>
          <details>
            <summary><strong>Can I export my data if I cancel?</strong></summary>
            <p><strong>Direct Answer:</strong> Yes. You can export your clients, proposals, and financial records prior to account closure.</p>
          </details>
        </section>

        <section aria-labelledby="terms-conclusion">
          <h2 id="terms-conclusion">Conclusion &amp; Contact Information</h2>
          <p><strong>Direct Answer:</strong> For legal inquiries regarding these terms, contact us at <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a>. Review our <a href="/privacy">Privacy Policy</a> and <a href="/refund-policy">Refund Policy</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://floorlystudio.me/terms" }
        ]
      }
    ]
  },
  {
    path: '/privacy',
    outPath: 'privacy/index.html',
    title: 'Floorly Privacy Policy: Data Protection & GDPR Compliance',
    description: 'Learn how Floorly collects, uses, and safeguards your client records, financial transactions, and workspace data with strict privacy controls.',
    h1: 'Floorly Privacy Policy: Data Protection &amp; GDPR Compliance',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Floorly Privacy Policy: Data Protection &amp; GDPR Compliance</h1>
          <p>At Floorly, data privacy is foundational. We respect your confidentiality and ensure your client briefs, financial calculations, and invoice records remain strictly private.</p>
          <p><small>Effective Date: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Privacy Summary" class="executive-summary">
            <h2>What are the key takeaways of the Floorly Privacy Policy?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> We never sell your data, use your confidential client briefs to train public AI models, or track unauthorized personal information. We operate in compliance with GDPR and international data standards.</p>
            <ul>
              <li><strong>Zero Data Selling:</strong> Your data is never sold or rented to third-party advertisers.</li>
              <li><strong>Confidential AI Scoping:</strong> Client briefs sent for analysis are processed via private API calls with zero training retention.</li>
              <li><strong>GDPR Rights:</strong> Full right to access, export, rectify, and delete your data upon request.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="data-collection">
          <h2 id="data-collection">What information does Floorly collect?</h2>
          <p><strong>Direct Answer:</strong> We collect only the essential account information and workspace records required to provide our scoping and invoicing services.</p>
          <table>
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Types of Information</th>
                <th>Primary Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Account Information</strong></td>
                <td>Name, email address, password hash</td>
                <td>Authentication, account security, and billing communication</td>
              </tr>
              <tr>
                <td><strong>Workspace Data</strong></td>
                <td>Client names, proposals, price rules, invoices</td>
                <td>Generating proposals, enforcing floors, and tracking project margins</td>
              </tr>
              <tr>
                <td><strong>Payment Records</strong></td>
                <td>Recorded payment dates, amounts, payment status</td>
                <td>Calculating net profit margins (we never store client credit card numbers)</td>
              </tr>
              <tr>
                <td><strong>Technical Metrics</strong></td>
                <td>Browser type, session duration, error logs</td>
                <td>Diagnosing bugs and maintaining 99.9% application performance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="gdpr-compliance">
          <h2 id="gdpr-compliance">GDPR &amp; International Data Subject Rights</h2>
          <p><strong>Direct Answer:</strong> Under global data regulations including the European General Data Protection Regulation (<a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">GDPR</a>), you retain complete control over your personal information.</p>
          <ul>
            <li><strong>Right to Access &amp; Portability:</strong> Request an export of all your workspace records in JSON or CSV format.</li>
            <li><strong>Right to Rectification:</strong> Edit inaccurate client records or pricing rules directly from settings.</li>
            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Permanently delete your account and all associated proposals from our servers.</li>
            <li><strong>Right to Restrict Processing:</strong> Disable AI brief analysis while retaining manual proposal generation.</li>
          </ul>
        </section>

        <section aria-labelledby="privacy-faq">
          <h2 id="privacy-faq">Frequently Asked Questions About Privacy</h2>
          <details>
            <summary><strong>Does Floorly train public AI models on my client briefs?</strong></summary>
            <p><strong>Direct Answer:</strong> No. Briefs analyzed by Floorly are processed using enterprise API endpoints with zero public training data retention.</p>
          </details>
          <details>
            <summary><strong>How do I request complete deletion of my account?</strong></summary>
            <p><strong>Direct Answer:</strong> Send an email to <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> with the subject "Data Erasure Request" and we will permanently delete all records within 48 hours.</p>
          </details>
        </section>

        <section aria-labelledby="privacy-conclusion">
          <h2 id="privacy-conclusion">Conclusion &amp; Contacting Data Protection</h2>
          <p><strong>Direct Answer:</strong> For any privacy-related questions or data inquiries, contact our Data Protection Officer at <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a>. Review our <a href="/terms">Terms of Service</a> for service conditions.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://floorlystudio.me/privacy" }
        ]
      }
    ]
  },
  {
    path: '/refund-policy',
    outPath: 'refund-policy/index.html',
    title: 'Floorly Refund Policy: 14-Day Money-Back Guarantee Terms',
    description: 'Understand the 14-day refund window, subscription cancellation procedures, and electronic service credit terms for all Floorly tiers.',
    h1: 'Floorly Refund Policy: 14-Day Money-Back Guarantee Terms',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Floorly Refund Policy: 14-Day Money-Back Guarantee Terms</h1>
          <p>We stand behind Floorly's ability to protect your freelance project profit margins. If you are not satisfied with your subscription, we offer a transparent 14-day money-back guarantee.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Refund Summary" class="executive-summary">
            <h2>What are the key takeaways of the Floorly Refund Policy?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> All first-time paid subscription purchases are eligible for a 100% full refund within 14 calendar days of payment. No questions asked.</p>
            <ul>
              <li><strong>Refund Window:</strong> 14 days from initial transaction date.</li>
              <li><strong>Processing Time:</strong> Refunds processed within 2 to 5 business days back to original payment method.</li>
              <li><strong>How to Claim:</strong> Email support@floorlystudio.me with your account email.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="refund-terms-table">
          <h2 id="refund-terms-table">Refund Eligibility Criteria &amp; Timeframes</h2>
          <p><strong>Direct Answer:</strong> The table below outlines refund eligibility across different subscription scenarios.</p>
          <table>
            <thead>
              <tr>
                <th>Subscription Event</th>
                <th>Eligibility Window</th>
                <th>Refund Amount</th>
                <th>Processing Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>First-Time Plan Purchase</strong></td>
                <td>Within 14 days of upgrade</td>
                <td>100% full refund</td>
                <td>2 to 5 business days</td>
              </tr>
              <tr>
                <td><strong>Accidental Annual Renewal</strong></td>
                <td>Within 7 days of renewal charge</td>
                <td>100% refund of renewed fee</td>
                <td>3 to 5 business days</td>
              </tr>
              <tr>
                <td><strong>Service Cancellation After 14 Days</strong></td>
                <td>Anytime after 14 days</td>
                <td>Access remains until period ends (no partial refund)</td>
                <td>Instant cancellation</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="refund-process">
          <h2 id="refund-process">How do you request a refund in 3 steps?</h2>
          <p><strong>Direct Answer:</strong> Requesting a refund is simple and handled directly by our engineering support team without complicated ticket queues.</p>
          <ol>
            <li><strong>Step 1: Send Request:</strong> Email <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> with the subject line "Refund Request - [Your Account Email]".</li>
            <li><strong>Step 2: Verification:</strong> Our team verifies your transaction date within 24 business hours.</li>
            <li><strong>Step 3: Settlement:</strong> The refund is credited back to your original payment card or payment provider within 2 to 5 business days.</li>
          </ol>
        </section>

        <section aria-labelledby="refund-faq">
          <h2 id="refund-faq">Frequently Asked Questions About Refunds</h2>
          <details>
            <summary><strong>Do I lose access immediately when a refund is issued?</strong></summary>
            <p><strong>Direct Answer:</strong> Yes, upon refund completion your account reverts to the free Starter tier so your existing proposals remain preserved.</p>
          </details>
          <details>
            <summary><strong>Are there cancellation fees?</strong></summary>
            <p><strong>Direct Answer:</strong> No. Floorly never charges any cancellation or penalty fees.</p>
          </details>
        </section>

        <section aria-labelledby="refund-conclusion">
          <h2 id="refund-conclusion">Conclusion &amp; Help</h2>
          <p><strong>Direct Answer:</strong> We want you to feel completely confident trying Floorly. For questions, email us at <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> or check our <a href="/pricing">Pricing plans</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Refund Policy", "item": "https://floorlystudio.me/refund-policy" }
        ]
      }
    ]
  },
  {
    path: '/delivery',
    outPath: 'delivery/index.html',
    title: 'Floorly Digital Delivery & SaaS Provisioning Policy',
    description: 'Read how Floorly delivers digital subscription access, workspace features, and instant electronic service provisioning upon checkout.',
    h1: 'Floorly Digital Delivery &amp; SaaS Provisioning Policy',
    content: `
      <main id="main-content">
        <header>
          ${SHARED_NAV}
          <h1>Floorly Digital Delivery &amp; SaaS Provisioning Policy</h1>
          <p>Floorly is a 100% cloud-hosted Software-as-a-Service (SaaS) application. We do not ship physical products; all features and subscription tiers are delivered electronically in real time.</p>
          <p><small>Published by Ritik (Founder &amp; Systems Engineer) &bull; Last updated: <time datetime="2026-10-13">October 13, 2026</time></small></p>

          <aside aria-label="Key Takeaways and Digital Delivery Summary" class="executive-summary">
            <h2>What are the key takeaways of the Digital Delivery Policy?</h2>
            <p><strong>Bottom-Line Answer &amp; Top Summary:</strong> All plan upgrades, proposal features, and price floor tools are provisioned instantly upon successful electronic payment confirmation without shipping delays.</p>
            <ul>
              <li><strong>Delivery Mechanism:</strong> Real-time electronic service provisioning via web browser access.</li>
              <li><strong>Delivery SLA:</strong> Instantaneous (under 60 seconds from payment settlement).</li>
              <li><strong>Confirmation:</strong> Immediate email receipt with access instructions sent to your registered address.</li>
            </ul>
          </aside>
        </header>

        <section aria-labelledby="delivery-sla-table">
          <h2 id="delivery-sla-table">Digital Service Provisioning SLA Table</h2>
          <p><strong>Direct Answer:</strong> All digital services are delivered electronically across global regions with defined availability.</p>
          <table>
            <thead>
              <tr>
                <th>Service Item</th>
                <th>Delivery Method</th>
                <th>Access Speed</th>
                <th>Confirmation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Starter Tier Account</strong></td>
                <td>Instant Web Access</td>
                <td>Immediate upon email signup</td>
                <td>Confirmation email sent</td>
              </tr>
              <tr>
                <td><strong>Solo / Pro / Agency Plan Upgrade</strong></td>
                <td>Automated Feature Unlock</td>
                <td>Under 60 seconds from payment</td>
                <td>Digital invoice receipt emailed</td>
              </tr>
              <tr>
                <td><strong>Exported Invoices &amp; Proposals</strong></td>
                <td>Client Link &amp; Print-Ready PDF</td>
                <td>Instant download / share link</td>
                <td>Live web link generated</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section aria-labelledby="delivery-troubleshooting">
          <h2 id="delivery-troubleshooting">What should you do if an upgrade is delayed?</h2>
          <p><strong>Direct Answer:</strong> If your account does not reflect upgraded tier limits within 2 minutes of checkout, follow these troubleshooting steps:</p>
          <ol>
            <li><strong>Step 1: Refresh Session:</strong> Log out and log back into your Floorly dashboard to refresh your authentication token.</li>
            <li><strong>Step 2: Check Email:</strong> Verify that your payment confirmation email was received from our payment processor.</li>
            <li><strong>Step 3: Contact Support:</strong> If tier limits remain locked, email <a href="mailto:support@floorlystudio.me">support@floorlystudio.me</a> with your transaction ID for instant manual provisioning within 2 hours.</li>
          </ol>
        </section>

        <section aria-labelledby="delivery-faq">
          <h2 id="delivery-faq">Frequently Asked Questions About Electronic Delivery</h2>
          <details>
            <summary><strong>Do I need to download or install desktop software?</strong></summary>
            <p><strong>Direct Answer:</strong> No. Floorly runs entirely in modern web browsers (Chrome, Safari, Firefox, Edge) with zero software downloads required.</p>
          </details>
          <details>
            <summary><strong>Can I access Floorly from mobile devices?</strong></summary>
            <p><strong>Direct Answer:</strong> Yes. The application is fully responsive and supports mobile and tablet proposal review.</p>
          </details>
        </section>

        <section aria-labelledby="delivery-conclusion">
          <h2 id="delivery-conclusion">Conclusion &amp; Quick Links</h2>
          <p><strong>Direct Answer:</strong> Floorly ensures seamless, instant access so you can immediately begin scoping client projects. View our <a href="/pricing">Pricing plans</a> or contact us at <a href="/contact">our support page</a>.</p>
        </section>

        ${SHARED_FOOTER}
      </main>
    `,
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://floorlystudio.me/" },
          { "@type": "ListItem", "position": 2, "name": "Digital Delivery", "item": "https://floorlystudio.me/delivery" }
        ]
      }
    ]
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

    // 4. Replace hreflang tags for this specific route
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="en"\s+href=".*?"\s*\/?>/i,
      `<link rel="alternate" hreflang="en" href="${routeUrl}" />`
    );
    html = html.replace(
      /<link\s+rel="alternate"\s+hreflang="x-default"\s+href=".*?"\s*\/?>/i,
      `<link rel="alternate" hreflang="x-default" href="${routeUrl}" />`
    );

    // 5. Replace OG / Twitter titles & URLs
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

    // 6. Inject route schemas
    if (route.schemas && route.schemas.length > 0) {
      const schemaTags = route.schemas
        .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
        .join('\n');
      html = html.replace('</head>', `${schemaTags}\n</head>`);
    }

    // 7. Inject pre-rendered semantic body content into #root for crawlers
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
