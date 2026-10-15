import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { Footer } from '../layout/Footer';

export function BlogPostLayout({
  title,
  subtitle,
  category,
  publishDate,
  readTime,
  author = {
    name: 'Ritik',
    role: 'Founder & Systems Engineer at Floorly',
    github: 'https://github.com/RitikWeb22',
    bio: 'Systems engineer building deterministic tooling for freelancers and small boutique studios. Passionate about price defense algorithms, brief analysis, and autonomous AI coding agent workflows.',
  },
  tocItems = [],
  children,
  relatedArticles = [],
}) {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page,#FAF5EA)] text-[var(--ink,#0E1A2B)] flex flex-col font-sans">
      {/* Scroll Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[var(--cobalt,#0047AB)] z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Top Navigation */}
      <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[var(--line,#E8E0CF)] sticky top-0 z-30">
        <div className="landing-container h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center">
              <Logo size="sm" />
            </Link>
            <div className="h-4 w-px bg-[var(--line,#E8E0CF)] hidden sm:block" />
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted,#5B6676)] hover:text-[var(--cobalt,#0047AB)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Guides</span>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/tools/freelance-rate-calculator"
              className="text-xs font-semibold text-[var(--muted,#5B6676)] hover:text-[var(--ink,#0E1A2B)] px-3 py-1.5 transition-colors hidden sm:inline-block"
            >
              Rate Calculator
            </Link>
            <Link
              to="/signup"
              className="text-xs font-semibold bg-[var(--cobalt,#0047AB)] text-white px-3.5 py-1.5 rounded-full hover:bg-[var(--cobalt-dark,#003A8C)] transition-colors shadow-xs"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 py-10 sm:py-16">
        <div className="landing-container">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[var(--muted,#5B6676)] flex items-center gap-2 mb-6">
            <Link to="/" className="hover:text-[var(--cobalt,#0047AB)]">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-[var(--cobalt,#0047AB)]">Blog</Link>
            <span>/</span>
            <span className="text-[var(--ink,#0E1A2B)] line-clamp-1">{title}</span>
          </nav>

          {/* Article Header */}
          <header className="max-w-[760px] mb-10">
            {category && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[var(--cobalt,#0047AB)] border border-blue-200 text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{category}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink,#0E1A2B)] font-display leading-[1.12] mb-5">
              {title}
            </h1>

            {subtitle && (
              <p className="text-lg sm:text-xl text-[var(--muted,#5B6676)] leading-relaxed mb-6 font-normal">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[var(--line,#E8E0CF)] text-xs text-[var(--muted,#5B6676)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--cobalt,#0047AB)] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {author.name.charAt(0)}
                </div>
                <div>
                  <a
                    href={author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[var(--ink,#0E1A2B)] block text-sm hover:text-[var(--cobalt,#0047AB)] transition-colors"
                  >
                    {author.name} <ExternalLink className="w-3 h-3 inline-block ml-0.5" />
                  </a>
                  <span>{author.role}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {publishDate && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{publishDate}</span>
                  </span>
                )}
                {readTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{readTime}</span>
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* Two-Column Grid: Main Reading Column (720px max) + Sticky Sidebar (TOC) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Reading Article Column */}
            <main className="lg:col-span-8 max-w-[720px] w-full">
              <article className="prose prose-slate max-w-none text-[var(--ink,#0E1A2B)] text-[18px] leading-[32px]">
                {children}
              </article>

              {/* Author Bio Box */}
              <section className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[var(--line,#E8E0CF)] shadow-xs not-prose">
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-[var(--cobalt,#0047AB)] text-white flex items-center justify-center font-display font-bold text-2xl shrink-0 shadow-sm">
                    {author.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3 className="text-lg font-bold font-display text-[var(--ink,#0E1A2B)]">
                        Written by {author.name}
                      </h3>
                      <a
                        href={author.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--cobalt,#0047AB)] hover:underline"
                      >
                        <span>GitHub Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs font-medium text-[var(--muted,#5B6676)] mb-2">
                      {author.role}
                    </div>
                    <p className="text-sm text-[var(--muted,#5B6676)] leading-relaxed">
                      {author.bio}
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section className="mt-12 pt-8 border-t border-[var(--line,#E8E0CF)] not-prose">
                  <h3 className="text-xl font-bold font-display text-[var(--ink,#0E1A2B)] mb-6">
                    Related Freelance Engineering Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedArticles.map((art) => (
                      <Link
                        key={art.href}
                        to={art.href}
                        className="landing-card bg-white p-5 flex flex-col justify-between hover:border-[var(--cobalt,#0047AB)] transition-all group"
                      >
                        <div>
                          <span className="text-xs font-bold text-[var(--cobalt,#0047AB)] uppercase tracking-wider block mb-1">
                            {art.category}
                          </span>
                          <h4 className="text-sm font-bold text-[var(--ink,#0E1A2B)] group-hover:text-[var(--cobalt,#0047AB)] transition-colors leading-snug">
                            {art.title}
                          </h4>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[var(--muted,#5B6676)] group-hover:text-[var(--cobalt,#0047AB)]">
                          <span>Read guide</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </main>

            {/* Desktop Sticky Sidebar (TOC & Quick Tools) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
              {/* Table of Contents Box */}
              {tocItems.length > 0 && (
                <div className="landing-card bg-white p-6">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-[var(--muted,#5B6676)] mb-4 pb-2 border-b border-[var(--line,#E8E0CF)]">
                    Table of Contents
                  </h4>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2.5 text-sm list-none p-0 m-0">
                      {tocItems.map((item, idx) => (
                        <li key={item.id || idx}>
                          <a
                            href={`#${item.id}`}
                            className="text-[var(--muted,#5B6676)] hover:text-[var(--cobalt,#0047AB)] transition-colors block leading-snug py-0.5"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Free Tools Callout */}
              <div className="landing-card bg-white p-6">
                <div className="text-xs font-mono font-bold uppercase text-[var(--cobalt,#0047AB)] mb-2">
                  Interactive Rate Tools
                </div>
                <h4 className="font-display font-bold text-base text-[var(--ink,#0E1A2B)] mb-2">
                  Never Quote Below Your Economic Floor
                </h4>
                <p className="text-xs text-[var(--muted,#5B6676)] leading-relaxed mb-4">
                  Test your real annual overhead, tax rates, and billable hours with our free deterministic rate calculator.
                </p>
                <div className="space-y-2">
                  <Link
                    to="/tools/freelance-rate-calculator"
                    className="block text-center py-2 px-3 rounded-lg bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] text-xs font-bold text-[var(--ink,#0E1A2B)] hover:border-[var(--cobalt,#0047AB)] transition-colors"
                  >
                    Hourly Rate Calculator &rarr;
                  </Link>
                  <Link
                    to="/tools/project-price-calculator"
                    className="block text-center py-2 px-3 rounded-lg bg-[var(--page,#FAF5EA)] border border-[var(--line,#E8E0CF)] text-xs font-bold text-[var(--ink,#0E1A2B)] hover:border-[var(--cobalt,#0047AB)] transition-colors"
                  >
                    Project Price Calculator &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
