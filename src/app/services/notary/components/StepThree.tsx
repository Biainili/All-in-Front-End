"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Step3Props {
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }; // Արդեն մուտքագրված օգտատերի տվյալները
  onComplete: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }) => void; // Ֆունկցիա տվյալների փոխանցման համար ծնողական կոմպոնենտին
  onBack: () => void; // Ֆունկցիա՝ նախորդ քայլին վերադառնալու համար
}

export default function StepThree({
  userDetails,
  onComplete,
  onBack,
}: Step3Props) {
  const [formData, setFormData] = useState({
    firstName: userDetails.firstName || "",
    lastName: userDetails.lastName || "",
    email: userDetails.email || "",
    phone: userDetails.phone || "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Դաշտի վալիդացիա
  const validateField = useCallback((name: string, value: string): string => {
    switch (name) {
      case "firstName":
      case "lastName":
        return value.trim().length > 0 ? "" : "Այս դաշտը պարտադիր է։";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Մուտքագրեք ճիշտ email։";
      case "phone":
        return /^\+?[0-9]{7,15}$/.test(value)
          ? ""
          : "Մուտքագրեք ճիշտ հեռախոսահամար։";
      default:
        return "";
    }
  }, []);

  // Վալիդացիա բոլոր դաշտերի համար
  useEffect(() => {
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value.trim().length > 0);
    setIsFormValid(isValid);
  }, [errors, formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Թարմացնում ենք ձևաթղթի տվյալները
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Վալիդացնում ենք դաշտը
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Քայլ 3: Օգտատիրոջ տվյալների մուտքագրում
      </h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid) onComplete(formData);
        }}
      >
        {/* Անուն */}
        <div>
          <label htmlFor="firstName" className="block font-medium mb-2">
            Անուն
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Մուտքագրեք ձեր անունը"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        {/* Ազգանուն */}
        <div>
          <label htmlFor="lastName" className="block font-medium mb-2">
            Ազգանուն
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Մուտքագրեք ձեր ազգանունը"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        {/* Էլ. փոստ */}
        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Էլ. փոստ
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Մուտքագրեք ձեր էլ. փոստը"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Հեռախոսահամար */}
        <div>
          <label htmlFor="phone" className="block font-medium mb-2">
            Հեռախոսահամար
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Մուտքագրեք ձեր հեռախոսահամարը"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Կոճակներ */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
          >
            Հետ
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Հաջորդ
          </button>
        </div>
      </form>
    </div>
  );
}
