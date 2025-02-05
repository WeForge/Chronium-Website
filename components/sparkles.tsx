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
    if (!canvas) return;

    // Use non-null assertion operator to assure TS that ctx is not null.
    const ctx = canvas.getContext("2d")!;
    
    let particles: Particle[] = [];
    let animationFrameId: number;

    let currentWidth = window.innerWidth;
    let currentHeight = particleHeight;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const scale = window.devicePixelRatio || 1;
      currentWidth = window.innerWidth;
      currentHeight = particleHeight;
      canvas.width = currentWidth * scale;
      canvas.height = currentHeight * scale;
      canvas.style.width = currentWidth + "px";
      canvas.style.height = currentHeight + "px";
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      setDimensions({ width: currentWidth, height: currentHeight });
    };

    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * currentWidth;
        this.y = Math.random() * currentHeight;
        this.size = Math.random() * (maxSize - minSize) + minSize;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > currentWidth) this.x = 0;
        if (this.x < 0) this.x = currentWidth;
        if (this.y > currentHeight) this.y = 0;
        if (this.y < 0) this.y = currentHeight;

        this.opacity += Math.random() * 0.02 - 0.01;
        if (this.opacity > 1) this.opacity = 1;
        if (this.opacity < 0.3) this.opacity = 0.3;
      }

      draw() {
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
      if (!canvas) return;
      ctx.clearRect(0, 0, currentWidth, currentHeight);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
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
