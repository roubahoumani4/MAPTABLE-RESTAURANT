import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CurrencyToggle() {
  const [isUSD, setIsUSD] = useState(false);

  const toggleCurrency = () => {
    setIsUSD(!isUSD);
    // TODO: Implement actual currency switching logic
    // This would typically update a context or global state
    console.log("Currency switched to:", isUSD ? "LBP" : "USD");
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">LBP</span>
      <button
        onClick={toggleCurrency}
        className={`w-10 h-6 bg-gray-200 rounded-full relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
          isUSD ? "bg-accent" : ""
        }`}
        data-testid="toggle-currency"
        aria-label="Toggle currency"
      >
        <div
          className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform duration-200 ${
            isUSD ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>
      <span className="text-sm text-gray-600">USD</span>
    </div>
  );
}
