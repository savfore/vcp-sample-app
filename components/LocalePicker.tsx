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
      // Force a re-render of localized content
      window.dispatchEvent(new Event('localeChange'));
    }
  };

  return (
    <div className="flex gap-2 p-4 bg-white rounded-lg shadow-sm">
      {languages.map(({ code, label }) => (
        <Button
          key={code}
          variant="outline"
          onClick={() => handleLanguageChange(code)}
          className="px-4 py-2"
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
