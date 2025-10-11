import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 3,
        width,
        background: 'var(--ls-primary)',
        zIndex: 60,
      }}
    />
  );
}


