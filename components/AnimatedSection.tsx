"use client";

import { useEffect, useState } from "react";
import { BuilderElement } from "@builder.io/sdk";

interface AnimatedSectionProps {
  children: React.ReactNode;
  isVisible: boolean;
}

export function AnimatedSection({ children, isVisible }: AnimatedSectionProps) {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      // Small delay to ensure the element is in the DOM before starting the animation
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      // Wait for the fade-out animation to complete before removing from DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isAnimating
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
      }`}
    >
      {children}
    </div>
  );
} 