"use client";

import { useState } from "react";

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
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const handleLanguageChange = (code: string) => {
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = code;
      setSelectedLanguage(code);
      // Force a re-render of localized content
      window.dispatchEvent(new Event('localeChange'));
    }
  };

  return (
    <div className="relative inline-block">
      <select
        value={selectedLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
