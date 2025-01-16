"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    inc: "",
    type: "",
    FirmName: "",
    service: "",
    activity: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: value,
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
        Հայտ գործող ընկերության համար
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

      <div className="w-full">
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="email"
        >
          ՀՎՀՀ
        </label>
        <input
          type="number"
          id="inc"
          name="inc"
          value={formData.inc}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Գրեք ձեր էլ. փոստի հասցեն"
        />
      </div>

      <div className="flex justify-between gap-5">
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="email"
          >
            Կազմակերպության Տեսակ
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
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
        <div className="w-full">
          <label
            className="block text-sm font-medium mb-1 text-gray-700"
            htmlFor="email"
          >
            Կազմակերպության Անվանում
          </label>
          <input
            type="text"
            id="FirmName"
            name="FirmName"
            value={formData.FirmName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Գրեք ազմակերպության անվանում"
          />
        </div>
      </div>

      {/* Ծառայություններ */}
      <div className="w-full">
        <label
          className="block text-sm font-medium mb-1 text-gray-700"
          htmlFor="services"
        >
          Ծառայություններ
        </label>
        <select
          id="services"
          name="services"
          value={formData.services}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Ընտրեք ծառայությունը
          </option>
          <option value="Կոնսուլտացիա">Կոնսուլտացիա</option>
          <option value="Լիցենզիայի ներկայացում">Լիցենզիայի ներկայացում</option>
          <option value="Հաշվապահական աջակցություն">
            Հաշվապահական աջակցություն
          </option>
          <option value="Իրավաբանական աջակցություն">
            Իրավաբանական աջակցություն
          </option>
        </select>
      </div>
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
