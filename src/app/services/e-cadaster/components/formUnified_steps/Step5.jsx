import React from "react";

export default function Step5({ onRestart }) {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">
        Շնորհակալություն գրանցման համար!
      </h2>

      {/* Message */}
      <p className="text-lg text-gray-600 text-center">
        Ձեր ծառայությունը հաջողությամբ գրանցվել է։ Մենք կկապվենք Ձեր հետ
        հաստատման համար։
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={onRestart}
        >
          Վերադառնալ
        </button>
        <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Գլխավոր էջ
        </button>
      </div>
    </div>
  );
}
