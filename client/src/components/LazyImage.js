import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} style={{ position: 'relative' }}>
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
          {!isLoaded && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: '#f0ede8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                border: '2px solid #ded9cd',
                borderTopColor: '#f97316',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }} />
            </div>
          )}
        </>
      )}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
