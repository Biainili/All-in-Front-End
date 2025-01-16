import React, { useState } from "react";
import Step1 from "./formUnified_steps/Step1";
import Step2 from "./formUnified_steps/Step2";
import Step3 from "./formUnified_steps/Step3";
import Step4 from "./formUnified_steps/Step4";
import Step5 from "./formUnified_steps/Step5";

export default function FormWrapper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  // Переход на следующий шаг с сохранением данных
  const handleNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Переход на предыдущий шаг
  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(1, prevStep - 1));
  };

  // Эмуляция оплаты
  const handlePay = async () => {
    try {
      console.log("Payment data:", formData);
      setCurrentStep(5); // Переход на Step5 после успешной оплаты
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  // Перезапуск формы
  const handleRestart = () => {
    setFormData({});
    setCurrentStep(1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1 formData={formData} onNextStep={handleNextStep} />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      )}
      {currentStep === 4 && (
        <Step4
          formData={formData}
          onPreviousStep={handlePreviousStep}
          onPay={handlePay}
        />
      )}
      {currentStep === 5 && <Step5 onRestart={handleRestart} />}
    </div>
  );
}
