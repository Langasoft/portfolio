import React from 'react';
import { motion } from 'framer-motion';

type CardSize = 'lg' | 'md' | 'sm';

type Project = { id: number; title: string; desc: string; size: CardSize; category: string; img?: string; href?: string };

const clientProjects: Project[] = [
  { id: 1, title: 'E-commerce Headless', desc: 'Next.js + Stripe', size: 'lg', category: 'Web' },
  { id: 2, title: 'Admin Dashboard', desc: 'React + Charts', size: 'md', category: 'UI' },
  { id: 3, title: 'Mobile Fitness', desc: 'React Native', size: 'sm', category: 'Mobile' },
  { id: 4, title: 'API Billing', desc: 'Node + Postgres', size: 'md', category: 'Backend' },
];

const personalProjects: Project[] = [
  { id: 101, title: 'Portfolio LangaSoft', desc: 'React + Framer Motion + GitHub Pages', size: 'md', category: 'Personal', href: 'https://langasoft.github.io/portfolio' },
  { id: 102, title: 'UI Kit Components', desc: 'React + ShadCN + Storybook', size: 'sm', category: 'UI' },
  { id: 103, title: 'CLI Dev Tools', desc: 'Node.js utilidades de automatización', size: 'sm', category: 'Open Source' },
  { id: 104, title: 'App Notas Offline', desc: 'PWA, IndexedDB, Vite', size: 'md', category: 'PWA' },
];

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ paddingTop: 160, paddingBottom: 160 }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="eyebrow">Proyectos</div>
        <h2 style={{ fontSize: 56, margin: '12px 0' }}>Trabajo reciente</h2>
      </div>
      <div className="grid-12 projects-grid" style={{ gap: 24 }}>
        {clientProjects.map((item, i) => {
          return (
            <motion.a
              key={item.id}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`card size-${item.size}`}
              style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                display: 'block',
                background: '#0b1220',
                color: '#fff',
                textDecoration: 'none',
                transform: 'translateY(0)',
                transition: 'transform 400ms ease-out',
              }}
            >
              <img alt="" src={item.img || process.env.PUBLIC_URL + '/logo192.png'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))', opacity: 0.85 }} />
              <div style={{ position: 'absolute', left: 40, right: 40, bottom: 40 }}>
                <div style={{ fontSize: 12, textTransform: 'uppercase', opacity: 0.9 }}>{item.category}</div>
                <div style={{ fontSize: 32, fontWeight: 700 }}>{item.title}</div>
                <div style={{ opacity: 0.85 }}>{item.desc}</div>
              </div>
            </motion.a>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: 80, marginBottom: 40 }}>
        <h3 style={{ fontSize: 40, margin: 0 }}>Proyectos personales</h3>
        <p style={{ opacity: 0.7, marginTop: 8 }}>Otras iniciativas y herramientas desarrolladas por mí</p>
      </div>

      <div className="grid-12 projects-grid" style={{ gap: 24 }}>
        {personalProjects.map((item, i) => (
          <motion.a
            key={item.id}
            href={item.href || '#'}
            target={item.href ? '_blank' : undefined}
            rel={item.href ? 'noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`card size-${item.size}`}
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'block',
              background: '#0b1220',
              color: '#fff',
              textDecoration: 'none',
              transform: 'translateY(0)',
              transition: 'transform 400ms ease-out',
            }}
          >
            <img alt="" src={item.img || process.env.PUBLIC_URL + '/logo192.png'} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))', opacity: 0.85 }} />
            <div style={{ position: 'absolute', left: 40, right: 40, bottom: 40 }}>
              <div style={{ fontSize: 12, textTransform: 'uppercase', opacity: 0.9 }}>{item.category}</div>
              <div style={{ fontSize: 32, fontWeight: 700 }}>{item.title}</div>
              <div style={{ opacity: 0.85 }}>{item.desc}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}


