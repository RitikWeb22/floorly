import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  Shield,
  FileCode2,
  Calculator,
  FileText,
  Search,
} from 'lucide-react';
import { Logo } from '../../components/common/Logo';
import { Footer } from '../../components/layout/Footer';
import { BLOG_POSTS } from '../../data/blogPosts';
import { useAuthStore } from '../../store/useAuthStore';

export function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated } = useAuthStore();

  const categories = ['All', 'AI Tooling & Workflow', 'Freelance Pricing Strategy', 'Client Scoping & Contracts', 'Contract Protection'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0E1A2B] flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#E8E0CF] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <Link to="/">
            <Logo size="sm" />
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-[#5B6676]">
            <Link to="/pricing" className="hover:text-[#0047AB] transition-colors">Pricing</Link>
            <Link to="/about" className="hover:text-[#0047AB] transition-colors">About</Link>
            <Link to="/blog" className="text-[#0047AB]">Blog & Guides</Link>
            <Link to="/tools/freelance-rate-calculator" className="hover:text-[#0047AB] transition-colors">Rate Calculator</Link>
            <Link to="/tools/project-price-calculator" className="hover:text-[#0047AB] transition-colors">Project Calculator</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={isAuthenticated ? '/dashboard' : '/login'}
            className="text-xs font-semibold text-[#5B6676] hover:text-[#0E1A2B] px-3 py-1.5 transition-colors"
          >
            {isAuthenticated ? 'Dashboard' : 'Log In'}
          </Link>
          <Link
            to="/signup"
            className="text-xs font-semibold bg-[#0047AB] text-white px-3.5 py-1.5 rounded-lg hover:bg-[#003A8C] transition-colors shadow-sm"
          >
            Start Free
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#FDFBF7] border-b border-[#E8E0CF] py-14 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0047AB]/10 text-[#0047AB] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Floorly Engineering &amp; Strategy Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0E1A2B] mb-4">
            Defend Your Rates, Scope with AI &amp; Deliver with Confidence
          </h1>
          <p className="text-base sm:text-lg text-[#5B6676] max-w-2xl mx-auto leading-relaxed">
            In-depth guides on deterministic freelance pricing floors, AI client brief scoping, contract protection tactics, and modern developer handoffs with AGENTS.md.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#5B6676] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. AGENTS.md, hourly floors, scope creep)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#E8E0CF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0047AB]/30 focus:border-[#0047AB] transition-all shadow-sm"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0047AB] text-white shadow-sm'
                    : 'bg-white text-[#5B6676] border border-[#E8E0CF] hover:border-[#0047AB]/40 hover:text-[#0E1A2B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <main className="flex-1 py-12 px-4 sm:px-8 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-[#E8E0CF] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#0047AB]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs text-[#5B6676] mb-3">
                  <span className="font-semibold text-[#0047AB] bg-[#0047AB]/10 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedDate}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0E1A2B] group-hover:text-[#0047AB] transition-colors leading-snug mb-3">
                  <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-[#5B6676] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE0] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#0047AB] text-white flex items-center justify-center font-bold text-xs">
                    R
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-[#0E1A2B] block">{post.author.name}</span>
                    <span className="text-[#5B6676]">{post.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0047AB] group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E0CF]">
            <p className="text-base text-[#5B6676] font-medium">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-[#0047AB] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Feature Banner Section */}
        <div className="mt-16 bg-gradient-to-r from-[#0047AB] to-[#002D6B] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFC72C] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Floorly Studio Automation</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Stop Underquoting. Scoped Proposals with Deterministic Price Floors.
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Paste raw client briefs, calculate your minimum sustainable rates, generate AGENTS.md instructions for modern AI coders, and defend profit margins.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/signup"
              className="bg-[#FFC72C] text-[#0E1A2B] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-[#E5B224] transition-colors text-center shadow-md"
            >
              Start Free Today
            </Link>
            <Link
              to="/tools/freelance-rate-calculator"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors text-center border border-white/20"
            >
              Test Rate Calculator
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
