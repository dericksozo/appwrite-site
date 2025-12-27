"use client";

import { useEffect, useState } from "react";
import { Background } from "@/once-ui/components";
import { effects } from "@/app/resources";

export const DynamicBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 500;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Interpolate between light green and the current darker green
  // Light: hsl(160, 60%, 45%) -> Dark: hsl(160, 60%, 25%)
  const lightness = 45 - scrollProgress * 20;
  const dynamicColor = `hsl(160, 60%, ${lightness}%)`;

  return (
    <Background
      mask={{
        cursor: effects.mask.cursor,
        x: effects.mask.x,
        y: effects.mask.y,
        radius: effects.mask.radius,
      }}
      gradient={{
        display: effects.gradient.display,
        x: effects.gradient.x,
        y: effects.gradient.y,
        width: effects.gradient.width,
        height: effects.gradient.height,
        tilt: effects.gradient.tilt,
        colorStart: "brand-background-strong",
        colorEnd: effects.gradient.colorEnd,
        opacity: effects.gradient.opacity as
          | 0
          | 10
          | 20
          | 30
          | 40
          | 50
          | 60
          | 70
          | 80
          | 90
          | 100,
      }}
      dots={{
        display: effects.dots.display,
        color: effects.dots.color,
        size: effects.dots.size as any,
        opacity: effects.dots.opacity as any,
      }}
      grid={{
        display: effects.grid.display,
        color: effects.grid.color,
        width: effects.grid.width as any,
        height: effects.grid.height as any,
        opacity: effects.grid.opacity as any,
      }}
      lines={{
        display: effects.lines.display,
        opacity: effects.lines.opacity as any,
      }}
      style={{
        ["--brand-background-strong" as string]: dynamicColor,
      }}
    />
  );
};

