"use client";

import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { useEffect } from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function FrCaPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = "fr-CA";
    }
  }, []);

  return (
    <RenderBuilderContent 
      model="page" 
      options={{ enrich: true }}
      userAttributes={{ urlPath: "/fr-ca" }}
    />
  );
} 