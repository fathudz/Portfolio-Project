import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  objectPosition,
  fallbackTitle,
  fallbackSubtitle,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-slate-100 via-slate-200 to-teal-50 flex flex-col items-center justify-center p-6 text-center select-none"
      >
        <div className="w-11 h-11 rounded-2xl bg-white/90 border border-slate-200 flex items-center justify-center text-[#0D8A9E] mb-3 shadow-xs">
          <ImageOff className="w-5 h-5" aria-hidden="true" />
        </div>
        {fallbackTitle && (
          <p className="text-sm font-bold text-[#111827] max-w-xs">{fallbackTitle}</p>
        )}
        {fallbackSubtitle && (
          <p className="text-xs text-slate-500 mt-1 max-w-xs">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={loading}
      style={objectPosition ? { objectPosition } : undefined}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
