/**
 * Static 4-card mock feed for landing page hero
 * Compact, styled to match the real Seedling app feed
 */

import Image from 'next/image';

export default function LandingMockFeed() {
  return (
    <div className="w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl border border-slate-200 bg-white shadow-lg p-3.5">
      {/* Tabs row */}
      <div className="flex items-center gap-2 mb-3 text-xs overflow-x-auto scrollbar-hide">
        <button className="rounded-full bg-emerald-500 text-white px-3 py-1 font-medium whitespace-nowrap shadow-sm">
          All
        </button>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 whitespace-nowrap">
          Investments
        </button>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 whitespace-nowrap">
          Endorsements
        </button>
        <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700 whitespace-nowrap">
          Milestones
        </button>
      </div>

      {/* Cards container */}
      <div className="space-y-3">
        {/* Card 1 - Endorser payout (free endorsement → early cash) */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold tracking-wide text-emerald-700 uppercase">
              Payout received
            </span>
            <span className="text-sm">💸</span>
          </div>
          <div className="mb-1 text-xl font-bold text-emerald-900">
            + $42.80
          </div>
          <p className="text-[11px] text-emerald-800 mb-1">
            From: <span className="font-semibold">Jenny&apos;s Kitchen</span> · Milestone: <span className="font-semibold">10,000 supporters</span>
          </p>
          <p className="text-xs leading-snug text-emerald-800">
            You were one of the earliest endorsers — and now that they&apos;ve hit 10,000 supporters, your free endorsement unlocked this payout long before any IPO or exit.
          </p>
        </div>

        {/* Card 2 - Mark Cuban investment post (text left, image right) */}
        <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1.5">
            <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" 
                alt="Mark Cuban" 
                width={32} 
                height={32} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[13px] font-semibold text-slate-900">Mark Cuban</span>
              <span className="text-[10px] text-slate-500">2h ago · Investment</span>
            </div>
          </div>

          {/* Content - horizontal layout: text left, image right */}
          <div className="flex gap-2.5 mb-1.5">
            <p className="flex-1 text-[13px] leading-snug text-slate-800">
              Just backed <span className="font-semibold">Slice Robotics</span> — AI-powered pizza automation. Huge potential here.
            </p>
            <div className="h-14 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" 
                alt="Slice Robotics" 
                width={64} 
                height={56} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-[10px] text-slate-500 pt-1.5 border-t border-slate-100">
            <span>47 likes</span>
            <span>12 comments</span>
            <span>8 shares</span>
          </div>
        </div>

        {/* Card 3 - Investor payout (Series A → bigger early payout) */}
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold tracking-wide text-emerald-700 uppercase">
              Investor payout
            </span>
            <span className="text-sm">📈</span>
          </div>
          <div className="mb-1 text-lg font-bold text-emerald-900">
            + $620.40
          </div>
          <p className="text-[11px] text-emerald-800 mb-1">
            From: <span className="font-semibold">Nova AI</span> · Series A milestone
          </p>
          <p className="text-xs leading-snug text-emerald-800">
            You invested in the pre-seed round. When Nova AI raised its Series A, early investors received an early cash payout — without waiting for an IPO.
          </p>
        </div>

        {/* Card 4 - Discover + Endorse card (Loop Studio) */}
        <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_1px_3px_rgba(15,23,42,0.08)]">
          {/* Business info with image on right */}
          <div className="flex gap-2.5 mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-semibold text-slate-900 mb-0.5">Loop Studio</h3>
              <p className="text-[10px] text-slate-600 leading-snug mb-1.5">
                Podcast & video studio for independent creators. · San Francisco, CA
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                  Startup
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-200">
                  Endorse-only
                </span>
              </div>
            </div>
            
            {/* Business image on right */}
            <div className="h-16 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop" 
                alt="Loop Studio" 
                width={80} 
                height={64} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Friends backed with real avatars */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center -space-x-2">
              <div className="h-5 w-5 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces" 
                  alt="Jessica" 
                  width={20} 
                  height={20} 
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="h-5 w-5 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&crop=faces" 
                  alt="Friend 2" 
                  width={20} 
                  height={20} 
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="h-5 w-5 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                <Image 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=faces" 
                  alt="Friend 3" 
                  width={20} 
                  height={20} 
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-[10px] text-slate-600 font-medium">
              Jessica + 6 friends have endorsed
            </p>
          </div>

          {/* Free endorsement callout */}
          <p className="text-[10px] text-emerald-700 mb-2 leading-snug">
            Use <span className="font-semibold">1 of your free endorsements</span> — no money required.
          </p>

          {/* Endorse button */}
          <button className="w-full rounded-full bg-emerald-600 px-3 py-1.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors">
            Endorse
          </button>
        </div>
      </div>
    </div>
  );
}

