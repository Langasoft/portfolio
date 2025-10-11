import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const unsub = scrollY.on('change', (v) => setVisible(v < 40));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.div
      aria-hidden
      className="bounce-y"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.6 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
    >
      <div style={{ width: 24, height: 40, border: '2px solid var(--ls-neutral-100)', borderRadius: 14, position: 'relative' }}>
        <div style={{ width: 3, height: 8, background: 'var(--ls-neutral-100)', position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', borderRadius: 2 }} />
      </div>
    </motion.div>
  );
}


