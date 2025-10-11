import React from 'react';
import { motion } from 'framer-motion';
import { useInViewToggle } from '../hooks/useInViewToggle';

export default function About() {
  const { ref, inView } = useInViewToggle<HTMLDivElement>();
  return (
    <section id="about" className="container" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <div className="grid-12" ref={ref}>
        {/* Columna Izquierda: Foto 4:3 con recorte */}
        <div style={{ gridColumn: '1 / span 5' }}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: -50, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{ aspectRatio: '4 / 3', borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          >
            <img src={process.env.PUBLIC_URL + '/IMG_1498.jpeg'} alt="Foto de perfil" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%' }} />
          </motion.div>
        </div>

        {/* Columna Derecha: Sobre mí + bloque LangaSoft */}
        <div style={{ gridColumn: '6 / span 7' }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Sobre mí</div>
          <motion.h2 initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.4 }} style={{ fontSize: 48, lineHeight: 1.2, margin: 0, marginBottom: 8 }}>
            Carlos Nuñez
          </motion.h2>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 0.9, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3 }} style={{ marginTop: 0, marginBottom: 24 }}>
            Fundador de <span className="text-gradient">LangaSoft</span> y desarrollador full‑stack
          </motion.p>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 0.85, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: 0.05 }} style={{ fontSize: 18, lineHeight: 1.7, marginBottom: 20 }}>
            Construyo productos web y móviles con foco en rendimiento, accesibilidad y experiencia de usuario, desde la idea hasta el despliegue.
          </motion.p>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.3, delay: 0.15 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {/* Datos personales destacados */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 0' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', color: 'var(--ls-primary)', display: 'grid', placeItems: 'center' }}>🌍</div>
              <span>Idiomas: Español nativo · Inglés Avanzado</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 0' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', color: 'var(--ls-primary)', display: 'grid', placeItems: 'center' }}>💻</div>
              <span>Stack: React · TypeScript · Node · MySQL · AWS · Tailwind · Next.js · React Native · Vite · Python · Git · AI</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 0' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', color: 'var(--ls-primary)', display: 'grid', placeItems: 'center' }}>📦</div>
              <span>Experiencia: RN/Expo (móvil), Laravel + React/Inertia (web), salud/portuario/pymes</span>
            </div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 0' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', color: 'var(--ls-primary)', display: 'grid', placeItems: 'center' }}>🔗</div>
              <span>
                Links: <a href="https://linkedin.com/in/c2vai" target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>LinkedIn</a> · <a href="https://github.com/c2vai4545" target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>GitHub</a> · <a href="https://github.com/Langasoft" target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>LangaSoft</a> · <a href="https://www.fiverr.com/c2vai4545" target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>Fiverr</a> · <a href={process.env.PUBLIC_URL + '/CV-EN-DOCS-OCT25.pdf'} target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>Ver CV</a>
              </span>
            </div>
          </motion.div>

          {/* Chips de tecnologías clave */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ duration: 0.3, delay: 0.25 }} style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {['React', 'TypeScript', 'Node', 'MySQL', 'AWS', 'Next.js', 'React Native', 'Python', 'Git', 'AI'].map((tag) => (
              <span key={tag} style={{ padding: '6px 12px', borderRadius: 999, background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.08)', fontSize: 14 }}>{tag}</span>
            ))}
          </motion.div>

          {/* Bloque empresa */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.3 }} style={{ marginTop: 40, padding: 20, borderRadius: 16, border: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Mi empresa: LangaSoft</div>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>
              En LangaSoft impulsamos negocios con software a medida: aplicaciones web/móviles, APIs y automatizaciones. Valoramos la calidad, la transparencia y la entrega continua.
            </p>
          </motion.div>

          {/* Timeline breve */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.4, delay: 0.35 }} style={{ marginTop: 24, display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12 }}>
              <span style={{ opacity: 0.6 }}>Actualidad</span>
              <span>
                Fundador y desarrollador full‑stack en LangaSoft · Proyectos freelance y consultoría para pymes/startups en <a href="https://www.fiverr.com/c2vai4545" target="_blank" rel="noreferrer" style={{ color: 'var(--ls-primary)' }}>Fiverr</a> y otras plataformas
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


