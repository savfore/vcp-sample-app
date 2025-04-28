"use client";

import { BuilderElement } from "@builder.io/sdk";
import { AnimatedSection } from "./AnimatedSection";

interface LocalizedSectionProps {
  children: React.ReactNode;
  locale?: string;
}

export function LocalizedSection({ children, locale }: LocalizedSectionProps) {
  const isVisible = !locale || window.builderState?.locale === locale;

  return (
    <AnimatedSection isVisible={isVisible}>
      {children}
    </AnimatedSection>
  );
} 