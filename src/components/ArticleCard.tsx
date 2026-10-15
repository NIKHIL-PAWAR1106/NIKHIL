import React from 'react';
import { ArrowUpRight, Bookmark, Sparkles } from 'lucide-react';
import { Article } from '../types';
import { ArchitecturalPlate } from './ArchitecturalPlate';

interface ArticleCardProps {
  article: Article;
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
  onSelect: (article: Article) => void;
  variant?: 'featured' | 'standard' | 'compact';
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isBookmarked,
  onToggleBookmark,
  onSelect,
  variant = 'standard',
}) => {
  // Variant: Featured Lead Story (Pattern C from Editorial SKILL.md: 1.3x visual weight)
  if (variant === 'featured') {
    return (
      <article className="group relative border border-stone-300/80 dark:border-zinc-800 bg-[#FAF8F5] dark:bg-zinc-900 rounded-sm overflow-hidden hover:border-stone-400 dark:hover:border-zinc-700 transition-all duration-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Visual Architectural Plate Column */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-zinc-800 p-4 sm:p-6 bg-stone-100/50 dark:bg-zinc-950/40 flex items-center justify-center">
            <div className="w-full cursor-pointer" onClick={() => onSelect(article)}>
              <ArchitecturalPlate article={article} aspectRatio="16:9" />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Quiet 1-Line Text Kicker (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-500 dark:text-zinc-400 uppercase">
                <span className="font-semibold text-amber-800 dark:text-amber-400">
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.readTimeMinutes} min read</span>
                <span aria-hidden="true">·</span>
                <span>{article.plateNumber}</span>
              </div>

              {/* Dominant Headline */}
              <h2
                onClick={() => onSelect(article)}
                className="text-2xl sm:text-3xl font-display font-medium text-stone-900 dark:text-zinc-100 leading-tight group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors cursor-pointer text-balance"
              >
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-sm sm:text-base font-sans-clean text-stone-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="mt-6 pt-5 border-t border-stone-200/80 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-xs font-medium shrink-0 shadow-2xs"
                  style={{ backgroundColor: article.author.avatarBg }}
                >
                  {article.author.avatarInitials}
                </div>
                <div className="text-xs">
                  <div className="font-medium text-stone-900 dark:text-zinc-100">
                    {article.author.name}
                  </div>
                  <div className="text-stone-500 dark:text-zinc-400 font-mono text-[11px]">
                    {article.author.affiliation}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleBookmark(article.id)}
                  className={`p-2 rounded transition-colors ${
                    isBookmarked
                      ? 'text-amber-800 bg-amber-50 dark:bg-amber-950/40'
                      : 'text-stone-400 hover:text-stone-700 dark:hover:text-zinc-200'
                  }`}
                  title={isBookmarked ? 'Remove bookmark' : 'Bookmark essay'}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={() => onSelect(article)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors"
                >
                  <span>Read Monograph</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Standard Card
  return (
    <article className="group relative border border-stone-300/80 dark:border-zinc-800 bg-[#FAF8F5] dark:bg-zinc-900 rounded-sm overflow-hidden hover:border-stone-400 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Visual Architectural Plate Header */}
        <div
          className="cursor-pointer border-b border-stone-200 dark:border-zinc-800 p-3 sm:p-4 bg-stone-100/60 dark:bg-zinc-950/30"
          onClick={() => onSelect(article)}
        >
          <ArchitecturalPlate article={article} aspectRatio="4:3" />
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Quiet 1-Line Text Kicker (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-stone-500 dark:text-zinc-400 uppercase">
            <span className="font-semibold text-amber-800 dark:text-amber-400 truncate max-w-[140px]">
              {article.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="whitespace-nowrap">{article.readTimeMinutes} min read</span>
          </div>

          {/* Headline */}
          <h3
            onClick={() => onSelect(article)}
            className="text-xl font-display font-medium text-stone-900 dark:text-zinc-100 leading-snug group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors cursor-pointer text-balance"
          >
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm font-sans-clean text-stone-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-200/70 dark:border-zinc-800/80 flex items-center justify-between mt-2">
        <div className="text-xs">
          <div className="font-medium text-stone-900 dark:text-zinc-100 truncate max-w-[140px]">
            {article.author.name}
          </div>
          <div className="text-stone-400 font-mono text-[11px] truncate max-w-[140px]">
            {article.author.affiliation}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onToggleBookmark(article.id)}
            className={`p-1.5 rounded transition-colors ${
              isBookmarked
                ? 'text-amber-800 bg-amber-50 dark:bg-amber-950/40'
                : 'text-stone-400 hover:text-stone-700 dark:hover:text-zinc-200'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark essay'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={() => onSelect(article)}
            className="p-1.5 text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
            title="Read article"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
