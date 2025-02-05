"use client";

import { useEffect, useRef, useState } from "react";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  particleHeight?: number; // New prop to control particle height
}

export const SparklesCore = ({
  id = "tsparticles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className = "h-full w-full",
  particleColor = "#FFFFFF",
  particleHeight = 800, // Default height, can be overridden
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: particleHeight });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists before using it

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Ensure context exists before using it

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return; // Re-check in case it's null
      canvas.width = window.innerWidth;
      canvas.height = particleHeight;
      setDimensions({ width: window.innerWidth, height: particleHeight });
    };

    resizeCanvas();

    class Particle {
      x!: number;
      y!: number;
      size!: number;
      speedX!: number;
      speedY!: number;
      opacity!: number;

      constructor() {
        if (!canvas) return; // Ensure canvas exists
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        if (!canvas) return; // Ensure canvas exists before using width/height
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        this.opacity += Math.random() * 0.02 - 0.01;
        if (this.opacity > 1) this.opacity = 1;
        if (this.opacity < 0.3) this.opacity = 0.3;
      }

      draw() {
        if (!ctx) return; // Ensure context exists
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleDensity; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas || !ctx) return; // Ensure both exist before proceeding
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [maxSize, minSize, particleColor, particleDensity, particleHeight]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{
        background,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
};
