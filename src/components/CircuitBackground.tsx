import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;
    const connectionDistance = isMobile ? 90 : 120;
    let W = 0;
    let H = 0;
    let lastWidth = 0;

    // Mobile browsers fire "resize" when the address bar shows/hides while scrolling.
    // Only rebuild the canvas when the width really changes, and keep CSS size in sync with DPR.
    const resize = (force = false) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!force && w === lastWidth) return;
      lastWidth = w;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = w;
      H = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const p of particles) {
        p.x = Math.min(Math.max(p.x, 0), W);
        p.y = Math.min(Math.max(p.y, 0), H);
      }
    };
    const onResize = () => resize();

    resize(true);
    window.addEventListener("resize", onResize);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      // Update and draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        else if (p.x > W) { p.x = W; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        else if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy); }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(213, 90%, 68%, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connections (circuit-like lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(213, 90%, 68%, ${opacity})`;
            ctx.lineWidth = 0.5;

            // Draw right-angle circuit lines instead of straight lines
            const midX = (particles[i].x + particles[j].x) / 2;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(midX, particles[i].y);
            ctx.lineTo(midX, particles[j].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
