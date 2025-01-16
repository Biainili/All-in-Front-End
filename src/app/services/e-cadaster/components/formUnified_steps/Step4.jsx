import React, { useState, useEffect } from "react";

export default function Step4({ formData, onPreviousStep, onPay }) {
  // Calculate the total amount
  const totalAmount = parseInt(formData.selectedAmount || 0, 10) + 2000; // Add a fixed fee

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  // Предзаполняем платежные данные из formData, если они существуют
  useEffect(() => {
    if (formData.paymentData) {
      setPaymentData(formData.paymentData);
    }
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = {
      ...formData,
      paymentData,
    };
    onPay(updatedFormData); // Передаем данные платежа
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Վճարման ամփոփում
      </h2>

      {/* Amount + Commission */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-lg text-gray-700">
          Ընտրած գումարը:{" "}
          <span className="font-semibold">{formData.selectedAmount} դր.</span>
        </p>
        <p className="text-lg text-gray-700">
          Մեր միջնորդավճարը: <span className="font-semibold">2000 դր.</span>
        </p>
        <hr className="my-3" />
        <p className="text-lg text-gray-800 font-bold">
          Ընդհանուր գումարը:{" "}
          <span className="text-indigo-600">{totalAmount} դր.</span>
        </p>
      </div>

      {/* Payment Fields */}
      <div className="space-y-4">
        {/* Card Number */}
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Քարտի համարը
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        {/* Expiration Date */}
        <div className="mb-4">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Վավերականության ժամկետ (MM/YY)
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="MM/YY"
            required
          />
        </div>

        {/* CVC/CVV */}
        <div className="mb-4">
          <label
            htmlFor="cvc"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            CVC/CVV
          </label>
          <input
            type="text"
            id="cvc"
            name="cvc"
            value={paymentData.cvc}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="123"
            required
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPreviousStep}
          className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Վերադառնալ
        </button>
        <button
          type="submit"
          className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Վճարել
        </button>
      </div>
    </form>
  );
}
