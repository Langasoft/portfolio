import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const title = '¿Trabajemos juntos?';
  const words = title.split(' ');
  return (
    <section id="contact" style={{ background: 'var(--ls-neutral-900)', color: 'white' }}>
      <div className="container" style={{ paddingTop: 180, paddingBottom: 180, textAlign: 'center', maxWidth: 600 }}>
        <motion.h2 style={{ fontSize: 64, lineHeight: 1.1, margin: '0 0 24px 0' }}>
          {words.map((w, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ display: 'inline-block', marginRight: 8 }}>{w}</motion.span>
          ))}
        </motion.h2>
        <p style={{ fontSize: 20, opacity: 0.8, marginBottom: 48 }}>Cuéntame sobre tu proyecto y preparemos una propuesta.</p>
        <a href="mailto:contacto@langasoft.com" style={{ display: 'inline-block', padding: '20px 48px', background: '#fff', color: 'var(--ls-neutral-900)', borderRadius: 14, fontSize: 18, fontWeight: 600, transition: 'transform 300ms, box-shadow 300ms' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 0 8px rgba(255,255,255,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Enviar Email
        </a>

        <div style={{ height: 1, background: 'rgba(255,255,255,0.2)', margin: '48px 0' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, opacity: 0.8, fontSize: 16 }}>
          <div>Email: contacto@langasoft.com</div>
          <div>Ubicación: Remoto / LATAM-ES</div>
        </div>
      </div>
    </section>
  );
}


