'use client';
// Mirrored from: /Users/kevinliou/Documents/seedling-v2/app/feed/page.tsx on 2025-11-15

import React from 'react';
import Image from 'next/image';

export default function HeroFeedFromApp() {
	const filters = ['All', 'Investments', 'Endorsements', 'Milestones', 'Following'];

	const basePosts = [
		{
			type: 'investment',
			avatar: 'https://i.pravatar.cc/200?u=markcuban',
			name: 'Mark Cuban',
			verified: true,
			timestamp: '2h',
			content:
				'Just backed Slice Robotics 🚀 — "AI for pizza making!" This is exactly the kind of innovation that will transform the food industry.',
			image: 'https://picsum.photos/seed/slice-robotics/800/600',
			likes: 47,
			comments: 12,
			shares: 8,
		},
		{
			type: 'milestone',
			avatar: 'https://i.pravatar.cc/200?u=ai',
			name: 'AI Summary',
			verified: false,
			timestamp: '3h',
			content:
				"Milestone Reached 🎉 Jenny's Kitchen hit 500 backers! The community support has been incredible. You and 3 friends both supported this.",
			image: undefined,
			likes: 0,
			comments: 0,
			shares: 0,
			action: (
				<div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
					<p className="text-sm text-neutral-700">Jenny&apos;s Kitchen hit 500 backers</p>
				</div>
			),
		},
		{
			type: 'endorsement',
			avatar: 'https://i.pravatar.cc/200?u=dailygrind',
			name: 'Daily Grind Café',
			verified: false,
			timestamp: '',
			content: '“Loyal community + strong leadership — easy endorse.”',
			image: 'https://picsum.photos/seed/daily-grind/800/600',
			likes: 23,
			comments: 4,
			shares: 2,
		},
	];

	// Extend feed length so there is more to scroll through in the phone demo.
	// We repeat with minor timestamp tweaks to simulate a longer list.
	const posts = Array.from({ length: 3 })
		.flatMap((_, i) =>
			basePosts.map((p, idx) => ({
				...p,
				timestamp: p.timestamp ? `${p.timestamp}+${i + 1}` : '',
				key: `${idx}-${i}`,
			}))
		);

	return (
		<div className="bg-white">
			<div className="px-4 pt-0 pb-6 space-y-4">
				{/* Sticky filter bar */}
				<div className="sticky top-0 z-30 bg-white border-b border-neutral-200 pb-2">
					<div className="flex gap-2 overflow-x-auto scrollbar-hide">
						{filters.map((filter, i) => (
							<button
								key={filter}
								type="button"
								className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap min-h-[44px] flex items-center ${
									i === 0 ? 'bg-emerald-600 text-white' : 'bg-white text-neutral-600 border border-neutral-200'
								}`}
							>
								{filter}
							</button>
						))}
					</div>
				</div>

				<div className="space-y-4">
					{posts.map((p, idx) => (
						<article key={p.key || idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
							<div className="p-4 space-y-3">
								<div className="flex items-center gap-3">
									<div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
										{p.avatar ? (
											<Image src={p.avatar} alt="" fill className="object-cover" sizes="40px" unoptimized />
										) : (
											<div className="w-full h-full bg-neutral-200" />
										)}
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-1">
											<h4 className="text-base font-medium text-neutral-900 truncate">{p.name}</h4>
											{p.verified && <span className="text-blue-500 text-sm">✓</span>}
										</div>
										<p className="text-sm text-neutral-500">{p.timestamp}</p>
									</div>
								</div>

								<p className="text-base text-neutral-900 line-clamp-2">{p.content}</p>

								{typeof p.image === 'string' && (
									<div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
										<Image src={p.image} alt="" fill className="object-cover" sizes="100vw" unoptimized />
									</div>
								)}

								{p.action && <div className="space-y-2">{p.action}</div>}

								<div className="flex items-center gap-4 pt-2 border-t border-neutral-100 text-sm text-neutral-500">
									<span>{p.likes} likes</span>
									<span>{p.comments} comments</span>
									{p.shares > 0 && <span>{p.shares} shares</span>}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}


