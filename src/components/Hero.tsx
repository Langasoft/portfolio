import React from 'react';
import { motion } from 'framer-motion';
import GradientMesh from './GradientMesh';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'grid', placeItems: 'center', paddingTop: 80 }}>
      <GradientMesh />
      <div className="container grid-12" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="cols-8-centered" style={{ textAlign: 'center' }}>
          <motion.div className="eyebrow" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 0.7, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            LangaSoft
          </motion.div>
          <motion.h1 className="text-gradient" style={{ margin: '16px 0 0 0', fontWeight: 700, lineHeight: 1.1, fontSize: '72px' }} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            Software a medida que impulsa tu negocio
          </motion.h1>
          <motion.p style={{ marginTop: 24, fontSize: 20, opacity: 0.8, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            Creamos soluciones digitales robustas, escalables y hermosas. Web, móvil y cloud con foco en rendimiento y UX.
          </motion.p>

          <motion.div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <a href="#projects" style={{ padding: '16px 32px', borderRadius: 12, background: 'var(--ls-primary)', color: '#fff', fontWeight: 600, transition: 'transform 250ms var(--ls-ease-standard), box-shadow 250ms var(--ls-ease-standard)' }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)')}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'scale(1.05)'; setTimeout(() => (e.currentTarget.style.transform = 'scale(1)'), 250); }}
            >
              Ver proyectos
            </a>
            <a href="#contact" style={{ padding: '16px 32px', borderRadius: 12, background: 'transparent', border: '2px solid var(--ls-primary)', color: 'var(--ls-primary)', fontWeight: 600, transition: 'background 250ms var(--ls-ease-standard)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,191,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Contáctame
            </a>
          </motion.div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}


