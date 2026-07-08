import React, { useEffect, useRef } from 'react';

const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height, dpr;
    let splashes = [];
    let animationId;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    const spawn = (x, y) => {
      const count = 18;
      const color = `hsl(${18}, 51%, 49%)`; // terracotta accent #c1633d
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
        const speed = 2 + Math.random() * 4;
        splashes.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          radius: 2 + Math.random() * 3,
          color,
        });
      }
      if (!animationId) tick();
    };

    const onPointerDown = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      spawn(e.clientX, e.clientY);
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      splashes = splashes.filter((p) => p.life > 0);
      if (splashes.length === 0) {
        animationId = null;
        return;
      }
      splashes.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.92;
        p.vy *= 0.92;
        p.life -= 0.025;
        const radius = Math.max(p.radius * p.life, 0);
        if (radius <= 0) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      animationId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointerdown', onPointerDown);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SplashCursor;
