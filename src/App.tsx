import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  BookOpen,
  ArrowRight,
  Sparkles,
  Layers,
  Compass,
  Building2,
  X,
  Share2
} from 'lucide-react';
import { Article } from './types';
import { ARTICLES, CATEGORIES } from './data/articles';
import { TopBar } from './components/TopBar';
import { ArticleCard } from './components/ArticleCard';
import { ArticleReader } from './components/ArticleReader';
import { SavedBookmarksDrawer } from './components/SavedBookmarksDrawer';
import { AboutModal } from './components/AboutModal';
import { NewsletterDispatch } from './components/NewsletterDispatch';

export default function App() {
  // Active reading article
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Saved bookmarks in localStorage
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('tectonica_saved_articles');
      return stored ? JSON.parse(stored) : ['art-01', 'art-02'];
    } catch {
      return ['art-01', 'art-02'];
    }
  });

  // Sync saved bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tectonica_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // Ignore write errors
    }
  }, [savedArticleIds]);

  const archiveRef = useRef<HTMLDivElement>(null);

  const scrollToArchive = () => {
    archiveRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleBookmark = (id: string) => {
    setSavedArticleIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleClearAllBookmarks = () => {
    setSavedArticleIds([]);
  };

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === 'All' || art.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = art.title.toLowerCase().includes(q);
      const inSubtitle = art.subtitle.toLowerCase().includes(q);
      const inExcerpt = art.excerpt.toLowerCase().includes(q);
      const inAuthor = art.author.name.toLowerCase().includes(q);
      const inTags = art.tags.some((t) => t.toLowerCase().includes(q));
      const inContent = art.sections.some((s) =>
        s.heading.toLowerCase().includes(q) || s.paragraphs.some((p) => p.toLowerCase().includes(q))
      );

      return inTitle || inSubtitle || inExcerpt || inAuthor || inTags || inContent;
    });
  }, [selectedCategory, searchQuery]);

  // Lead story (featured) vs secondary vs grid
  const leadStory = filteredArticles[0];
  const secondaryStories = filteredArticles.slice(1, 3);
  const remainingStories = filteredArticles.slice(3);

  const savedArticlesList = useMemo(() => {
    return ARTICLES.filter((art) => savedArticleIds.includes(art.id));
  }, [savedArticleIds]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-stone-300 selection:text-stone-900 flex flex-col font-sans-clean">
      {/* Institutional Operational Ribbon */}
      <div className="bg-stone-900 text-stone-300 text-[11px] font-mono tracking-widest uppercase px-6 py-2 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto whitespace-nowrap gap-6">
          <div className="flex items-center gap-3">
            <span className="text-amber-400 font-semibold">VOL. XI</span>
            <span>·</span>
            <span>FALL / WINTER 2026 EDITION</span>
            <span>·</span>
            <span>10 CURATED ARCHITECTURAL ESSAYS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-stone-400">
            <span>ISSN 2789-4401</span>
            <span>·</span>
            <span>HELSINKI · ZURICH · KYOTO</span>
          </div>
        </div>
      </div>

      {/* Top Bar Navigation (3-Zone Strict Contract) */}
      <TopBar
        savedCount={savedArticleIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onScrollToArchive={scrollToArchive}
        onSelectCategoryFilter={(cat) => setSelectedCategory(cat)}
      />

      {/* Hero Exhibition Header */}
      <section className="border-b border-stone-300/80 bg-stone-100/40 px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800">
              <span>Architectural Folio & Critical Theory</span>
              <span>·</span>
              <span>Issue No. 11</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-stone-900 leading-[1.08] text-balance">
              Tectonic Culture, Material Gravity & Urban Space
            </h1>

            <p className="text-lg sm:text-xl font-display italic text-stone-600 leading-relaxed text-balance">
              An independent journal exploring the physical poetics of construction, mass timber joinery, subarctic concrete, passive thermodynamic courtyards, and post-car street geometries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10 space-y-16">
        {/* Lead Story Feature (Pattern C: Visual Rank 1) */}
        {leadStory && !searchQuery && selectedCategory === 'All' && (
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                Lead Monograph Story
              </span>
              <span className="text-xs font-mono text-amber-800 font-medium">
                Featured Editorial Selection
              </span>
            </div>
            <ArticleCard
              article={leadStory}
              isBookmarked={savedArticleIds.includes(leadStory.id)}
              onToggleBookmark={handleToggleBookmark}
              onSelect={setActiveArticle}
              variant="featured"
            />
          </section>
        )}

        {/* Interactive Filter & Search Strip */}
        <section ref={archiveRef} className="space-y-6 pt-4 border-t border-stone-300/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Functional Category Filter Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-stone-900 text-white font-medium shadow-2xs'
                        : 'bg-stone-200/60 text-stone-700 hover:bg-stone-300/60 hover:text-stone-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search essays, authors, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs font-mono bg-white border border-stone-300 rounded-sm focus:outline-hidden focus:border-stone-900 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Status Feedback Line */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-200 pb-3">
            <span>
              Showing <strong className="text-stone-900 font-semibold">{filteredArticles.length}</strong> of 10 essays
              {selectedCategory !== 'All' && <span> in {selectedCategory}</span>}
              {searchQuery && <span> matching "{searchQuery}"</span>}
            </span>
            {(selectedCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-amber-800 hover:underline uppercase text-[11px]"
              >
                Reset Filters
              </button>
            )}
          </div>
        </section>

        {/* Empty Search Result State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-20 border border-dashed border-stone-300 rounded-sm bg-stone-50 p-8 space-y-3">
            <Building2 className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-lg font-display font-medium text-stone-900">
              No matching architectural essays found
            </h3>
            <p className="text-xs font-mono text-stone-500 max-w-sm mx-auto">
              We couldn't locate any manuscripts matching your query. Try broadening your keywords or resetting the discipline filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-stone-900 text-white text-xs font-mono uppercase tracking-wider rounded-sm hover:bg-stone-800"
            >
              Show All 10 Essays
            </button>
          </div>
        )}

        {/* Secondary Stories Split Row (When on default view) */}
        {!searchQuery && selectedCategory === 'All' && secondaryStories.length > 0 && (
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                Curatorial Features & Structural Studies
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryStories.map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  isBookmarked={savedArticleIds.includes(art.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onSelect={setActiveArticle}
                />
              ))}
            </div>
          </section>
        )}

        {/* Remaining Monograph Archive Grid */}
        {((!searchQuery && selectedCategory === 'All' && remainingStories.length > 0) ||
          searchQuery ||
          selectedCategory !== 'All') && (
          <section className="space-y-4">
            <div className="border-b border-stone-200 pb-2 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                {searchQuery || selectedCategory !== 'All' ? 'Matched Folio Essays' : 'Monograph Archive & Spatial Plates'}
              </span>
              <span className="text-xs font-mono text-stone-400">
                Vol. XI Registry
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery || selectedCategory !== 'All' ? filteredArticles : remainingStories).map(
                (art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    isBookmarked={savedArticleIds.includes(art.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onSelect={setActiveArticle}
                  />
                )
              )}
            </div>
          </section>
        )}

        {/* Newsletter Dispatch Subscription */}
        <section className="pt-6">
          <NewsletterDispatch />
        </section>
      </main>

      {/* Institutional Colophon / Footer */}
      <footer className="mt-20 border-t border-stone-300 bg-stone-100/80 px-6 py-12 text-stone-600 text-xs font-mono">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-1">
              <span className="font-display text-xl font-bold tracking-widest text-stone-900 uppercase">
                Tectonica
              </span>
              <p className="font-editorial-body text-xs text-stone-500 leading-relaxed">
                Journal of Architecture, Material Culture & Urban Space. Published biannually in print and digital folios.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-stone-900 uppercase tracking-widest text-[11px] block">
                Disciplines
              </span>
              <ul className="space-y-1.5 text-stone-500">
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('Brutalism & Concrete');
                      scrollToArchive();
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Brutalism & Concrete
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('Tectonics & Materials');
                      scrollToArchive();
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Mass Timber & Materials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('Urban Ecology & Climate');
                      scrollToArchive();
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Urban Ecology & Climate
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('Spatial Philosophy');
                      scrollToArchive();
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Spatial Philosophy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setSelectedCategory('Adaptive Reuse');
                      scrollToArchive();
                    }}
                    className="hover:text-stone-900 transition-colors"
                  >
                    Adaptive Reuse
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-stone-900 uppercase tracking-widest text-[11px] block">
                Curatorial Offices
              </span>
              <ul className="space-y-1.5 text-stone-500 text-[11px]">
                <li>Nordic Bureau: Otaniemi, Espoo / Helsinki</li>
                <li>Alpine Research Studio: ETH Hönggerberg, Zurich</li>
                <li>East Asia Bureau: Yoshida-Honmachi, Sakyo-ku, Kyoto</li>
                <li>ISSN Registry: 2789-4401</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-stone-900 uppercase tracking-widest text-[11px] block">
                Editorial Inquiry
              </span>
              <p className="text-stone-500 leading-relaxed text-[11px]">
                Submissions for Vol. XII (Spring 2027) on "Earthen Monoliths & Geopolymer Tectonics" are open for peer review until December 15.
              </p>
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-amber-800 hover:underline uppercase text-[11px] font-semibold block pt-1"
              >
                Read Manifesto →
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
            <div>
              © 2026 TECTONICA Journal. Open Academic Access under CC BY-NC-ND 4.0.
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarksOpen(true)}
                className="hover:text-stone-900 transition-colors"
              >
                Saved Articles ({savedArticleIds.length})
              </button>
              <span>·</span>
              <button
                onClick={() => setIsAboutOpen(true)}
                className="hover:text-stone-900 transition-colors"
              >
                Editorial Board
              </button>
              <span>·</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-stone-900 transition-colors"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Full-Page Article Reader Modal */}
      {activeArticle && (
        <ArticleReader
          article={activeArticle}
          allArticles={ARTICLES}
          isBookmarked={savedArticleIds.includes(activeArticle.id)}
          onToggleBookmark={handleToggleBookmark}
          onClose={() => setActiveArticle(null)}
          onSelectArticle={setActiveArticle}
        />
      )}

      {/* Curator's Saved Bookmarks Drawer */}
      <SavedBookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={setActiveArticle}
        onRemoveBookmark={handleToggleBookmark}
        onClearAll={handleClearAllBookmarks}
      />

      {/* About Journal Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
}
