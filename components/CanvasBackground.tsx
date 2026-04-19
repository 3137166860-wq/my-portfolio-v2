"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);
  const { resolvedTheme } = useTheme();

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);

    // 根据主题设置波纹颜色
    const waveColor =
      resolvedTheme === "dark"
        ? "rgba(45, 45, 47, 0.25)"
        : "rgba(229, 229, 229, 0.15)";

    // 初始化粒子
    const points: Point[] = [];
    const pointCount = Math.min(40, Math.floor((rect.width * rect.height) / 8000));

    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2 + 1,
        color: waveColor,
      });
    }

    pointsRef.current = points;
  }, [resolvedTheme]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width;
    const height = rect.height;

    // 清除画布，使用透明背景
    ctx.clearRect(0, 0, width * dpr, height * dpr);
    ctx.scale(dpr, dpr);

    const points = pointsRef.current;
    const mouse = mouseRef.current;

    // 更新并绘制粒子
    for (let i = 0; i < points.length; i++) {
      const p = points[i];

      // 鼠标斥力
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 100;

      if (dist < maxDist && dist > 0) {
        const force = (maxDist - dist) / maxDist;
        p.vx -= (dx / dist) * force * 0.05;
        p.vy -= (dy / dist) * force * 0.05;
      }

      // 速度阻尼
      p.vx *= 0.99;
      p.vy *= 0.99;

      // 边界碰撞
      if (p.x <= 0 || p.x >= width) p.vx *= -0.8;
      if (p.y <= 0 || p.y >= height) p.vy *= -0.8;

      p.x += p.vx;
      p.y += p.vy;

      // 限制位置
      p.x = Math.max(0, Math.min(width, p.x));
      p.y = Math.max(0, Math.min(height, p.y));

      // 绘制粒子
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // 绘制连接线
      for (let j = i + 1; j < points.length; j++) {
        const p2 = points[j];
        const dx = p2.x - p.x;
        const dy = p2.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color.replace("0.25", "0.1").replace("0.15", "0.05");
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      initCanvas();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    initCanvas();
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initCanvas, draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}