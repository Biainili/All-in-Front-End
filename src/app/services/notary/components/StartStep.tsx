"use client";

import { useState } from "react";

interface StartStepProps {
  onNext: () => void; // Функция для перехода на следующий шаг
}

export default function StartStep({ onNext }: StartStepProps) { 
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedPersonalData, setAcceptedPersonalData] = useState(false);

  const isButtonDisabled = !(acceptedTerms && acceptedPersonalData);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Ուշադրություն դարձրեք․</h1>
      <ul className="text-start font-bold mb-4 [list-style:inside]">
        <li className="text-md mb-4">
          Փաստաթղթերը պետք է լինեն ամբողջական և լավ որակի։
        </li>
        <li className="text-md mb-4">
          Եթե չեք կարող ժամանակին ներկայանալ, անպայման տեղեկացրեք։
        </li>
        <li className="text-md mb-8">
          Մենք պատասխանատվություն չենք կրում ուշացման, փաստաթղթերի խնդիրների կամ
          ձեր մեղքով ծառայության չեղարկման համար։
        </li>
      </ul>
      <p className="text-lg mb-14">
        Մեր միջոցով դուք խնայում եք ժամանակը, խուսափում հերթերից և ստանում
        պատրաստ փաստաթղթեր արագ ու հարմարավետ։
      </p>

      <div className="text-start mb-4">
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
            className="mr-2"
          />
          Ես ընդունում եմ ծառայության պայմանները։
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={acceptedPersonalData}
            onChange={() => setAcceptedPersonalData(!acceptedPersonalData)}
            className="mr-2"
          />
          Ես տալիս եմ համաձայնություն անձնական տվյալների մշակման համար։
        </label>
      </div>

      <button
        onClick={onNext}
        disabled={isButtonDisabled}
        className={`px-6 py-2 rounded-lg text-white ${
          isButtonDisabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-600"
        }`}
      >
        Սկսել
      </button>
    </div>
  );
}
