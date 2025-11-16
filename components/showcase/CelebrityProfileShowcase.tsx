'use client';

import { BadgeCheck, Users, TrendingUp } from 'lucide-react';

export default function CelebrityProfileShowcase() {
  return (
    <div className="space-y-3.5 p-3">
      {/* Header */}
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-emerald-50 to-white shadow-sm p-3.5">
        <div className="flex items-start gap-3 mb-3">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-400 border-2 border-white shadow-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">MC</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white">
              <BadgeCheck className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-neutral-900">Mark Cuban</h3>
            </div>
            <p className="text-xs text-neutral-600 mb-1">@mcuban • Dallas, TX</p>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <Users className="w-3 h-3" />
              <span>2.1M followers</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold">
            Follow
          </button>
          <button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 text-xs font-semibold">
            Message
          </button>
        </div>
      </div>

      {/* Signals/Tags */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide px-1">
        {['Expert-Backed', 'AI Infrastructure', 'Local SMBs', 'Avg Return 2.4×'].map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-full bg-white/80 border border-neutral-200 text-[10px] font-semibold text-neutral-700 whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-neutral-200">
        {['Overview', 'Endorsements', 'Investments'].map((tab, i) => (
          <button
            key={tab}
            className={`px-3 py-1.5 text-xs font-semibold border-b-2 transition-colors ${
              i === 0
                ? 'border-emerald-600 text-emerald-600'
                : 'border-transparent text-neutral-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Recent Endorsements */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <h4 className="text-xs font-semibold text-neutral-900 mb-2">Recent Endorsements</h4>
        <div className="space-y-2.5">
          {[
            {
              name: 'Slice Robotics',
              quote: 'Strong founding team with ops DNA. Clear path to scale.',
              endorsements: 124,
            },
            {
              name: 'Daily Grind Café',
              quote: 'Unit economics improving with each new store.',
              endorsements: 89,
            },
          ].map((item, i) => (
            <div key={i} className="p-2.5 bg-neutral-50 rounded-xl">
              <div className="flex items-start gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[10px] font-bold">{item.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-neutral-900">{item.name}</div>
                  <p className="text-[10px] text-neutral-600 mt-0.5">{item.quote}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-neutral-500">High confidence</span>
                <span className="text-xs font-semibold text-emerald-600">{item.endorsements} endorsements</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Investments */}
      <div className="rounded-2xl border border-neutral-200 bg-white/90 shadow-sm p-3.5">
        <h4 className="text-xs font-semibold text-neutral-900 mb-2">Latest Investments</h4>
        <div className="space-y-2.5">
          {[
            { name: 'Slice Robotics', date: 'Sep 2025', tag: 'Pre-seed' },
            { name: 'Daily Grind Café', date: 'Sep 2025', tag: 'Local SMB' },
            { name: 'Green Thumb Nursery', date: 'Aug 2025', tag: 'Creator' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2.5 bg-neutral-50 rounded-xl">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{item.name[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-neutral-900">{item.name}</div>
                <div className="text-[10px] text-neutral-500">Backed {item.date}</div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-neutral-200 bg-white/90 shadow-sm p-2.5">
          <div className="text-[10px] text-neutral-500 mb-1">Influenced</div>
          <div className="text-sm font-bold text-neutral-900">18 this month</div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white/90 shadow-sm p-2.5">
          <div className="text-[10px] text-neutral-500 mb-1">Signals</div>
          <div className="text-sm font-bold text-neutral-900">134 backed</div>
        </div>
      </div>
    </div>
  );
}

