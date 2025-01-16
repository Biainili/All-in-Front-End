"use client";

import React, { useState, useEffect } from "react";

interface Step4Props {
  paymentInfo: {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  };
  fixedPrice: number; // Ծառայության հաստատված արժեքը
  totalFee: number; // Պետական վճարի ընդհանուր գումարը
  onComplete: (data: {
    cardNumber: string;
    expiryDate: string;
    cvc: string;
  }) => void;
  onBack: () => void; // Վերադառնալու ֆունկցիա
}

export default function StepFour({
  paymentInfo,
  fixedPrice,
  totalFee,
  onComplete,
  onBack,
}: Step4Props) {
  const [formData, setFormData] = useState({
    cardNumber: paymentInfo.cardNumber || "",
    expiryDate: paymentInfo.expiryDate || "",
    cvc: paymentInfo.cvc || "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Ֆորմայի վավերականության ստուգում
  useEffect(() => {
    const isValid =
      /^\d{16}$/.test(formData.cardNumber.replace(/\s+/g, "")) && // Քարտի համար՝ 16 նիշ
      /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate) && // Վավերականության ժամկետ՝ MM/YY
      /^\d{3,4}$/.test(formData.cvc); // CVC՝ 3-4 նիշ

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onComplete(formData);
    }
  };

  const totalPrice = fixedPrice + totalFee; // Ընդհանուր գումար

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Քայլ 4: Վճարում</h2>
      <div className="text-lg font-medium mb-4">
        <div className="flex justify-between">
          <p>
            <span className="font-bold">Ծառայության արժեքը:</span> {fixedPrice}{" "}
            ֏
          </p>
          <p>
            <span className="font-bold">Պետական վճար:</span> {totalFee} ֏
          </p>
        </div>
        <p className="mt-4 text-xl font-bold">
          <span className="font-bold">Ընդհանուր գումար:</span> {totalPrice} ֏
        </p>
      </div>

      <form className="flex flex-col gap-4">
        {/* Քարտի համար */}
        <div>
          <label htmlFor="cardNumber" className="block font-medium mb-2">
            Քարտի համար
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        {/* Վավերականության ժամկետ */}
        <div>
          <label htmlFor="expiryDate" className="block font-medium mb-2">
            Վավերականության ժամկետ (MM/YY)
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="MM/YY"
          />
        </div>

        {/* CVC/CVV */}
        <div>
          <label htmlFor="cvc" className="block font-medium mb-2">
            CVC/CVV
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={formData.cvc}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123"
          />
        </div>
      </form>

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
          type="button"
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`px-4 py-2 rounded-lg text-white ${
            isFormValid
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Հաստատել և վճարել
        </button>
      </div>
    </div>
  );
}
