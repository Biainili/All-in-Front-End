import React, { useState, useEffect } from "react";

export default function Step1({ formData, onNextStep }) {
  const [step1Data, setStep1Data] = useState({
    type: "",
    ownership: false,
    region: "",
    location: "",
    property: "",
    name: "",
    surname: "",
    middleName: "",
  });

  useEffect(() => {
    // Предзаполнение только если formData отличается от текущих данных
    setStep1Data((prevData) => ({
      ...prevData,
      ...formData,
    }));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStep1Data({
      ...step1Data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep(step1Data); // Передаем данные в родительский компонент
  };

  return (
    <>
      <div className="mb-8 max-w-7xl">
        <p className="text-gray-500 text-lg font-normal leading-relaxed">
          Պետք է լրացնել ձևը, ուղարկել այն, և ձեր էլ․ փոստին կստանաք գումարի
          չափը և վճարման եղանակը՝ ձևում նշված ժամկետում։ Դուք կստանաք
          <strong> Միասնական Տեղեկանք</strong> ձեր էլ․ փոստին առցանց։
          Ծառայության արժեքը կազմում է 1000 դրամ՝ առանց պետական տուրքի։
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Radio Buttons */}
        <div className="space-y-2">
          <div className="flex md:gap-14 gap-2 flex-wrap">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="type"
                value="Վկայականի համար"
                checked={step1Data.type === "Վկայականի համար"}
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span>Վկայականի համար</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="type"
                value="Կադաստրային գնահատում"
                checked={step1Data.type === "Կադաստրային գնահատում"}
                onChange={handleChange}
                className="form-radio"
              />
              <span>Կադաստրային գնահատում</span>
            </label>
          </div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="ownership"
              checked={step1Data.ownership}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Գույք. ն/թ. հողամաս</span>
          </label>
        </div>

        {/* Region Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              Մարզ*
            </label>
            <select
              id="region"
              name="region"
              value={step1Data.region}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Ընտրել
              </option>
              <option value="Երևան">Երևան</option>
              <option value="Կոտայք">Կոտայք</option>
              <option value="Շիրակ">Շիրակ</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Համայնք*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={step1Data.location}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Համայնք"
              required
            />
          </div>
          {!step1Data.ownership && (
            <div>
              <label
                htmlFor="property"
                className="block text-sm font-medium text-gray-700"
              >
                Ֆռոնգ
              </label>
              <input
                type="text"
                id="property"
                name="property"
                value={step1Data.property}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ֆռոնգ"
              />
            </div>
          )}
        </div>

        {/* Second Row */}
        {!step1Data.ownership && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
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
                value={step1Data.name}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Անուն"
                required
              />
            </div>
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Ազգանուն
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={step1Data.surname}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ազգանուն"
              />
            </div>
            <div>
              <label
                htmlFor="middleName"
                className="block text-sm font-medium text-gray-700"
              >
                Հայրանուն
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={step1Data.middleName}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Հայրանուն"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Հաստատել
          </button>
        </div>
      </form>
    </>
  );
}
