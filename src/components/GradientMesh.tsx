import React from 'react';

export default function GradientMesh() {
  const blobStyle: React.CSSProperties = {
    position: 'absolute',
    filter: 'blur(80px)',
    opacity: 0.15,
    mixBlendMode: 'soft-light',
    borderRadius: '50%',
  };
  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div className="float-slow" style={{ ...blobStyle, width: 800, height: 800, background: 'var(--ls-primary)', top: -200, left: -200 }} />
      <div className="float-slow" style={{ ...blobStyle, width: 1000, height: 1000, background: 'var(--ls-primary-dark)', bottom: -300, right: -250, animationDelay: '0.8s' }} />
      <div className="float-slow" style={{ ...blobStyle, width: 900, height: 900, background: '#6ee7ff', top: 100, right: -300, animationDelay: '1.6s' }} />
    </div>
  );
}


