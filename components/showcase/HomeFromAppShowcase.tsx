'use client';
// Mirrored from: /Users/kevinliou/Documents/seedling-v2/app/home/page.tsx on 2025-11-15

import React from 'react';

// Presentational snapshot of the app Home screen.
// All data below is static to match the visual layout without hooks or routing.

export default function HomeFromAppShowcase() {
	// Static values used to mirror the UI
	const portfolio = {
		valueText: '$12,450',
		changeText: '+2.3% Today · +8.1% 30D',
	};

	const endorsements = {
		tierScore: '78',
		tierLabel: 'Silver Tier',
		tierSub: 'Top 88% of friends',
		chips: ['🎯 Hit rate 67%', '📈 Avg lift +24%', '🔥 4-week streak'],
		progressPct: 'w-2/3',
	};

	const activity = [
		{
			avatar: '',
			title: 'Alex backed Daily Grind Café',
			sub: 'Great momentum this week',
			time: '2h ago',
		},
		{
			avatar: '',
			title: 'Emily backed Slice Robotics',
			sub: 'AI in kitchens is trending',
			time: '5h ago',
		},
	];

	const opportunities = [
		{ name: 'Daily Grind Café', city: 'Austin', category: 'Food & Bev', image: '' },
		{ name: 'Jenny’s Kitchen', city: 'Seattle', category: 'Food & Bev', image: '' },
	];

	return (
		<div className="flex-1 bg-neutral-50">
			{/* Full-bleed portfolio header (mirrors PortfolioHeader) */}
			<section className="px-6 pt-10 pb-6">
				<div className="text-[44px] font-bold text-slate-900">{portfolio.valueText}</div>
				<div className="mt-1 text-sm text-slate-500">{portfolio.changeText}</div>
				<div className="mt-4 flex gap-4 text-sm text-slate-500">
					<button className="text-emerald-600 font-semibold">Today</button>
					<button>1W</button>
					<button>1M</button>
					<button>1Y</button>
					<button>All</button>
				</div>
				{/* Snapshot replacement for PortfolioLineGraph */}
				<div className="mt-6 h-24 w-full rounded-xl bg-neutral-200" />
			</section>

			<div className="px-4 py-4 space-y-4">
				{/* EndorsementsCard */}
				<section className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md space-y-4">
					<div className="flex items-center justify-between">
						<span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Endorsements</span>
						<button className="text-xs font-medium text-emerald-700">View details →</button>
					</div>
					<div className="flex items-center gap-4">
						<div className="relative h-14 w-14 flex items-center justify-center rounded-full bg-emerald-100">
							<span className="absolute inset-0 rounded-full bg-emerald-300/40 blur-xl" />
							<div className="text-2xl font-semibold text-emerald-700">{endorsements.tierScore}</div>
						</div>
						<div>
							<p className="text-sm font-semibold text-neutral-900">{endorsements.tierLabel}</p>
							<p className="text-xs text-neutral-600">{endorsements.tierSub}</p>
						</div>
					</div>
					<div className="flex flex-wrap gap-2 text-xs text-neutral-700">
						{endorsements.chips.map((chip) => (
							<span key={chip} className="rounded-full bg-neutral-100 px-3 py-1">
								{chip}
							</span>
						))}
					</div>
					<div className="space-y-1">
						<p className="text-xs text-neutral-500">Progress to Gold</p>
						<div className="h-2 rounded-full bg-neutral-200">
							<div className={`h-full rounded-full bg-emerald-600 ${endorsements.progressPct}`} />
						</div>
					</div>
				</section>

				{/* ActivityFeed (static snapshot of two cards) */}
				<section className="space-y-3">
					<h3 className="text-base font-semibold text-neutral-900">Activity</h3>
					<div className="space-y-2">
						{activity.map((it, i) => (
							<div key={i} className="bg-white rounded-2xl p-4 shadow-sm flex gap-3 items-start">
								<div className="h-10 w-10 rounded-full bg-neutral-200" />
								<div className="min-w-0 flex-1">
									<p className="text-sm font-semibold text-neutral-900">{it.title}</p>
									<p className="text-sm text-neutral-600 line-clamp-1">{it.sub}</p>
									<p className="text-xs text-neutral-500 mt-1">{it.time}</p>
								</div>
							</div>
						))}
					</div>
					<button className="text-emerald-700 font-medium text-sm">Go to full feed →</button>
				</section>

				{/* OpportunitiesList (static snapshot of two items) */}
				<section className="space-y-3">
					<h3 className="text-base font-semibold text-neutral-900">Opportunities</h3>
					<div className="flex gap-2 text-sm">
						<button className="flex-1 rounded-full py-2 font-medium bg-emerald-600 text-white">Investable</button>
						<button className="flex-1 rounded-full py-2 font-medium bg-neutral-100 text-neutral-700">Endorsed</button>
					</div>
					<div className="space-y-3">
						{opportunities.map((b, i) => (
							<div key={i} className="bg-white rounded-2xl p-4 flex gap-3 shadow-md">
								<div className="h-16 w-16 rounded-xl bg-neutral-200" />
								<div className="min-w-0 flex-1">
									<p className="text-sm font-semibold text-neutral-900 line-clamp-1">{b.name}</p>
									<p className="text-xs text-neutral-600 line-clamp-1">
										{b.city} · {b.category}
									</p>
									<div className="flex -space-x-2 mt-2">
										<div className="h-6 w-6 rounded-full border-2 border-white bg-neutral-200" />
										<div className="h-6 w-6 rounded-full border-2 border-white bg-neutral-200" />
										<div className="h-6 w-6 rounded-full border-2 border-white bg-neutral-200" />
									</div>
								</div>
							</div>
						))}
					</div>
					<button className="text-emerald-700 text-sm font-medium">See all opportunities →</button>
				</section>
			</div>
		</div>
	);
}
