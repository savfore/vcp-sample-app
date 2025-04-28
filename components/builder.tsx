"use client"
import { ComponentProps } from "react";
import { BuilderComponent, Builder, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import { AnimatedSection } from "./AnimatedSection";
import { useRouter } from 'next/navigation';

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  // Add visibility conditions based on locale
  const content = props.content ? {
    ...props.content,
    data: {
      ...props.content.data,
      showIf: (options: any) => {
        const locale = window.builderState?.locale;
        const sectionLocale = options.get('locale');
        
        // If no locale is specified for the section, show it
        if (!sectionLocale) return true;
        
        // Show section if it matches the current locale
        return locale === sectionLocale;
      }
    }
  } : props.content;

  if (content || isPreviewing) {
    return (
      <AnimatedSection isVisible={true}>
        <BuilderComponent {...props} content={content} />
      </AnimatedSection>
    );
  }
  
  return <DefaultErrorPage statusCode={404} />;
}
