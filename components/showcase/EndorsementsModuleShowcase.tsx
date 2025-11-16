'use client';

import { Heart } from 'lucide-react';

export default function EndorsementsModuleShowcase() {
  return (
    <div className="space-y-3.5 p-3">
      {/* Header */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-neutral-900">Endorsements</h3>
          <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
            Influenced 18 this month
          </span>
        </div>

        {/* Business Rows */}
        <div className="space-y-2.5">
          {[
            {
              name: "Jenny's Kitchen",
              blurb: 'Local food startup',
              endorsements: 234,
              logo: '🌱',
            },
            {
              name: 'Daily Grind Café',
              blurb: 'Community coffee roaster',
              endorsements: 189,
              logo: '☕',
            },
            {
              name: 'TechFlow Solutions',
              blurb: 'AI infrastructure tools',
              endorsements: 312,
              logo: '🚀',
            },
            {
              name: 'Green Thumb Nursery',
              blurb: 'Urban farming systems',
              endorsements: 156,
              logo: '🌿',
            },
          ].map((business, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 p-2.5 bg-neutral-50 rounded-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">{business.logo}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-neutral-900 truncate">
                  {business.name}
                </div>
                <div className="text-[10px] text-neutral-500 truncate">{business.blurb}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  Endorse
                </button>
                <span className="text-xs font-semibold text-emerald-600">
                  +{business.endorsements}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

