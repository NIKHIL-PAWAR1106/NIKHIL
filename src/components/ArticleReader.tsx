import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Type,
  Check,
  Heart,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Send,
  X
} from 'lucide-react';
import { Article, Comment } from '../types';
import { ArchitecturalPlate } from './ArchitecturalPlate';

interface ArticleReaderProps {
  article: Article;
  allArticles: Article[];
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  allArticles,
  isBookmarked,
  onToggleBookmark,
  onClose,
  onSelectArticle,
}) => {
  // Reading preferences
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans'>('serif');
  const [themeMode, setThemeMode] = useState<'paper' | 'white' | 'dark'>('paper');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Claps
  const [claps, setClaps] = useState(article.initialClaps);
  const [userClapped, setUserClapped] = useState(false);
  const [floatingClapCount, setFloatingClapCount] = useState<number | null>(null);

  // Audio speech synthesis
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Comments
  const [comments, setComments] = useState<Comment[]>(article.initialComments);
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [newCommentRole, setNewCommentRole] = useState('');
  const [newCommentContent, setNewCommentContent] = useState('');
  const [commentSubmitting, setCommentSubmitting] = useState(false);
  const [commentSuccess, setCommentSuccess] = useState(false);

  // Share confirmation
  const [copiedLink, setCopiedLink] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, [article.id]);

  // Speech synthesis cleanup
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article.id]);

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Prepare text summary of the essay
    const textToRead = `${article.title}. ${article.subtitle}. By ${article.author.name}. ${article.excerpt}. ${article.sections
      .map((s) => `${s.heading}. ${s.paragraphs.join(' ')}`)
      .join(' ')} In conclusion: ${article.conclusion}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = speechRate;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setUserClapped(true);
    setFloatingClapCount((prev) => (prev ? prev + 1 : 1));
    setTimeout(() => {
      setFloatingClapCount(null);
    }, 1200);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setShowShareModal(true);
    setTimeout(() => {
      setCopiedLink(false);
    }, 3000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentAuthor.trim() || !newCommentContent.trim()) return;

    setCommentSubmitting(true);
    setTimeout(() => {
      const newComment: Comment = {
        id: `c-user-${Date.now()}`,
        author: newCommentAuthor.trim(),
        role: newCommentRole.trim() || 'Architectural Reader',
        timestamp: 'Just now',
        content: newCommentContent.trim(),
        likes: 0,
      };
      setComments((prev) => [newComment, ...prev]);
      setNewCommentAuthor('');
      setNewCommentRole('');
      setNewCommentContent('');
      setCommentSubmitting(false);
      setCommentSuccess(true);
      setTimeout(() => setCommentSuccess(false), 4000);
    }, 400);
  };

  // Find next and previous articles
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  // Font size classes
  const proseSizeClass =
    fontSize === 'normal'
      ? 'text-[17px] leading-[1.8]'
      : fontSize === 'large'
      ? 'text-[19px] leading-[1.85]'
      : 'text-[22px] leading-[1.9]';

  // Theme styling
  const themeClasses =
    themeMode === 'paper'
      ? 'bg-[#FAF8F5] text-stone-900'
      : themeMode === 'white'
      ? 'bg-white text-stone-900'
      : 'bg-[#18181B] text-stone-100';

  const themeBorder =
    themeMode === 'dark' ? 'border-zinc-800' : 'border-stone-200';

  const themeMutedText =
    themeMode === 'dark' ? 'text-zinc-400' : 'text-stone-500';

  const themeCardBg =
    themeMode === 'dark' ? 'bg-zinc-900' : 'bg-stone-50';

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 overflow-y-auto ${themeClasses} transition-colors duration-200`}
    >
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-stone-200/50 dark:bg-zinc-800">
        <div
          className="h-full bg-amber-800 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reader Utility Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-md ${themeMode === 'dark' ? 'bg-zinc-900/90' : 'bg-[#FAF8F5]/90'} border-b ${themeBorder} px-4 sm:px-8 py-3 transition-colors duration-200`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Back button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Folio</span>
          </button>

          {/* Center Edition Mark */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-zinc-400 tracking-wider">
            <span>{article.edition}</span>
            <span>·</span>
            <span>{article.plateNumber}</span>
          </div>

          {/* Reading customization controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Reader button */}
            <button
              onClick={handleToggleSpeech}
              title={isSpeaking ? 'Pause reading' : 'Listen to essay'}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                isSpeaking
                  ? 'bg-amber-800 text-white'
                  : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200/60 dark:hover:bg-zinc-800'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Pause' : 'Listen'}</span>
            </button>

            {/* Type Size Toggle */}
            <div className="flex items-center border border-stone-300/70 dark:border-zinc-700 rounded overflow-hidden text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 ${fontSize === 'normal' ? 'bg-stone-300/60 dark:bg-zinc-700 font-semibold' : 'hover:bg-stone-200/40'}`}
                title="Normal Text Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 border-l border-stone-300/70 dark:border-zinc-700 ${fontSize === 'large' ? 'bg-stone-300/60 dark:bg-zinc-700 font-semibold' : 'hover:bg-stone-200/40'}`}
                title="Comfortable Text Size"
              >
                A+
              </button>
            </div>

            {/* Font Family Switcher */}
            <button
              onClick={() => setFontFamily((f) => (f === 'serif' ? 'sans' : 'serif'))}
              className="p-1.5 text-stone-600 dark:text-zinc-300 hover:bg-stone-200/60 dark:hover:bg-zinc-800 rounded transition-colors"
              title={`Switch to ${fontFamily === 'serif' ? 'Sans-serif' : 'Editorial Serif'}`}
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Canvas Theme Selector */}
            <div className="hidden sm:flex items-center gap-1 pl-1 border-l border-stone-300/60 dark:border-zinc-800">
              <button
                onClick={() => setThemeMode('paper')}
                className={`w-5 h-5 rounded-full border ${themeMode === 'paper' ? 'ring-2 ring-amber-800' : 'border-stone-300'}`}
                style={{ backgroundColor: '#FAF8F5' }}
                title="Warm Paper Theme"
              />
              <button
                onClick={() => setThemeMode('white')}
                className={`w-5 h-5 rounded-full border ${themeMode === 'white' ? 'ring-2 ring-amber-800' : 'border-stone-300'}`}
                style={{ backgroundColor: '#FFFFFF' }}
                title="Crisp Gallery White"
              />
              <button
                onClick={() => setThemeMode('dark')}
                className={`w-5 h-5 rounded-full border ${themeMode === 'dark' ? 'ring-2 ring-amber-800' : 'border-zinc-700'}`}
                style={{ backgroundColor: '#18181B' }}
                title="Dark Slate Reading Theme"
              />
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded transition-colors ${
                isBookmarked
                  ? 'text-amber-800 bg-amber-50 dark:bg-amber-950/40'
                  : 'text-stone-600 dark:text-zinc-300 hover:bg-stone-200/60 dark:hover:bg-zinc-800'
              }`}
              title={isBookmarked ? 'Remove from Saved' : 'Save for later'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 text-stone-600 dark:text-zinc-300 hover:bg-stone-200/60 dark:hover:bg-zinc-800 rounded transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Reading Canvas */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-12 md:py-16">
        {/* Editorial Metadata Kicker (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 dark:text-zinc-400 font-mono mb-4">
          <span className="font-semibold text-stone-700 dark:text-zinc-300">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTimeMinutes} min read</span>
          <span aria-hidden="true">·</span>
          <span>{article.plateNumber}</span>
        </div>

        {/* Majestic Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium leading-[1.15] text-stone-900 dark:text-zinc-100 mb-5 tracking-tight text-balance">
          {article.title}
        </h1>

        {/* Subtitle Deck */}
        <p className="text-lg sm:text-xl font-display italic text-stone-600 dark:text-zinc-400 leading-relaxed mb-8 border-b border-stone-200/80 dark:border-zinc-800 pb-8 text-balance">
          {article.subtitle}
        </p>

        {/* Author Bio Header Card */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-stone-200/80 dark:border-zinc-800">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-mono font-medium text-sm shrink-0 shadow-xs"
            style={{ backgroundColor: article.author.avatarBg }}
          >
            {article.author.avatarInitials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="text-sm font-semibold text-stone-900 dark:text-zinc-100">
                {article.author.name}
              </h3>
              <span className="text-xs text-stone-500 dark:text-zinc-400 font-mono">
                {article.author.role} · {article.author.affiliation}
              </span>
            </div>
            <p className="text-xs text-stone-600 dark:text-zinc-400 mt-1 line-clamp-2 font-sans-clean">
              {article.author.bio}
            </p>
          </div>
        </div>

        {/* Primary Monograph Architectural Plate */}
        <div className="my-10">
          <ArchitecturalPlate article={article} aspectRatio="16:9" showCaption={true} />
        </div>

        {/* Lead Excerpt Framing */}
        <div className="my-8 py-6 px-6 sm:px-8 border-y border-stone-200/80 dark:border-zinc-800 bg-stone-100/50 dark:bg-zinc-900/50">
          <p className="text-base sm:text-lg font-display italic text-stone-800 dark:text-zinc-200 leading-relaxed">
            "{article.excerpt}"
          </p>
        </div>

        {/* Article Body Sections */}
        <article
          className={`space-y-10 ${
            fontFamily === 'serif' ? 'font-editorial-body' : 'font-sans-clean'
          } ${proseSizeClass}`}
        >
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-stone-900 dark:text-zinc-100 tracking-tight pt-4 border-t border-stone-200/60 dark:border-zinc-800/80">
                {section.heading}
              </h2>

              {section.paragraphs.map((para, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-stone-800 dark:text-zinc-300 text-justify ${
                    idx === 0 && pIdx === 0 ? 'drop-cap' : ''
                  }`}
                >
                  {para}
                </p>
              ))}

              {/* Pull quote if present */}
              {section.pullQuote && (
                <div className="my-8 py-6 border-y border-stone-300/80 dark:border-zinc-800 px-6 sm:px-10 text-center">
                  <blockquote className="text-xl sm:text-2xl font-display italic text-stone-900 dark:text-zinc-100 leading-relaxed mb-3">
                    "{section.pullQuote.text}"
                  </blockquote>
                  <cite className="block text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400 not-italic">
                    — {section.pullQuote.attribution}
                  </cite>
                </div>
              )}

              {/* Architectural Technical Specifications */}
              {section.specs && section.specs.length > 0 && (
                <div className="my-8 p-5 sm:p-6 bg-stone-100/70 dark:bg-zinc-900/80 rounded-sm border border-stone-300/70 dark:border-zinc-800">
                  <div className="text-xs font-mono tracking-widest uppercase text-stone-500 dark:text-zinc-400 mb-4 border-b border-stone-200 dark:border-zinc-800 pb-2">
                    Architectural Data & Specification Matrix
                  </div>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-clean">
                    {section.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <dt className="text-stone-500 dark:text-zinc-400 font-mono uppercase tracking-wider text-[11px]">
                          {spec.label}
                        </dt>
                        <dd className="font-semibold text-stone-900 dark:text-zinc-100">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* In-text Figure reference */}
              {section.figure && (
                <div className="my-8 p-4 bg-stone-50 dark:bg-zinc-900/60 border border-stone-200 dark:border-zinc-800 rounded-sm">
                  <div className="text-xs font-mono font-medium text-stone-700 dark:text-zinc-300 mb-1">
                    {section.figure.number} · {section.figure.caption}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion Synthesis */}
          <div className="my-10 pt-6 border-t border-stone-300 dark:border-zinc-800">
            <h3 className="text-lg font-display font-semibold uppercase tracking-wider text-stone-900 dark:text-zinc-100 mb-3">
              Curatorial Synthesis
            </h3>
            <p className="text-stone-800 dark:text-zinc-300 italic leading-relaxed">
              {article.conclusion}
            </p>
          </div>

          {/* Footnotes & Academic Citations */}
          {article.footnotes && article.footnotes.length > 0 && (
            <div className="mt-12 pt-6 border-t border-stone-200 dark:border-zinc-800 text-xs font-sans-clean text-stone-500 dark:text-zinc-400 space-y-2">
              <div className="font-mono uppercase tracking-widest text-stone-400 mb-2">
                References & Primary Sources
              </div>
              <ol className="list-decimal pl-5 space-y-1.5 font-mono text-[11px] leading-relaxed">
                {article.footnotes.map((note, nIdx) => (
                  <li key={nIdx}>{note}</li>
                ))}
              </ol>
            </div>
          )}
        </article>

        {/* Reader Interaction Bar: Claps, Bookmarks, and Social Sharing */}
        <div className="my-12 py-6 border-y border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Claps button with floating bubble */}
            <div className="relative">
              <button
                onClick={handleClap}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                  userClapped
                    ? 'border-amber-800 text-amber-900 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30'
                    : 'border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:border-stone-400'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span className="font-mono text-sm font-semibold tabular-nums">{claps}</span>
                <span className="text-xs uppercase tracking-wider font-mono">Applaud</span>
              </button>

              {floatingClapCount && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-800 text-white text-[11px] font-mono rounded-full animate-bounce">
                  +1
                </span>
              )}
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-mono uppercase tracking-wider transition-colors ${
                isBookmarked
                  ? 'border-amber-800 text-amber-900 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-300'
                  : 'border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 hover:border-stone-400'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 dark:border-zinc-700 text-stone-700 dark:text-zinc-300 text-xs font-mono uppercase tracking-wider hover:border-stone-400 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Essay</span>
            </button>
          </div>
        </div>

        {/* Previous & Next Navigation Strip */}
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevArticle ? (
            <button
              onClick={() => onSelectArticle(prevArticle)}
              className="p-5 border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 rounded-sm text-left transition-colors group flex flex-col justify-between"
            >
              <span className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                <ChevronLeft className="w-3.5 h-3.5" /> Previous Essay
              </span>
              <span className="font-display text-base font-semibold text-stone-900 dark:text-zinc-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                {prevArticle.title}
              </span>
            </button>
          ) : (
            <div className="p-5 border border-dashed border-stone-200 dark:border-zinc-800 text-xs font-mono text-stone-400 flex items-center">
              Beginning of Vol. XI Collection
            </div>
          )}

          {nextArticle ? (
            <button
              onClick={() => onSelectArticle(nextArticle)}
              className="p-5 border border-stone-200 dark:border-zinc-800 hover:border-stone-400 dark:hover:border-zinc-600 rounded-sm text-right transition-colors group flex flex-col justify-between"
            >
              <span className="flex items-center justify-end gap-1 text-[11px] font-mono uppercase tracking-widest text-stone-400 mb-2">
                Next Essay <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <span className="font-display text-base font-semibold text-stone-900 dark:text-zinc-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                {nextArticle.title}
              </span>
            </button>
          ) : (
            <div className="p-5 border border-dashed border-stone-200 dark:border-zinc-800 text-xs font-mono text-stone-400 flex items-center justify-end">
              End of Vol. XI Collection
            </div>
          )}
        </div>

        {/* Peer Review & Dialogue / Comments Section */}
        <section className="my-16 pt-10 border-t border-stone-300 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-800 dark:text-amber-400" />
              <h3 className="text-xl font-display font-semibold text-stone-900 dark:text-zinc-100">
                Peer Review & Critical Dialogue ({comments.length})
              </h3>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
              Moderated Academic Forum
            </span>
          </div>

          {/* New Comment Form */}
          <form
            onSubmit={handleAddComment}
            className="mb-10 p-5 sm:p-6 bg-stone-100/60 dark:bg-zinc-900/60 rounded-sm border border-stone-200 dark:border-zinc-800 space-y-4"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-zinc-400 mb-1">
              Add Your Critique or Spatial Perspective
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Full Name (e.g. Maya S. Lin)"
                value={newCommentAuthor}
                onChange={(e) => setNewCommentAuthor(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 rounded-sm focus:outline-hidden focus:border-amber-800"
              />
              <input
                type="text"
                placeholder="Institutional Affiliation or Discipline"
                value={newCommentRole}
                onChange={(e) => setNewCommentRole(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 rounded-sm focus:outline-hidden focus:border-amber-800"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Reflections on this article's tectonic argument, structural data, or historical claims..."
              value={newCommentContent}
              onChange={(e) => setNewCommentContent(e.target.value)}
              required
              className="w-full px-3 py-2 text-sm bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 rounded-sm focus:outline-hidden focus:border-amber-800 resize-y"
            />
            <div className="flex items-center justify-between pt-1">
              {commentSuccess && (
                <span className="flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-mono">
                  <Check className="w-3.5 h-3.5" /> Published to peer review folio
                </span>
              )}
              {!commentSuccess && <span />}

              <button
                type="submit"
                disabled={commentSubmitting}
                className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>{commentSubmitting ? 'Posting...' : 'Submit Contribution'}</span>
              </button>
            </div>
          </form>

          {/* Comment List */}
          <div className="space-y-6">
            {comments.map((comm) => (
              <div
                key={comm.id}
                className="p-5 border border-stone-200 dark:border-zinc-800 rounded-sm bg-white/50 dark:bg-zinc-900/40 space-y-2"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm text-stone-900 dark:text-zinc-100">
                      {comm.author}
                    </span>
                    <span className="text-xs font-mono text-stone-500 dark:text-zinc-400">
                      · {comm.role}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{comm.timestamp}</span>
                </div>
                <p className="text-sm text-stone-700 dark:text-zinc-300 font-sans-clean leading-relaxed">
                  {comm.content}
                </p>
                <div className="pt-2 flex items-center gap-1 text-xs font-mono text-stone-500">
                  <Heart className="w-3 h-3 text-stone-400" />
                  <span className="tabular-nums">{comm.likes} peers agreed</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Share Toast Modal */}
      {showShareModal && (
        <div className="fixed bottom-6 right-6 z-50 p-4 bg-stone-900 text-white rounded-md shadow-xl flex items-center gap-3 animate-fade-in text-xs font-mono">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Essay citation URL copied to clipboard!</span>
          <button
            onClick={() => setShowShareModal(false)}
            className="text-stone-400 hover:text-white ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};
