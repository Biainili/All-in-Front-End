"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contractservices() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="py-24 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full min-h-[650px]">
          <div className="w-full lg:w-1/2">
            <Image
              src="/img/ContractServices-Allin.jpg"
              alt="FAQ tailwind section"
              className="w-full rounded-xl object-cover"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h2 className="text-3xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left custom_showld">
                  Պայմանագրային ծառայություններ
                </h2>
              </div>
              <div className="accordion-group">
                {[
                  {
                    question: "Ֆինանսական և Իրավաբանական ծառայություններ",
                    answer:
                      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
                  },
                  {
                    question: "Թվային ծառայություններ",
                    answer:
                      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence.",
                  },
                  {
                    question: "Հաշվապահական ծառայություններ",
                    answer:
                      "To reset your password, click on 'Forgot password,' enter your email, and follow the instructions sent to your email.",
                  },
                  {
                    question: "ՀՀ Միգրացիա",
                    answer:
                      "The payment process is simple and secure. Choose a service, proceed to checkout, and select your preferred payment method.",
                  },
                  {
                    question: "Գնահատում և չափագրում",
                    answer:
                      "The payment process is simple and secure. Choose a service, proceed to checkout, and select your preferred payment method.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`accordion py-8 border-b border-solid border-indigo-600  ${
                      openAccordion === index ? "active" : ""
                    }`}
                  >
                    <button
                      className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 custom_showld"
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5>{item.question}</h5>
                      <svg
                        className={`transition duration-500 ${
                          openAccordion === index ? "rotate-180" : ""
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                        openAccordion === index ? "max-h-screen" : "max-h-0"
                      }`}
                    >
                      <p className="text-base text-gray-500 font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
