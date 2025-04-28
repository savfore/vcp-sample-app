"use client";

import { Button } from "./ui/button";

declare global {
  interface Window {
    builderState?: {
      locale?: string;
    };
  }
}

const languages = [
  { code: "en-US", label: "English" },
  { code: "fr-CA", label: "French" },
  { code: "es-ES", label: "Spanish" },
];

export default function LocalePicker() {
  const handleLanguageChange = (code: string) => {
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = code;
    }
  };

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant="outline"
          onClick={() => handleLanguageChange(code)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
