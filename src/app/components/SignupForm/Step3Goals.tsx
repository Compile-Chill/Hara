"use client";

import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";

interface Step3GoalsProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Goals({ onNext, onBack }: Step3GoalsProps) {
  const { messages } = useLanguage();
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goalsOptions = [
    { id: "hydration" },
    { id: "oilControl" },
    { id: "texture" },
    { id: "evenTone" },
    { id: "acne" },
    { id: "antiAging" }
  ];

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  return (
    <div className="w-full px-6 py-4">
      <h2 className="text-xl md:text-2xl font-semibold text-[#2b3e50] mb-6 border-b border-[#c3d8e6] pb-2">
        {messages?.form?.step3?.title || messages?.wizard?.steps?.step3}
      </h2>

      <div className="space-y-4">
        {goalsOptions.map(({ id }) => (
          <div
            key={id}
            onClick={() => toggleGoal(id)}
            className={`cursor-pointer rounded-md border px-4 py-3 shadow-sm transition-all w-full ${
              selectedGoals.includes(id)
                ? "bg-[#F8F1E7] border-[#7da3c1]"
                : "bg-white border-gray-300"
            }`}
          >
            <h3 className="font-semibold text-gray-900">
              {messages?.form?.step3?.options?.[id]?.title}
            </h3>
            <p className="text-sm text-gray-700">
              {messages?.form?.step3?.options?.[id]?.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={onBack}
          className="w-28 bg-[#7da3c1] hover:bg-[#6b92b1] text-white px-5 py-2 rounded-md text-sm shadow-md transition-colors"
        >
          {messages?.form?.step2?.back}
        </button>
        <button
          onClick={onNext}
          disabled={selectedGoals.length === 0}
          className="w-28 bg-[#7da3c1] hover:bg-[#6b92b1] text-white px-5 py-2 rounded-md text-sm shadow-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {messages?.form?.step2?.next}
        </button>
      </div>
    </div>
  );
}