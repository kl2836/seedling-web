'use client';

import { TrendingUp, Users, Star, Coins } from 'lucide-react';

export default function HomeShowcase() {
  return (
    <div className="space-y-3.5 p-3">
      {/* Hero Digest */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">Hey Kevin 👋</h3>
        <p className="text-xs text-neutral-600 mb-2.5">Your portfolio ticked up today.</p>
        <div className="space-y-2">
          {[
            { icon: '🌱', text: 'Emily & Alex backed two startups' },
            { icon: '🏅', text: '4-week endorsement streak' },
            { icon: '🧠', text: '3 new AI-matched opportunities' },
            { icon: '🪙', text: 'Daily Grind paid $32' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Investor Panel */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Portfolio</h3>
          <span className="text-xs text-emerald-600 font-semibold">+2.3%</span>
        </div>
        <div className="mb-2">
          <div className="text-lg font-bold text-neutral-900">$12,450</div>
          <div className="text-xs text-neutral-500">7 holdings</div>
        </div>
        <div className="h-12 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg flex items-end justify-between px-2 pb-1 mb-2">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="w-1 bg-emerald-600 rounded-t"
              style={{ height: `${30 + Math.sin(i / 2) * 10 + i * 2}%` }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <TrendingUp className="w-3 h-3 text-emerald-600" />
          <span>Rev-share from Daily Grind paid $32</span>
        </div>
      </div>

      {/* Endorser Panel */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Endorsements</h3>
          <span className="text-xs text-amber-600 font-semibold">Silver</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">78</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-neutral-900">Rank #12</div>
            <div className="text-xs text-neutral-500">Top 12% • 4w streak</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <Users className="w-3 h-3 text-emerald-600" />
          <span>Influenced 18 this month</span>
        </div>
      </div>

      {/* Business Cards */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <h3 className="text-xs font-semibold text-neutral-900 mb-2">Discover</h3>
        <div className="space-y-2.5">
          {[
            { name: "Jenny's Kitchen", city: 'SF, CA', endorsements: 124, type: 'investable' },
            { name: 'Daily Grind Café', city: 'Oakland, CA', endorsements: 89, type: 'endorsed' },
            { name: 'TechFlow Solutions', city: 'Palo Alto, CA', endorsements: 203, type: 'investable' },
          ].map((biz, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2 bg-neutral-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{biz.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-neutral-900 truncate">{biz.name}</div>
                <div className="text-[10px] text-neutral-500">{biz.city}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-semibold text-emerald-600">{biz.endorsements}</div>
                <div className="text-[10px] text-neutral-400">
                  {biz.type === 'investable' ? 'Invest' : 'Endorse'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Preview */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <h3 className="text-xs font-semibold text-neutral-900 mb-2">Activity Feed</h3>
        <div className="space-y-2">
          {[
            { name: 'Alex', action: 'backed', business: 'Daily Grind Café' },
            { name: 'Emily', action: 'endorsed', business: "Jenny's Kitchen" },
            { name: 'Mark Cuban', action: 'invested', business: 'TechFlow Solutions' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-semibold">{item.name[0]}</span>
              </div>
              <span className="text-neutral-700 flex-1">
                <span className="font-semibold">{item.name}</span> {item.action} {item.business}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

