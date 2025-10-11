import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: 'white' }}>
      <div className="container" style={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={process.env.PUBLIC_URL + '/IMG_9207.png'} alt="LangaSoft" style={{ width: 140, opacity: 0.6 }} />
        <small style={{ opacity: 0.5 }}>© {new Date().getFullYear()} LangaSoft</small>
      </div>
    </footer>
  );
}


