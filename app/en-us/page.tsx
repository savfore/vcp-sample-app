"use client";

import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { useEffect } from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function EnUsPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = "en-US";
    }
  }, []);

  return (
    <RenderBuilderContent 
      model="page" 
      options={{ enrich: true }}
      userAttributes={{ urlPath: "/en-us" }}
    />
  );
} 