import React from 'react';
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react';
import { Article } from '../types';

interface SavedBookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const SavedBookmarksDrawer: React.FC<SavedBookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF8F5] dark:bg-zinc-900 h-full shadow-2xl flex flex-col z-10 border-l border-stone-200 dark:border-zinc-800">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-amber-800 dark:text-amber-400 fill-current" />
            <h2 className="font-display text-xl font-medium text-stone-900 dark:text-zinc-100">
              Curator’s Reading List
            </h2>
            <span className="text-xs font-mono text-stone-500 tabular-nums">
              ({savedArticles.length})
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-500 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {savedArticles.length === 0 ? (
            <div className="text-center py-16 px-4">
              <Bookmark className="w-8 h-8 text-stone-300 dark:text-zinc-600 mx-auto mb-3" />
              <p className="text-sm font-display italic text-stone-600 dark:text-zinc-400">
                Your reading list is currently empty.
              </p>
              <p className="text-xs font-mono text-stone-400 mt-1">
                Save essays to study later across your session.
              </p>
            </div>
          ) : (
            savedArticles.map((art) => (
              <div
                key={art.id}
                className="p-4 bg-white dark:bg-zinc-800/80 border border-stone-200 dark:border-zinc-700 rounded-sm hover:border-stone-400 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span className="uppercase text-amber-800 dark:text-amber-400 font-medium">
                      {art.category}
                    </span>
                    <span>{art.readTimeMinutes} min</span>
                  </div>

                  <h3
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="font-display font-medium text-base text-stone-900 dark:text-zinc-100 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                  >
                    {art.title}
                  </h3>

                  <p className="text-xs text-stone-500 dark:text-zinc-400 font-sans-clean line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 dark:border-zinc-700 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-mono text-[11px]">
                    By {art.author.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRemoveBookmark(art.id)}
                      className="p-1 text-stone-400 hover:text-rose-600 transition-colors"
                      title="Remove from list"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="flex items-center gap-1 text-amber-800 dark:text-amber-400 font-mono uppercase text-[11px] font-semibold hover:underline"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="p-4 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between bg-stone-100/50 dark:bg-zinc-800/40">
            <button
              onClick={onClearAll}
              className="text-xs font-mono text-stone-500 hover:text-rose-600 transition-colors"
            >
              Clear Reading List
            </button>
            <span className="text-xs font-mono text-stone-400">
              Saved locally in browser
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
