import React from 'react';
import { Article } from '../types';

interface ArchitecturalPlateProps {
  article: Article;
  aspectRatio?: '16:9' | '4:3' | '3:2';
  className?: string;
  showCaption?: boolean;
}

export const ArchitecturalPlate: React.FC<ArchitecturalPlateProps> = ({
  article,
  aspectRatio = '4:3',
  className = '',
  showCaption = false,
}) => {
  const { plateNumber, category, palette, id } = article;

  const aspectClass =
    aspectRatio === '16:9'
      ? 'aspect-[16/9]'
      : aspectRatio === '3:2'
      ? 'aspect-[3/2]'
      : 'aspect-[4/3]';

  // Render bespoke geometric architectural drawings based on the article category and subject
  const renderDiagram = () => {
    switch (category) {
      case 'Brutalism & Concrete':
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`concrete-grid-${id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
                <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.15" />
              </pattern>
              <pattern id={`concrete-stripes-${id}`} width="12" height="12" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" />
              </pattern>
            </defs>
            {/* Background Grid */}
            <rect width="600" height="450" fill={`url(#concrete-grid-${id})`} className="text-slate-700" />
            
            {/* Monumental brutalist geometric masses */}
            <rect x="80" y="160" width="180" height="230" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" className="text-slate-700" />
            <rect x="80" y="160" width="180" height="230" fill={`url(#concrete-stripes-${id})`} className="text-slate-800" />
            
            <polygon points="260,160 420,100 420,390 260,390" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5" className="text-slate-700" />
            <polygon points="420,100 520,140 520,390 420,390" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
            
            {/* Slanted skylight cantilever */}
            <polygon points="120,90 320,40 460,90 260,140" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-slate-600" />
            
            {/* Precision dimension lines & elevation markers */}
            <line x1="50" y1="390" x2="550" y2="390" stroke="currentColor" strokeWidth="1.5" className="text-slate-900" />
            <text x="50" y="415" className="font-mono text-[9px] tracking-widest text-slate-500 fill-current">±0.00 GRADE LEVEL</text>
            <text x="440" y="95" className="font-mono text-[9px] tracking-widest text-slate-500 fill-current">+24.50m ROOF PARAPET</text>
            
            {/* Solar ray angle vector */}
            <line x1="40" y1="60" x2="260" y2="280" stroke="#9A3412" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="40" cy="60" r="3" fill="#9A3412" />
            <text x="60" y="70" className="font-mono text-[8px] fill-[#9A3412]">SOLAR INCIDENCE 12.4° (MIDWINTER)</text>
            
            {/* Shuttering board module labels */}
            <text x="95" y="190" className="font-mono text-[8px] tracking-wider text-slate-600 fill-current">FORM: 120mm SCOTS PINE</text>
            <text x="95" y="205" className="font-mono text-[8px] tracking-wider text-slate-600 fill-current">TIE-ROD MATRIX 450x900</text>
          </svg>
        );

      case 'Tectonics & Materials':
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`wood-grain-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.18" />
                <line x1="0" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.18" />
              </pattern>
            </defs>
            {/* Cross-Laminated Timber isometric lamellas */}
            <g transform="translate(140, 100)">
              {/* Layer 1 - Horizontal */}
              <polygon points="0,120 160,40 320,120 160,200" fill="#E8D5C4" stroke="#78350F" strokeWidth="1.2" />
              {/* Layer 2 - Cross 90 deg */}
              <polygon points="0,100 160,20 320,100 160,180" fill="#D6BAA0" stroke="#78350F" strokeWidth="1.2" />
              {/* Layer 3 - Longitudinal */}
              <polygon points="0,80 160,0 320,80 160,160" fill="#F4E9DC" stroke="#78350F" strokeWidth="1.2" />
              
              {/* Vertical dowel connector lines */}
              <line x1="80" y1="40" x2="80" y2="160" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="240" y1="40" x2="240" y2="160" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="160" y1="80" x2="160" y2="200" stroke="#9A3412" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
            <text x="60" y="70" className="font-mono text-[9px] tracking-wider fill-[#78350F]">ISOMETRIC: 7-PLY CLT STRUCTURAL MATRIX</text>
            <text x="60" y="85" className="font-mono text-[8px] fill-stone-500">GLULAM DOWEL RETENTION SYSTEM // TOLERANCE &lt;0.2mm</text>
            <text x="60" y="400" className="font-mono text-[9px] tracking-widest fill-stone-600">CHAR-RESISTANT SACRIFICIAL LAYER: 0.65mm/MIN</text>
          </svg>
        );

      case 'Spatial Philosophy':
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Pure minimalist spatial plan & light slit */}
            <rect x="120" y="80" width="360" height="280" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2" />
            
            {/* Intersecting diagonal wall */}
            <line x1="160" y1="360" x2="440" y2="80" stroke="#1E293B" strokeWidth="3" />
            
            {/* Cruciform light incision or courtyard center */}
            <g transform="translate(300, 220)">
              <rect x="-40" y="-40" width="80" height="80" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="1.5" />
              <line x1="0" y1="-50" x2="0" y2="50" stroke="#9A3412" strokeWidth="2" />
              <line x1="-50" y1="0" x2="50" y2="0" stroke="#9A3412" strokeWidth="2" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="#1E3A8A" strokeWidth="1" strokeDasharray="2 2" />
            </g>
            
            {/* Radial light lines */}
            <path d="M 300 220 L 140 100" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 2" />
            <path d="M 300 220 L 460 340" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 2" />
            <path d="M 300 220 L 140 340" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 2" />
            
            <text x="135" y="110" className="font-mono text-[9px] tracking-wider fill-slate-700">VOID FRACTION: 33.3%</text>
            <text x="135" y="125" className="font-mono text-[8px] fill-slate-500">CENTRAL OASIS WELL // MICROCLIMATIC APERTURE</text>
            <text x="320" y="380" className="font-mono text-[9px] tracking-widest fill-slate-700">THRESHOLD DRIBA ANGLE: 90°</text>
          </svg>
        );

      case 'Adaptive Reuse':
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Silo cylindrical matrix cut into galleria */}
            <g transform="translate(60, 60)">
              {/* Industrial Silo silhouettes */}
              <circle cx="80" cy="100" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="200" cy="100" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="320" cy="100" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="440" cy="100" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />

              <circle cx="80" cy="220" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="200" cy="220" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="320" cy="220" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />
              <circle cx="440" cy="220" r="60" fill="#F1F5F9" stroke="#334155" strokeWidth="2" />

              {/* Subtractive carved atrium organic cutout */}
              <path
                d="M 160 100 C 180 140, 240 180, 260 220 C 290 180, 340 140, 360 100 C 320 80, 200 80, 160 100 Z"
                fill="#FEF3C7"
                fillOpacity="0.8"
                stroke="#15803D"
                strokeWidth="2.5"
                strokeDasharray="6 3"
              />
            </g>
            <text x="50" y="380" className="font-mono text-[9px] tracking-wider fill-emerald-800">PALIMPSEST MAPPING: SUBTRACTIVE CUTOUT</text>
            <text x="50" y="395" className="font-mono text-[8px] fill-stone-500">DIAMOND-WIRE EXCAVATION OF 42 HISTORIC GRANARY TUBES</text>
            <text x="380" y="380" className="font-mono text-[9px] tracking-widest fill-stone-700">EMBODIED CO2 RETAINED: 8,400T</text>
          </svg>
        );

      case 'Urban Ecology & Climate':
      default:
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Biophilic microclimate transect & vegetation layers */}
            <g transform="translate(60, 50)">
              {/* Stepped urban canopy */}
              <rect x="40" y="100" width="120" height="240" fill="#F0FDF4" stroke="#166534" strokeWidth="1.5" />
              <rect x="200" y="40" width="140" height="300" fill="#ECFDF5" stroke="#166534" strokeWidth="1.5" />
              <rect x="380" y="140" width="100" height="200" fill="#F0FDF4" stroke="#166534" strokeWidth="1.5" />

              {/* Suspended living screens & balconies */}
              <line x1="20" y1="140" x2="160" y2="140" stroke="#15803D" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="20" y1="200" x2="160" y2="200" stroke="#15803D" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="180" y1="90" x2="340" y2="90" stroke="#15803D" strokeWidth="2" strokeDasharray="4 2" />
              <line x1="180" y1="180" x2="340" y2="180" stroke="#15803D" strokeWidth="2" strokeDasharray="4 2" />

              {/* Convective wind vectors */}
              <path d="M 0 320 C 100 310, 150 280, 200 240 C 250 200, 300 160, 480 120" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4 3" />
              <circle cx="480" cy="120" r="4" fill="#0284C7" />
            </g>
            <text x="60" y="380" className="font-mono text-[9px] tracking-wider fill-emerald-800">MICROCLIMATE TRANSECT: EVAPOTRANSPIRATIVE FLOW</text>
            <text x="60" y="395" className="font-mono text-[8px] fill-stone-500">THERMAL ATTENUATION: ΔT -6.2°C // CANOPY DENSITY 45%</text>
            <text x="360" y="380" className="font-mono text-[9px] tracking-widest fill-sky-800">PASSIVE AIR EXCHANGE: 8.4 ACH</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {/* Plate Frame */}
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-sm border border-stone-300/80 bg-stone-100 flex flex-col justify-between p-4 sm:p-5 shadow-xs`}
        style={{ backgroundColor: article.palette.bgAccent }}
      >
        {/* Top Header Plate Registration Bar */}
        <div className="flex items-center justify-between border-b border-stone-300/60 pb-2 text-[10px] sm:text-xs font-mono tracking-widest text-stone-500 uppercase">
          <span className="font-medium">{plateNumber}</span>
          <span className="hidden sm:inline">TECTONICA ARCHIVE // FOLIO 2026</span>
          <span className="text-stone-700 font-semibold">{category}</span>
        </div>

        {/* Center Diagram Graphic */}
        <div className="relative flex-1 my-2 flex items-center justify-center overflow-hidden">
          {renderDiagram()}
        </div>

        {/* Bottom Metadata Registration Line */}
        <div className="flex items-center justify-between border-t border-stone-300/60 pt-2 text-[10px] font-mono tracking-wider text-stone-500">
          <span>SCALE 1:250 METRIC</span>
          <span className="truncate max-w-[200px] text-right font-medium text-stone-700">
            {article.author.name.toUpperCase()}
          </span>
        </div>

        {/* Archival corner registration marks */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-stone-400 pointer-events-none" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-stone-400 pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-stone-400 pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-stone-400 pointer-events-none" />
      </div>

      {showCaption && (
        <p className="mt-2 text-xs font-display italic text-stone-500">
          {plateNumber} — Tectonic diagram analysis for {article.title}.
        </p>
      )}
    </div>
  );
};
