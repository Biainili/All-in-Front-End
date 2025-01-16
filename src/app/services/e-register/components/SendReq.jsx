"use client";

import React, { useState } from "react";

export default function SendReq() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    companyType: "",
    director: "",
    address: "",
    noAddress: false,
    activity: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Հայտը հաջողությամբ ուղարկվեց։");
    // Здесь можно добавить отправку данных на сервер
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg sm:p-8 p-2 space-y-6 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-indigo-500 custom_showld mb-12 text-center">
        Հայտ ֆիրմայի բացման համար
      </h2>

      {/* Անուն */}
      <div className="flex justify-between gap-5">
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="name"
          >
            Անուն
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Գրեք ձեր անունը"
          />
        </div>

        {/* Ազգանուն */}
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="surname"
          >
            Ազգանուն
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Գրեք ձեր ազգանունը"
          />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        {/* Հեռախոսահամար */}
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="phone"
          >
            Հեռախոսահամար
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Գրեք ձեր հեռախոսահամարը"
          />
        </div>

        {/* Էլ. փոստ */}
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="email"
          >
            Էլ. փոստ
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Գրեք ձեր էլ. փոստի հասցեն"
          />
        </div>
      </div>

      {/* Ընտրեք ընկերության տեսակը */}
      <div>
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="companyType"
        >
          Ընտրեք ընկերության տեսակը
        </label>
        <select
          id="companyType"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Ընտրեք ընկերության տեսակը
          </option>
          <option value="ԱՁ">Անհատ ձեռնարկատեր (ԱՁ)</option>
          <option value="ՍՊԸ">
            Սահմանափակ պատասխանատվությամբ ընկերություն (ՍՊԸ)
          </option>
          <option value="ՓԲԸ">Փակ բաժնետիրական ընկերություն (ՓԲԸ)</option>
          <option value="ԲԲԸ">Բաց բաժնետիրական ընկերություն (ԲԲԸ)</option>
        </select>
      </div>

      {/* Տնօրեն */}
      <div>
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="director"
        >
          Տնօրեն
        </label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Գրեք տնօրենին"
        />
      </div>

      {/* Իրավաբանական հասցե */}
      <div>
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="address"
        >
          Իրավաբանական հասցե
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Գրեք իրավաբանական հասցեն"
          disabled={formData.noAddress}
        />
        <div className="mt-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="noAddress"
              checked={formData.noAddress}
              onChange={handleChange}
              className="mr-2"
            />
            Չկա իրավաբանական հասցե
          </label>
        </div>
      </div>

      {/* Նկարագրություն */}
      <div>
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="activity"
        >
          Նկարագրություն
        </label>
        <textarea
          id="activity"
          name="activity"
          value={formData.activity}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Գրեք ձեր գործունեության մասին"
        ></textarea>
      </div>

      {/* Ուղարկել */}
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-3 rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Ուղարկել
      </button>
    </form>
  );
}
