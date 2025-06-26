"use client";

import { useState, useMemo } from "react";
import { FaCheck } from "react-icons/fa";
import Step1PersonalInfo from "./Step1PersonalInfo";
import Step2SkinType from "./Step2SkinType";
import Step3Goals from "./Step3Goals";
import useLanguage from "@/hooks/useLanguage";

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const { messages } = useLanguage();

  const steps = useMemo(
    () => [
      messages?.wizard?.steps?.step1,
      messages?.wizard?.steps?.step2,
      messages?.wizard?.steps?.step3,
      messages?.wizard?.steps?.step4,
      messages?.wizard?.steps?.step5,
      messages?.wizard?.steps?.step6
    ],
    [messages]
  );

  const handleNext = () => {
    if (step < stepComponents.length) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const stepComponents = [
    <Step1PersonalInfo onNext={handleNext} />,
    <Step2SkinType onNext={handleNext} onBack={handleBack} />,
    <Step3Goals onNext={handleNext} onBack={handleBack} />,
  ];

  return (
    <div className="flex flex-col md:flex-row bg-[#e6f0fb] rounded-3xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out">
      {/* Wizard Steps */}
      <div className="w-full md:w-1/3 px-6 py-10 bg-blue-200 rounded-l-3xl">
        <h2 className="text-xl font-semibold tracking-wide text-[#2b3e50] mb-10">
          {messages?.wizard?.title}
        </h2>
        <ul className="space-y-5">
          {steps.map((label, index) => {
            const isCompleted = index + 1 < step;
            const isActive = index + 1 === step;

            return (
              <li
                key={index}
                className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-[#2b3e50] font-semibold"
                    : "text-gray-600 hover:text-[#2b3e50]"
                }`}
              >
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 transform ${
                    isActive
                      ? "bg-[#7da3c1] text-white scale-105 shadow-md"
                      : isCompleted
                      ? "bg-[#F8F1E7] text-[#2b3e50]"
                      : "border border-[#7da3c1] text-[#7da3c1] bg-white"
                  }`}
                >
                  {isCompleted ? <FaCheck className="w-3 h-3" /> : index + 1}
                </div>
                <span className="text-sm leading-tight">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Form Content */}
      <div className="w-full md:w-2/3 px-8 py-10 bg-[#dceafa] rounded-r-3xl transition-opacity duration-500 ease-in-out min-w-[500px] md:min-w-[600px]">
        {stepComponents[step - 1]}
      </div>
    </div>
  );
}






