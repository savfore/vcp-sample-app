"use client"
declare global {
  interface Window {
    builderState?: {
      locale?: string;
      // you can add more properties later if needed
    };
  }
}
import { ComponentProps } from "react";
import { BuilderComponent, Builder, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import "../builder-registry";
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

 
  
  return <DefaultErrorPage statusCode={404} />;
}
