import React from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

function MenuIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const navLinks = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#services', label: 'Servicios' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Tecnologías' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [atTop, setAtTop] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on('change', (v) => setAtTop(v < 50));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: atTop ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0.8)',
        backdropFilter: atTop ? 'blur(0px)' : 'blur(10px)',
        paddingTop: atTop ? 24 : 16,
        paddingBottom: atTop ? 24 : 16,
        boxShadow: atTop ? 'none' : '0 8px 30px rgba(0,0,0,0.08)',
      }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      <div className="container">
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img className="nav-logo" src={process.env.PUBLIC_URL + '/IMG_9207.png'} alt="LangaSoft" style={{ height: 80, width: 'auto' }} />
          </a>
          <ul className="nav-links desktop-only"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 40,
              listStyle: 'none',
              margin: 0,
              padding: 0,
              fontWeight: 500,
              letterSpacing: 0.5,
              fontSize: 16,
              flexWrap: 'wrap',
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ position: 'relative' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget.querySelector('.underline');
                    if (el) (el as HTMLElement).style.transform = 'scaleX(1)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget.querySelector('.underline');
                    if (el) (el as HTMLElement).style.transform = 'scaleX(0)';
                  }}
                >
                  {link.label}
                  <span
                    className="underline"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -6,
                      height: 2,
                      background: 'var(--ls-primary)',
                      transformOrigin: 'center',
                      transform: 'scaleX(0)',
                      transition: 'transform 300ms ease-out',
                      display: 'block',
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>
          <button aria-label="Abrir menú" className="mobile-only" onClick={() => setOpen((v) => !v)} style={{ background: 'transparent', border: 'none', color: 'var(--ls-neutral-900)' }}>
            {open ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mobile-only"
              style={{ overflow: 'hidden' }}
            >
              <ul style={{ listStyle: 'none', margin: 12, padding: 0, display: 'grid', gap: 12 }}>
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '12px 8px' }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}


