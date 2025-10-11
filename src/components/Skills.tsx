import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'TypeScript', 'Node', 'PostgreSQL', 'Docker', 'AWS', 'Tailwind', 'Next.js', 'React Native', 'GraphQL', 'Vite', 'CI/CD'];

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'rgba(0,191,255,0.05)' }}>
      <div className="container" style={{ paddingTop: 140, paddingBottom: 140 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="eyebrow">Tecnologías</div>
          <h2 style={{ fontSize: 48, margin: '12px 0' }}>Stack favorito</h2>
        </div>
        <div className="grid-12" style={{ gap: 40 }}>
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, scale: 0.8, rotate: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              exit={{ opacity: 0, scale: 0.8, rotate: -180 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 24, display: 'grid', placeItems: 'center', height: 120 }}
            >
              <span>{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


