import { ReactNode } from 'react';

interface DeviceFrameProps {
  children: ReactNode;
  className?: string;
  aspect?: 'phone' | 'laptop';
}

export default function DeviceFrame({ 
  children, 
  className = '', 
  aspect = 'phone' 
}: DeviceFrameProps) {
  const aspectClass = aspect === 'phone' ? 'aspect-[9/19]' : 'aspect-[16/10]';
  
  return (
    <div className={`${aspectClass} rounded-3xl border-2 border-neutral-200 shadow-md bg-neutral-50 overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Inner bezel padding */}
      <div className="p-3 bg-neutral-100 h-full">
        {/* Inner content area */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

