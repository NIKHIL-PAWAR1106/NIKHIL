import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export const NewsletterDispatch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 500);
  };

  return (
    <div className="border border-stone-300/80 dark:border-zinc-800 bg-stone-100/60 dark:bg-zinc-900/60 p-6 sm:p-10 rounded-sm">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400">
          The Quarterly Dispatch
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-medium text-stone-900 dark:text-zinc-100">
          Receive Critical Architectural Inquiries in Your Inbox
        </h2>
        <p className="text-sm font-sans-clean text-stone-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
          No algorithmic spam, no marketing roundups. A curated quarterly folio delivering long-form structural critiques, archival drawings, and print edition release announcements.
        </p>

        {subscribed ? (
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-sm text-emerald-800 dark:text-emerald-300 text-xs font-mono flex items-center justify-center gap-2 animate-fade-in">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Thank you. Your dispatch subscription for {email} has been logged.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="email"
                placeholder="architectural.office@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-3 py-2.5 text-xs bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 rounded-sm focus:outline-hidden focus:border-stone-900 dark:focus:border-zinc-100 font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 text-xs font-mono uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              <span>{loading ? 'Registering...' : 'Subscribe'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="text-[10px] font-mono text-stone-400">
          Issued biannually in tandem with the print catalog. Unsubscribe at any time with one click.
        </div>
      </div>
    </div>
  );
};
