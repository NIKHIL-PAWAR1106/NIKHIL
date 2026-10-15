import React from 'react';
import { X, BookOpen, Compass, Layers, ShieldCheck } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] dark:bg-zinc-900 rounded-sm border border-stone-300 dark:border-zinc-700 shadow-2xl p-6 sm:p-8 z-10 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 dark:border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 dark:text-amber-400">
              Institutional Manifesto
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-stone-900 dark:text-zinc-100 mt-1">
              About TECTONICA
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 dark:hover:text-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mission Statement */}
        <div className="space-y-4 text-stone-700 dark:text-zinc-300 font-editorial-body text-base leading-relaxed">
          <p>
            Founded in 2021 as a biannual print monograph, <strong className="font-semibold text-stone-900 dark:text-zinc-100">TECTONICA</strong> exists to resist the frictionless digital homogenization of architecture. We publish long-form critical inquiries into the physics, politics, and sensory phenomenologies of the built world.
          </p>
          <p>
            In an era of hyper-rendered corporate real estate and algorithm-driven facade gimmicks, we champion tectonic gravity: the carpenter’s formwork, the acoustic geometry of concert halls, the thermodynamics of Islamic courtyards, and the carbon sequestration of cross-laminated timber.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-zinc-800 font-sans-clean">
          <div className="space-y-1.5 p-3 bg-stone-100/60 dark:bg-zinc-800/60 rounded-sm">
            <Layers className="w-4 h-4 text-amber-800 dark:text-amber-400" />
            <h4 className="font-semibold text-xs text-stone-900 dark:text-zinc-100 uppercase tracking-wider font-mono">
              Material Honesty
            </h4>
            <p className="text-[11px] text-stone-500 dark:text-zinc-400 leading-normal">
              Investigating raw mass, joinery tolerances, and natural aging over synthetic cladding.
            </p>
          </div>

          <div className="space-y-1.5 p-3 bg-stone-100/60 dark:bg-zinc-800/60 rounded-sm">
            <Compass className="w-4 h-4 text-amber-800 dark:text-amber-400" />
            <h4 className="font-semibold text-xs text-stone-900 dark:text-zinc-100 uppercase tracking-wider font-mono">
              Passive Physics
            </h4>
            <p className="text-[11px] text-stone-500 dark:text-zinc-400 leading-normal">
              Prioritizing daylight scoops, thermal inertia, and microclimate ecology over mechanical chillers.
            </p>
          </div>

          <div className="space-y-1.5 p-3 bg-stone-100/60 dark:bg-zinc-800/60 rounded-sm">
            <ShieldCheck className="w-4 h-4 text-amber-800 dark:text-amber-400" />
            <h4 className="font-semibold text-xs text-stone-900 dark:text-zinc-100 uppercase tracking-wider font-mono">
              Spatial Equity
            </h4>
            <p className="text-[11px] text-stone-500 dark:text-zinc-400 leading-normal">
              Reclaiming the 15-minute neighborhood and public commons from automobile colonization.
            </p>
          </div>
        </div>

        {/* Editorial Board Footnote */}
        <div className="pt-4 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-stone-500 dark:text-zinc-400">
          <span>ISSN 2789-4401 · Zurich / Helsinki / Kyoto</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs uppercase tracking-wider rounded-sm font-semibold hover:bg-stone-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
