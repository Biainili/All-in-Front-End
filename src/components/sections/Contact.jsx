"use client";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [selectedService, setSelectedService] = useState(
    "Ֆինանսական և Իրավաբանական ծառայություններ"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, selectedService });
    // Add form submission logic here (e.g., send to an API)
  };

  return (
    <section
      className="py-12 bg-gray-50 flex flex-col lg:flex-row justify-around px-0 lg:px-20 gap-5"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 custom_showld">
            Կապ մեզ հետ
          </h1>
          <p className="text-lg text-gray-600 custom_showld">
            Եթե ունեք հարցեր կամ ցանկանում եք ավելին իմանալ մեր ծառայությունների
            մասին, լրացրեք ներքևի ձևը:
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Անուն
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Գրեք Ձեր անունը"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Էլ. փոստ
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Գրեք Ձեր էլ. փոստի հասցեն"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ընտրեք ծառայությունը
            </label>
            <select
              id="service"
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="Ֆինանսական և Իրավաբանական ծառայություններ">
                Ֆինանսական և Իրավաբանական ծառայություններ
              </option>
              <option value="Թվային ծառայություններ">
                Թվային ծառայություններ
              </option>
              <option value="Հաշվապահական ծառայություններ">
                Հաշվապահական ծառայություններ
              </option>
              <option value="ՀՀ Միգրացիա">ՀՀ Միգրացիա</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Նամակ
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Գրեք Ձեր հաղորդագրությունը այստեղ"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Ուղարկել
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center w-full  min-h-[650px] custom_bg px-4 sm:px-6 lg:px-4">
        <div className="p-4 sm:p-10 md:p-16 lg:p-20  bg-white shadow-lg rounded-lg flex flex-col gap-8 items-center text-center">
          {/* Логотип и название */}
          <div className="flex flex-row items-center gap-2">
            {/* <Image
              src="./path-to-logo.svg"
              alt="Pagedone Logo"
              className="w-12 h-12"
            /> */}
            <h1 className="text-2xl font-bold text-gray-900">Allin</h1>
          </div>

          {/* Контактная информация */}
          <div className="flex flex-col gap-4">
            {/* Телефон */}
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl text-indigo-600" />
              <span className="text-lg text-gray-700">+374 60 33 55 75 65</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-indigo-600" />
              <span className="text-lg text-gray-700">
                Pagedone1234@gmail.com
              </span>
            </div>
          </div>
          <hr className="h-1 w-full lg:w-[140%] border-1 bg-indigo-600 mt-5" />
          <div className="flex gap-10">
            <Link href="/">
              <FaTelegram className="text-4xl text-indigo-600 social_icon" />
            </Link>
            <Link href="/">
              <FaLinkedin className="text-4xl text-indigo-600 social_icon" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-4xl text-indigo-600 social_icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
