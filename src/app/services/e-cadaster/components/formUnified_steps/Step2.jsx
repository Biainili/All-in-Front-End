import React, { useState, useEffect } from "react";

export default function Step2({ formData, onPreviousStep, onNextStep }) {
  const [step2Data, setStep2Data] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    deliveryTime: "3дня", // Default value for radio input
  });

  // Предзаполняем данные из formData при монтировании компонента
  useEffect(() => {
    setStep2Data((prevData) => ({
      ...prevData,
      ...formData, // Заполняем из formData
    }));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStep2Data({
      ...step2Data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаем выбранную сумму в formData
    const selectedAmount = prices[step2Data.deliveryTime];
    onNextStep({ ...formData, ...step2Data, selectedAmount }); // Передача данных на следующий шаг
  };

  // Определяем цены на основе значения "Гույք. ն/թ. հողամաս"
  const prices = formData.ownership
    ? { "3дня": 250, "2дня": 500, "2 часа": 1500 }
    : { "3дня": 10000, "2дня": 20000, "2 часа": 6000 };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Имя */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Անուն*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={step2Data.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Անուն"
            required
          />
        </div>

        {/* Фамилия */}
        <div>
          <label
            htmlFor="surname"
            className="block text-sm font-medium text-gray-700"
          >
            Ազգանուն*
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={step2Data.surname}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ազգանուն"
            required
          />
        </div>

        {/* Электронная почта */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Էլ. փոստ*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={step2Data.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Էլ. փոստ"
            required
          />
        </div>

        {/* Номер телефона */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Հեռախոսահամար*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={step2Data.phone}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Հեռախոսահամար"
            required
          />
        </div>
      </div>

      {/* Радио кнопки для сроков получения */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Ստացման ժամկետը</p>
        <div className="flex sm:gap-8 gap-2 flex-wrap">
          {Object.keys(prices).map((time) => (
            <label key={time} className="flex items-center space-x-2">
              <input
                type="radio"
                name="deliveryTime"
                value={time}
                checked={step2Data.deliveryTime === time}
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span>
                {time} - {prices[time]} դրամ
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Кнопки навигации */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPreviousStep}
          className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Նահանջ
        </button>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Հաջորդ
        </button>
      </div>
    </form>
  );
}
