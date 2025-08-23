import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    // TODO: Implement actual language switching logic
    // This would typically update a context or global state
    console.log("Language switched to:", isArabic ? "English" : "Arabic");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">EN</span>
      <button
        onClick={toggleLanguage}
        className={`w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          isArabic ? "bg-primary" : ""
        }`}
        data-testid="toggle-language"
        aria-label="Toggle language"
      >
        <div
          className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
            isArabic ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
      <span className="text-sm text-gray-600">عربي</span>
    </div>
  );
}
