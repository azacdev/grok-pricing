"use client";

import { useRef, useEffect, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  velocity: { x: number; y: number };
  opacity: number;
}

interface StarFieldProps {
  paddingPercentage?: number;
}

const StarField = ({ paddingPercentage = 0 }: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const numStars = 100;

  const getPaddedDimensions = useCallback(
    (canvas: HTMLCanvasElement) => {
      const paddedWidth = canvas.width * (1 - 2 * paddingPercentage);
      const paddedHeight = canvas.height * (1 - 2 * paddingPercentage);
      const paddedOffsetX = canvas.width * paddingPercentage;
      const paddedOffsetY = canvas.height * paddingPercentage;
      return { paddedWidth, paddedHeight, paddedOffsetX, paddedOffsetY };
    },
    [paddingPercentage]
  );

  const createStars = useCallback(
    (canvas: HTMLCanvasElement) => {
      const { paddedWidth, paddedHeight, paddedOffsetX, paddedOffsetY } =
        getPaddedDimensions(canvas);

      stars.current = [];
      for (let i = 0; i < numStars; i++) {
        stars.current.push({
          x: Math.random() * paddedWidth + paddedOffsetX,
          y: Math.random() * paddedHeight + paddedOffsetY,
          size: Math.random() * 1 + 0.2,
          velocity: {
            x: (Math.random() - 1) * 0.08,
            y: (Math.random() - 1) * 0.08,
          },
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
    },
    [numStars, getPaddedDimensions]
  );

  const drawStars = useCallback(
    (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.current.forEach((star) => {
        star.x += star.velocity.x;
        star.y += star.velocity.y;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
    },
    [getPaddedDimensions]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawStars(ctx, canvas);
    animationFrameId.current = requestAnimationFrame(animate);
  }, [drawStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setCanvasDimensionsAndStars = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      createStars(canvas);
    };

    setCanvasDimensionsAndStars();
    window.addEventListener("resize", setCanvasDimensionsAndStars);

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setCanvasDimensionsAndStars);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, createStars]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full z-0"
      style={{
        maskImage:
          "radial-gradient(circle at top, #000000 0%, transparent 80%, transparent 100%)",
      }}
    />
  );
};

export default StarField;
