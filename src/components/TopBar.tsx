import React from 'react';
import { Bookmark } from 'lucide-react';

interface TopBarProps {
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenAbout: () => void;
  onScrollToArchive: () => void;
  onSelectCategoryFilter: (category: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  savedCount,
  onOpenBookmarks,
  onOpenAbout,
  onScrollToArchive,
  onSelectCategoryFilter,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-stone-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl sm:text-2xl font-display font-semibold tracking-wider text-stone-900 dark:text-zinc-100 whitespace-nowrap shrink-0 hover:text-amber-800 dark:hover:text-amber-400 transition-colors uppercase"
        >
          Tectonica
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-zinc-400">
          <a
            href="#essays"
            onClick={(e) => {
              e.preventDefault();
              onScrollToArchive();
            }}
            className="hover:text-stone-900 dark:hover:text-zinc-100 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Essays
          </a>
          <button
            onClick={() => {
              onSelectCategoryFilter('Brutalism & Concrete');
              onScrollToArchive();
            }}
            className="hover:text-stone-900 dark:hover:text-zinc-100 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Concrete
          </button>
          <button
            onClick={() => {
              onSelectCategoryFilter('Tectonics & Materials');
              onScrollToArchive();
            }}
            className="hover:text-stone-900 dark:hover:text-zinc-100 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Timber
          </button>
          <button
            onClick={() => {
              onSelectCategoryFilter('Urban Ecology & Climate');
              onScrollToArchive();
            }}
            className="hover:text-stone-900 dark:hover:text-zinc-100 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ecology
          </button>
          <button
            onClick={onOpenAbout}
            className="hover:text-stone-900 dark:hover:text-zinc-100 hover:underline transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Manifesto
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 rounded-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>Reading List</span>
            <span className="font-semibold text-amber-300 dark:text-amber-800 tabular-nums">
              ({savedCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
