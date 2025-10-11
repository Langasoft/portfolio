import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Web Apps', desc: 'SPA/SSR rápidas, accesibles y escalables.', icon: '🕸️' },
  { title: 'Móvil', desc: 'Experiencias iOS/Android con alta calidad.', icon: '📱' },
  { title: 'APIs & Backend', desc: 'Servicios robustos, seguros y observables.', icon: '🧩' },
];

export default function Services() {
  return (
    <section id="services" style={{ background: '#f7f8fb' }}>
      <div className="container" style={{ paddingTop: 180, paddingBottom: 180 }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="eyebrow">Servicios</div>
          <h2 style={{ fontSize: 56, margin: '12px 0' }}>¿Qué puedo hacer por ti?</h2>
          <p style={{ maxWidth: 700, margin: '0 auto', opacity: 0.7, fontSize: 20 }}>Soluciones de software extremo a extremo con foco en valor.</p>
        </div>

        <div className="grid-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ gridColumn: 'span 4', background: '#fff', padding: 40, borderRadius: 20, border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
            >
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,191,255,0.1)', display: 'grid', placeItems: 'center', color: 'var(--ls-primary)', marginBottom: 32, fontSize: 28 }}>
                <span>{s.icon}</span>
              </div>
              <h3 style={{ fontSize: 24, marginTop: 0 }}>{s.title}</h3>
              <p style={{ opacity: 0.75, lineHeight: 1.6 }}>{s.desc}</p>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, color: 'var(--ls-primary)', fontWeight: 600, fontSize: 14 }}>
                Ver más <span style={{ transform: 'translateX(0)', transition: 'transform 300ms' }}>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


