'use client';
// Mirrored from: /Users/kevinliou/Documents/seedling-v2/app/home/page.tsx on 2025-11-15

import React from 'react';

export default function HeroHomeFromApp() {
	// Static values used to mirror the UI
	const portfolio = {
		valueText: '$12,450',
		changeText: '+2.3% Today · +8.1% 30D',
	};

	const endorser = {
		score: 78,
		totalEndorsements: 2950,
		percentileLabel: 'Top 12% of friends',
		companies: [
			{
				id: 'daily-grind',
				name: 'Daily Grind Café',
				location: 'San Francisco · Café',
				tagLabel: 'Trending',
				total: 1240,
				deltaLabel: '+24 this week',
				positive: true,
			},
			{
				id: 'slice-robotics',
				name: 'Slice Robotics',
				location: 'Palo Alto · Robotics',
				tagLabel: 'Hot this week',
				total: 980,
				deltaLabel: '+12 this week',
				positive: true,
			},
			{
				id: 'green-thumb',
				name: 'Green Thumb Nursery',
				location: 'Berkeley · Sustainability',
				tagLabel: 'New',
				total: 730,
				deltaLabel: '-5 this week',
				positive: false,
			},
		],
	};

	return (
		<div className="flex-1 bg-neutral-50">
			<section className="px-6 pt-10 pb-6">
				<div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">PORTFOLIO VALUE</div>
				<div className="mt-1 text-sm text-slate-500">Your investment performance today</div>
				<div className="mt-4 text-[44px] font-bold text-slate-900">{portfolio.valueText}</div>
				<div className="mt-2 text-sm text-slate-600">{portfolio.changeText}</div>
				<div className="mt-4 flex gap-4 text-sm text-slate-500">
					<button className="text-emerald-600 font-semibold">Today</button>
					<button>1W</button>
					<button>1M</button>
					<button>1Y</button>
					<button>All</button>
				</div>
				{/* Green sparkline graph (SVG) */}
				<div className="mt-6 w-full rounded-xl bg-white border border-emerald-100 p-3">
					<svg viewBox="0 0 300 96" className="w-full h-24">
						<polyline
							fill="none"
							stroke="rgb(16 185 129)" /* emerald-500 */
							strokeWidth="3"
							points="0,70 30,70 60,68 90,60 120,62 150,55 180,58 210,56 240,50 270,52 300,48"
						/>
						<circle cx="300" cy="48" r="4" fill="rgb(16 185 129)" />
					</svg>
				</div>
			</section>

			{/* Endorsements header */}
			<div className="px-4">
				<div className="flex items-center justify-between">
					<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">ENDORSEMENTS</span>
					<button className="text-sm font-medium text-emerald-600">View all →</button>
				</div>
			</div>

			{/* Endorser summary + company rows */}
			<section className="px-4 mt-3 pb-6">
				<section className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
					<div className="flex items-center gap-3">
						<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1">
							<span className="text-base font-semibold">{endorser.score}</span>
							<span className="text-[11px] font-medium">Endorser score</span>
						</div>
						<div className="text-[12px] text-slate-600">
							{endorser.totalEndorsements.toLocaleString()} total endorsements · {endorser.percentileLabel}
						</div>
					</div>

					<div className="mt-3 space-y-2">
						{endorser.companies.map((row) => (
							<button
								key={row.id}
								type="button"
								className="w-full rounded-xl bg-white px-4 py-3 text-left shadow-sm border border-slate-100 hover:shadow-md transition-shadow active:opacity-90"
							>
								<div className="flex items-center">
									<div className="min-w-0 flex-1 pr-3">
										<div className="text-sm font-semibold text-slate-900 truncate">{row.name}</div>
										<div className="text-[11px] text-slate-500 truncate">{row.location}</div>
										{row.tagLabel && (
											<div className="mt-1">
												<span className="inline-flex rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2 py-[2px] text-[10px]">
													{row.tagLabel}
												</span>
											</div>
										)}
									</div>
									<div className="ml-auto flex-shrink-0 w-24">
										<div className="h-8 rounded bg-neutral-50 border border-neutral-100 overflow-hidden px-1 py-1">
											<svg viewBox="0 0 100 24" className="w-full h-full">
												<polyline
													fill="none"
													stroke={row.positive ? 'rgb(16 185 129)' : 'rgb(244 63 94)'}
													strokeWidth="2"
													points={row.positive ? '0,18 12,18 24,16 36,12 48,13 60,10 72,12 84,10 96,8' : '0,8 12,10 24,12 36,11 48,13 60,15 72,16 84,18 96,20'}
												/>
											</svg>
										</div>
										<div className={`mt-1 text-[11px] font-semibold text-right ${row.positive ? 'text-emerald-700' : 'text-rose-700'}`}>
											{row.deltaLabel}
										</div>
										<div className="text-[10px] text-slate-500 text-right">
											{row.total.toLocaleString()} total
										</div>
									</div>
								</div>
							</button>
						))}
					</div>
				</section>
			</section>
		</div>
	);
}


