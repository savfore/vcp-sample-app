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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = code;
      setSelectedLanguage(code);
      window.dispatchEvent(new Event('localeChange'));
    }
  };

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="block w-full px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
