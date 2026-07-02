import { useEffect, useRef } from "react";

interface LiveBackgroundProps {
  isDark: boolean;
}

export default function LiveBackground({ isDark }: LiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Extremely slow movement for supreme professionalism and zero distraction
        this.vx = (Math.random() - 0.5) * 0.18;
        this.vy = (Math.random() - 0.5) * 0.18;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with soft reset
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }

      draw(c: CanvasRenderingContext2D, darkTheme: boolean) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Soft ambient dots
        c.fillStyle = darkTheme
          ? "rgba(129, 140, 248, 0.15)" // Indigo-400 with opacity in dark
          : "rgba(99, 102, 241, 0.08)";  // Indigo-500 with lower opacity in light
        c.fill();
      }
    }

    // Initialize particles based on screen size
    const particleCount = Math.min(Math.floor((width * height) / 22000), 70);
    const particles: Particle[] = Array.from({ length: particleCount }, () => new Particle());

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background glow overlays
      const gradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        10,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.6
      );

      if (isDark) {
        gradient.addColorStop(0, "rgba(15, 23, 42, 0.95)"); // Deep Slate-900
        gradient.addColorStop(1, "rgba(2, 6, 23, 1)");      // Very Deep Slate-950
      } else {
        gradient.addColorStop(0, "rgba(248, 250, 252, 0.9)"); // Slate-50
        gradient.addColorStop(1, "rgba(241, 245, 249, 1)");   // Slate-100
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw & update particles and delicate connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx, isDark);

        // Check distance to other particles to draw connection webs
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect nearby particles
          if (dist < 180) {
            const alpha = (1 - dist / 180) * (isDark ? 0.08 : 0.04);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(99, 102, 241, ${alpha})` // Soft Indigo lines in dark mode
              : `rgba(79, 70, 229, ${alpha})`;  // Soft Indigo-600 lines in light mode
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none w-full h-full block"
      style={{ mixBlendMode: "normal" }}
    />
  );
}
