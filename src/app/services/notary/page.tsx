"use client";

import { useState } from "react";
import StartStep from "./components/StartStep"; // Новый компонент для вступительного шага
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { services } from "./data/services";
import { cities } from "./data/cities";
import Link from "next/link";

// Интерфейс для данных формы
interface FormData {
  city: string;
  notaryId: number | null;
  serviceId: number | null;
  uploadedDocuments: Record<string, File[]>; // Загруженные файлы
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  paymentInfo: {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  };
  price: number; // Цена услуги
  totalFee: number;
  date: string | null;
  time: string | null;
}

export default function Page() {
  const [step, setStep] = useState(0); // Начинаем с шага 0
  const [formData, setFormData] = useState<FormData>({
    city: "",
    notaryId: null,
    serviceId: null,
    uploadedDocuments: {}, // Загруженные файлы
    userDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    paymentInfo: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    price: 0, // Цена услуги
    totalFee: 0,
    date: null,
    time: null,
  });

  // Завершение вступительного шага
  const handleStartComplete = () => {
    setStep(1); // Переход на шаг 1
  };

  // Завершение первого шага
  const handleCompleteStep1 = (data: {
    city: string;
    notaryId: number;
    serviceId: number;
    date: string;
    time: string;
  }) => {
    const selectedService = services.find((s) => s.id === data.serviceId);
    setFormData((prev) => ({
      ...prev,
      ...data,
      price: selectedService ? selectedService.fixedPrice : 0, // Устанавливаем цену
    }));
    setStep(2); // Переход на второй шаг
  };

  // Завершение второго шага
  const handleCompleteStep2 = (uploadedDocuments: Record<string, File[]>) => {
    setFormData((prev) => ({
      ...prev,
      uploadedDocuments,
    }));
    setStep(3); // Переход на третий шаг
  };

  // Завершение третьего шага
  const handleCompleteStep3 = (userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      userDetails,
    }));
    setStep(4); // Переход на четвёртый шаг
  };

  // Завершение четвёртого шага
  const handleCompleteStep4 = (paymentInfo: {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  }) => {
    setFormData((prev) => ({
      ...prev,
      paymentInfo,
    }));
    setStep(5); // Завершение формы
  };

  const selectedServiceInfo =
    services.find((s) => s.id === formData.serviceId)?.information || "";

  return (
    <div className="min-h-screen bg-gray-200 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-custom-notary rounded-lg">
        {step === 0 && (
          <StartStep
            onNext={handleStartComplete} // Передаём функцию для перехода на следующий шаг
          />
        )}

        {step === 1 && (
          <>
            <StepOne
              services={services}
              cities={cities}
              formData={{
                city: formData.city,
                notaryId: formData.notaryId,
                serviceId: formData.serviceId,
                date: formData.date,
                time: formData.time,
              }}
              onComplete={handleCompleteStep1}
              onUpdate={(data) => setFormData((prev) => ({ ...prev, ...data }))}
            />
            {/* Отображение информации о выбранной услуге */}
            {formData.serviceId && selectedServiceInfo && (
              <div className="mt-8 p-4 bg-gray-50 border rounded-lg">
                <h3 className="text-lg font-bold mb-2">
                  Ընտրված ծառայության վերաբերյալ տեղեկատվություն
                </h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {selectedServiceInfo}
                </p>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <StepTwo
            requiredDocuments={
              services.find((s) => s.id === formData.serviceId)
                ?.requiredDocuments || []
            }
            uploadedDocuments={formData.uploadedDocuments}
            onComplete={handleCompleteStep2}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <StepThree
            userDetails={formData.userDetails}
            onComplete={handleCompleteStep3}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <StepFour
            paymentInfo={formData.paymentInfo}
            fixedPrice={formData.price}
            totalFee={formData.totalFee}
            onComplete={handleCompleteStep4}
            onBack={() => setStep(3)}
          />
        )}

        {step === 5 && (
          <div className="text-center flex flex-col">
            <h2 className="text-2xl font-bold mb-4">
              Շնորհակալություն գրանցման համար!
            </h2>
            <p className="text-lg mb-6">
              Ձեր ծառայությունը հաջողությամբ գրանցվել է։ Մենք կկապվենք ձեզ հետ
              հաստատման համար։
            </p>
            <div className="flex justify-around text-white">
              <Link
                href={"/services/notary"}
                className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg"
              >
                Վերադառնալ
              </Link>
              <Link
                href={"/"}
                className="bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg"
              >
                Գլխավոր էջ
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
