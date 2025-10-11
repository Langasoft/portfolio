import React from 'react';
import { motion } from 'framer-motion';
import { useInViewToggle } from '../hooks/useInViewToggle';

export default function About() {
  const { ref, inView } = useInViewToggle<HTMLDivElement>();
  return (
    <section id="about" className="container" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <div className="grid-12" ref={ref}>
        <div style={{ gridColumn: '1 / span 5' }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: -50, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            style={{ aspectRatio: '4 / 3', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          >
            <img src={process.env.PUBLIC_URL + '/IMG_9207.png'} alt="LangaSoft" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>
        <div style={{ gridColumn: '6 / span 7' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Sobre LangaSoft</div>
          <motion.h2 initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.4 }} style={{ fontSize: 48, lineHeight: 1.2, margin: 0, marginBottom: 24 }}>Desarrollo a medida, enfoque en resultados</motion.h2>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 0.85, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: 0.05 }} style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>Ayudo a empresas y emprendedores a transformar ideas en productos digitales de alto impacto.</motion.p>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 0.85, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: 0.15 }} style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>Trabajo con tecnologías modernas para entregar experiencias rápidas, accesibles y mantenibles.</motion.p>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: 0.25 }} style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '⚡', text: 'Rendimiento y optimización' },
              { icon: '🎯', text: 'Enfoque en objetivos de negocio' },
              { icon: '🔒', text: 'Buenas prácticas y seguridad' },
              { icon: '🤝', text: 'Colaboración cercana y transparente' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '16px 0' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', color: 'var(--ls-primary)', display: 'grid', placeItems: 'center', transition: 'transform 500ms' }}>
                  <span>{item.icon}</span>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


