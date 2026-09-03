import { useEffect, useRef, useState } from 'react';

interface Props {
  src: string;
  type: string;
  className?: string;
}

function LazyVideo({ src, type, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <video ref={videoRef} className={className} autoPlay muted loop playsInline preload="none">
      {shouldLoad && <source src={src} type={type} />}
      Your browser does not support the video tag.
    </video>
  );
}

export default LazyVideo;
