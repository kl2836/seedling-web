'use client';

import { useState, useEffect } from 'react';
import { Users, Star, HandCoins, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

interface FeedRowProps {
  type: 'endorsed' | 'invested' | 'milestone' | 'payout' | 'cta';
  name: string;
  action: string;
  timeAgo: string;
  business: string;
  count?: number;
  showButtons?: boolean;
}

export default function FeedRow({ 
  type, 
  name, 
  action, 
  timeAgo, 
  business, 
  count = 0,
  showButtons = false 
}: FeedRowProps) {
  const [endorsementCount, setEndorsementCount] = useState(count);

  useEffect(() => {
    if (type === 'cta' && showButtons) {
      const interval = setInterval(() => {
        setEndorsementCount(prev => prev + 1);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [type, showButtons]);

  const getIcon = () => {
    switch (type) {
      case 'endorsed':
        return <Star className="w-4 h-4 text-[#16a34a]" />;
      case 'invested':
        return <HandCoins className="w-4 h-4 text-[#16a34a]" />;
      case 'milestone':
        return <CheckCircle className="w-4 h-4 text-[#16a34a]" />;
      case 'payout':
        return <Sparkles className="w-4 h-4 text-[#16a34a]" />;
      default:
        return <Users className="w-4 h-4 text-[#16a34a]" />;
    }
  };

  const getBadge = () => {
    if (type === 'endorsed' && count > 0) {
      return (
        <span className="text-xs font-semibold text-[#16a34a] bg-emerald-50 px-2 py-0.5 rounded-full">
          +{count}
        </span>
      );
    }
    if (type === 'milestone') {
      return (
        <CheckCircle className="w-4 h-4 text-[#16a34a]" />
      );
    }
    if (type === 'invested') {
      return (
        <span className="text-xs font-medium text-[#16a34a] border border-[#16a34a] px-2 py-0.5 rounded">
          Invested
        </span>
      );
    }
    return null;
  };

  const bgClass = type === 'milestone' ? 'bg-emerald-50/60' : 'bg-white/90';
  const isCTA = type === 'cta';

  if (isCTA && showButtons) {
    return (
      <div className={`rounded-2xl border border-neutral-200 ${bgClass} shadow-sm p-3.5 mb-3.5`}>
        <div className="flex items-start gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16a34a] to-emerald-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-semibold">{name[0]}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-sm font-semibold text-neutral-900">{business}</span>
            </div>
            <p className="text-xs text-neutral-600 mb-2">Pre-seed • $50K goal</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 transition-colors">
                Endorse
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 text-xs font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-1 transition-colors ml-2">
                Invest
              </button>
            </div>
            <div className="mt-2 flex items-center gap-1 text-xs text-neutral-500">
              <Users className="w-3 h-3" />
              <span>{endorsementCount} endorsements</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-neutral-200 ${bgClass} shadow-sm p-3.5 mb-3.5`}>
      <div className="flex items-start gap-2.5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16a34a] to-emerald-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-semibold">{name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-neutral-900">{name}</span>
              {getIcon()}
              <span className="text-xs text-neutral-500">{action}</span>
            </div>
            {getBadge()}
          </div>
          <p className="text-xs text-neutral-600 mb-1">{business}</p>
          <p className="text-xs text-neutral-400">{timeAgo}</p>
        </div>
      </div>
    </div>
  );
}

