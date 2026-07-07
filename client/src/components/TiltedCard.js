import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltedCard = ({ children, className = '', scale = 1.05, rotateAmplitude = 14 }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), {
    stiffness: 150,
    damping: 15,
  });
  const scaleVal = useSpring(1, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
  };

  const handleMouseEnter = () => scaleVal.set(scale);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scaleVal.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        rotateX,
        rotateY,
        scale: scaleVal,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default TiltedCard;
