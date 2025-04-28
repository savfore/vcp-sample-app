"use client";

import { useState, useRef, useEffect } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    if (typeof window !== "undefined") {
      window.builderState = window.builderState || {};
      window.builderState.locale = code;
      setSelectedLanguage(code);
      setIsOpen(false);
      window.dispatchEvent(new Event('localeChange'));
    }
  };

  const selectedLabel = languages.find(lang => lang.code === selectedLanguage)?.label || "Select Language";

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-40 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <span>{selectedLabel}</span>
        <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {languages.map(({ code, label }) => (
              <li key={code}>
                <button
                  onClick={() => handleLanguageChange(code)}
                  className={`block w-full px-4 py-2 text-sm text-left ${
                    code === selectedLanguage
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
