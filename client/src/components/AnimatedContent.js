import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  config = { tension: 50, friction: 25 },
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const axis = direction === 'horizontal' ? 'x' : 'y';
  const offset = reverse ? -distance : distance;

  const initial = { [axis]: offset };
  const animate = { [axis]: 0 };

  if (animateOpacity) {
    initial.opacity = initialOpacity;
    animate.opacity = 1;
  }

  if (scale !== 1) {
    initial.scale = scale;
    animate.scale = 1;
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{ type: 'spring', ...config, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
