import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Aurora.css';

const Aurora = () => {
  return (
    <div className="aurora" aria-hidden="true">
      <motion.div
        className="aurora-blob blob-1"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob blob-2"
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob blob-3"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -20, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Aurora;
