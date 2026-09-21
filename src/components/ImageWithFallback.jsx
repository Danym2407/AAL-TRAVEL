import { useState } from 'react';

export default function ImageWithFallback({ src, alt, className = '', fallbackIcon, iconClassName = 'text-4xl' }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary to-accent text-gold ${className}`}>
        <i className={`${fallbackIcon} ${iconClassName}`} aria-hidden="true"></i>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}
