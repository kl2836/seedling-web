/**
 * Social feed showing friends and pros backing businesses
 * Used in the "See who your friends / the pros back" section
 */

import Image from 'next/image';

export default function SocialProofFeed() {
  return (
    <div className="space-y-3 p-3">
      
      {/* Card 1 — Business milestone */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="flex items-start gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop" 
              alt="TempoRun Club" 
              width={40} 
              height={40} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-neutral-900">TempoRun Club</p>
            <p className="text-[11px] text-neutral-500 mb-1">500 members milestone 🎉</p>
            <p className="text-[12px] text-neutral-700 leading-snug">
              We just hit 500 active members across 12 cities.
            </p>
          </div>
          <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
            <Image 
              src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=200&h=200&fit=crop" 
              alt="TempoRun event" 
              width={80} 
              height={64} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 ml-13">
          <div className="flex -space-x-1.5">
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
          <p className="text-[10px] text-neutral-500">
            <span className="font-medium text-neutral-700">8 of your friends</span> backed this
          </p>
        </div>
      </div>

      {/* Card 2 — Business update */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="flex items-start gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=100&h=100&fit=crop" 
              alt="Little Sprouts" 
              width={40} 
              height={40} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-neutral-900">Little Sprouts Play Studio</p>
            <p className="text-[11px] text-neutral-500 mb-1">New class launching</p>
            <p className="text-[12px] text-neutral-700 leading-snug">
              Weekly parent-toddler music classes every Tuesday at 10am.
            </p>
          </div>
          <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
            <Image 
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200&h=200&fit=crop" 
              alt="Music class" 
              width={80} 
              height={64} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 ml-13">
          <div className="flex -space-x-1.5">
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
          <p className="text-[10px] text-neutral-500">
            <span className="font-medium text-neutral-700">12 of your friends</span> backed this
          </p>
        </div>
      </div>

      {/* Card 3 — Friend endorsement */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces" 
              alt="Sarah Park" 
              width={40} 
              height={40} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Sarah Park</p>
            <p className="text-[11px] text-neutral-500">Endorsed Courtside Collective</p>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-700">
          Smart niche focus. Sports + community is an under-rated category.
        </p>
      </div>

      {/* Card 4 — Pro investor activity */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces" 
              alt="Mark Cuban" 
              width={40} 
              height={40} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Mark Cuban</p>
            <p className="text-[11px] text-neutral-500">
              Invested in Slice Robotics · 2h ago
            </p>
          </div>
        </div>
      </div>

      {/* Card 5 — Another business milestone */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <div className="flex items-start gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
            <Image 
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=100&h=100&fit=crop" 
              alt="CraftHouse Market" 
              width={40} 
              height={40} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-neutral-900">CraftHouse Market</p>
            <p className="text-[11px] text-neutral-500 mb-1">Reached 2,500 monthly shoppers</p>
            <p className="text-[12px] text-neutral-700 leading-snug">
              Thanks to your early support, we expanded into two new neighborhoods.
            </p>
          </div>
          <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
            <Image 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop" 
              alt="CraftHouse Market" 
              width={80} 
              height={64} 
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 ml-13">
          <div className="flex -space-x-1.5">
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
            <div className="h-5 w-5 rounded-full bg-neutral-200 overflow-hidden border border-white">
              <Image 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=50&h=50&fit=crop&crop=faces" 
                alt="Friend" 
                width={20} 
                height={20} 
                className="h-full w-full object-cover"
                unoptimized
              />
            </div>
          </div>
          <p className="text-[10px] text-neutral-500">
            <span className="font-medium text-neutral-700">6 of your friends</span> backed this
          </p>
        </div>
      </div>

    </div>
  );
}

