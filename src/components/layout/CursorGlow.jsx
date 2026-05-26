import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/** Subtle cursor-following glow effect (desktop only) */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[90] w-96 h-96 rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      style={{
        left: position.x,
        top: position.y,
        background:
          'radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)',
      }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
