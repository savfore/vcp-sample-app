"use client";

import { useState } from "react";

const locales = [
  { code: "en-US", label: "English", content: "Hello!" },
  { code: "fr-CA", label: "French", content: "Bonjour!" },
  { code: "es-ES", label: "Spanish", content: "¡Hola!" },
];

export default function LocaleSelector() {
  const [selectedLocale, setSelectedLocale] = useState("en-US");
  const current = locales.find(l => l.code === selectedLocale) || locales[0];

  return (
    <div className="max-w-xs mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="mb-2 text-sm font-semibold text-gray-700">Select your preferred language.</h3>
      <div className="relative mb-4">
        <select
          value={selectedLocale}
          onChange={e => setSelectedLocale(e.target.value)}
          className="block w-full px-4 py-2 pr-8 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {locales.map(({ code, label }) => (
            <option key={code} value={code}>{label}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="text-lg font-medium text-center text-gray-800 py-2">
        {current.content}
      </div>
    </div>
  );
} 