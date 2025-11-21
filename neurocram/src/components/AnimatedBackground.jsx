import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedBackground = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  useEffect(() => {
    const updateMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMouse);
    return () => window.removeEventListener('mousemove', updateMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background 1: Reactive Particle Field (stars twinkling on mouse move) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-neuro-dark via-black to-neuro-gray"
        style={{
          backgroundPosition: `${springX.get()}px ${springY.get()}px`,
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neuro-neon rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      {/* Background 2: Neon Grid Scan (horizontal lines sweeping up) */}
      <div className="absolute inset-0 bg-black opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-neuro-neon"
            style={{ top: `${(i / 20) * 100}%` }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: (i / 10) * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;