'use client';
// Mirrored from: /Users/kevinliou/Documents/seedling-v2/app/profile/mark-cuban/page.tsx on 2025-11-15

import React from 'react';
import Image from 'next/image';

export default function MarkCubanProfileShowcase() {
	// Static snapshot of Mark Cuban profile header and Overview-like content
	return (
		<div className="bg-white">
			{/* Top app bar */}
			<div className="sticky top-0 z-20 bg-white border-b">
				<div className="mx-auto max-w-screen-sm px-4 h-12 flex items-center justify-between">
					<button aria-label="Back" className="h-8 w-8 rounded-full bg-neutral-100" />
					<div className="text-sm font-semibold text-neutral-900">Mark Cuban</div>
					<span className="text-sm text-neutral-500">@mcuban</span>
				</div>
			</div>

			<div className="max-w-screen-sm mx-auto px-4 pt-4 pb-10 space-y-4">
				{/* ProfileHeader surrogate */}
				<section className="bg-white rounded-2xl border border-neutral-200 p-4">
					<div className="flex items-center gap-3">
						<div className="relative w-16 h-16 rounded-full overflow-hidden bg-neutral-200">
							<Image
								src="https://i.pravatar.cc/200?u=markcuban"
								alt="Mark Cuban"
								fill
								className="object-cover"
								sizes="64px"
								unoptimized
							/>
						</div>
						<div className="min-w-0">
							<div className="flex items-center gap-1">
								<h1 className="text-lg font-semibold text-neutral-900 truncate">Mark Cuban</h1>
								<span className="text-blue-500">✓</span>
							</div>
							<p className="text-sm text-neutral-500 truncate">@mcuban · Dallas, TX</p>
							<p className="text-sm text-neutral-600">Investor in AI, sports, and neighborhood businesses.</p>
						</div>
					</div>
					<div className="mt-3 flex items-center gap-4 text-sm text-neutral-600">
						<span className="font-medium text-neutral-900">$1.2M backed</span>
						<span>Following 1,980</span>
						<span className="text-emerald-700 font-medium">Top 1%</span>
					</div>

					{/* Actions */}
					<div className="mt-3 flex gap-3">
						<button className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium">Follow</button>
						<button className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-800 text-sm font-medium">Message</button>
					</div>
				</section>

				{/* Sticky Tabs */}
				<div className="sticky top-12 z-10 bg-white/95 backdrop-blur border-b -mx-4 px-4 py-2">
					<div className="inline-flex rounded-full p-1 bg-neutral-100">
						<button className="px-3 py-1.5 rounded-full text-sm font-medium bg-white shadow-sm">Overview</button>
						<button className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-600">Investments</button>
						<button className="px-3 py-1.5 rounded-full text-sm font-medium text-neutral-600">Endorsements</button>
					</div>
				</div>

				{/* KnownFor + EarlyWins/DNA/SocialHighlights surrogates */}
				<section className="space-y-4">
					<div className="bg-white rounded-2xl border border-neutral-200 p-4">
						<h2 className="text-sm font-semibold text-neutral-900 mb-2">Known for</h2>
						<div className="flex flex-wrap gap-2">
							{['Early in AI Infra', 'Main Street Champion', 'Sports & Media', 'Neighborhood Cafés'].map((t) => (
								<span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">{t}</span>
							))}
						</div>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-4">
						<h2 className="text-sm font-semibold text-neutral-900 mb-2">Early wins</h2>
						<div className="grid grid-cols-3 gap-3">
							{[
								{ name: 'Slice Robotics', seed: 'slice' },
								{ name: 'Urban Garden Co.', seed: 'urbangarden' },
								{ name: 'Cafe Nova', seed: 'cafenova' },
							].map((c) => (
								<div key={c.name} className="rounded-xl border border-neutral-200 p-3 text-center">
									<div className="relative h-10 w-10 mx-auto rounded-lg overflow-hidden bg-neutral-200 mb-2">
										<Image
											src={`https://picsum.photos/seed/${encodeURIComponent(c.seed)}/80/80`}
											alt=""
											fill
											className="object-cover"
											sizes="40px"
											unoptimized
										/>
									</div>
									<p className="text-xs font-medium text-neutral-900 line-clamp-1">{c.name}</p>
									<p className="text-[11px] text-neutral-500">Recent win</p>
								</div>
							))}
						</div>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-4">
						<h2 className="text-sm font-semibold text-neutral-900 mb-2">Investment DNA</h2>
						<div className="flex items-center gap-4">
							<div className="relative h-24 w-24">
								{/* Donut surrogate */}
								<svg viewBox="0 0 36 36" className="h-24 w-24">
									<circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="4" />
									<circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="100 100" strokeDashoffset="64" />
								</svg>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="h-12 w-12 rounded-full bg-white" />
								</div>
							</div>
							<div className="text-sm text-neutral-700 space-y-1">
								<div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-600" /> AI & Tech <span className="ml-auto font-medium">45%</span></div>
								<div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-amber-500" /> Food & Local <span className="ml-auto font-medium">20%</span></div>
								<div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Sustainability <span className="ml-auto font-medium">15%</span></div>
								<div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-violet-500" /> Sports & Media <span className="ml-auto font-medium">20%</span></div>
							</div>
						</div>
					</div>
					<div className="bg-white rounded-2xl border border-neutral-200 p-4">
						<h2 className="text-sm font-semibold text-neutral-900 mb-2">Social highlights</h2>
						<div className="flex items-start gap-3">
							<div className="flex -space-x-2">
								{['alex','emily','mark'].map((u) => (
									<div key={u} className="relative h-8 w-8 rounded-full overflow-hidden border-2 border-white">
										<Image src={`https://i.pravatar.cc/200?u=${u}`} alt="" fill className="object-cover" sizes="32px" unoptimized />
									</div>
								))}
							</div>
							<div className="text-sm text-neutral-700">
								<span className="font-medium">You and Mark</span> co-backed Daily Grind Café
								<div className="text-xs text-neutral-500">Today</div>
							</div>
						</div>
					</div>
				</section>

				{/* Bottom nav bar surrogate for proper scroll height */}
				<div className="h-14" />
			</div>
		</div>
	);
}


