import React, { useState, useEffect } from "react";
import { City } from "../data/cities";
import { Service } from "../data/services";

interface Step1Props {
  services: Service[];
  cities: City[];
  formData: {
    city: string;
    notaryId: number | null;
    serviceId: number | null;
    date: string | null;
    time: string | null;
  };
  onComplete: (data: {
    city: string;
    notaryId: number | null;
    serviceId: number;
    fixedPrice: number;
    totalFee: number;
    date: string;
    time: string;
  }) => void;
  onUpdate: (
    data: Partial<{
      city: string;
      serviceId: number | null;
      notaryId: number | null;
      date: string | null;
      time: string | null;
    }>
  ) => void;
}

export default function StepOne({
  services,
  cities,
  formData,
  onComplete,
  onUpdate,
}: Step1Props) {
  const [selectedCity, setSelectedCity] = useState(
    formData.city || cities[0].city
  );
  const [selectedService, setSelectedService] = useState<number | null>(
    formData.serviceId || null
  );
  const [selectedNotary, setSelectedNotary] = useState<number | null>(
    formData.notaryId || null
  );
  const [selectedOptions, setSelectedOptions] = useState<Set<number>>(
    new Set()
  );
  const [totalFee, setTotalFee] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(
    formData.time || null
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    formData.date || null
  );

  const filteredNotaries =
    cities.find((city) => city.city === selectedCity)?.notaries || [];
  const selectedNotaryData = filteredNotaries.find(
    (notary) => notary.id === selectedNotary
  );
  const workingHours = selectedNotaryData?.workingHours || [];

  const today = new Date();
  const availableDates = Array.from({ length: 3 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 1);
    return date.toISOString().split("T")[0];
  });

  useEffect(() => {
    if (selectedService !== null) {
      const service = services.find((s) => s.id === selectedService);
      if (service) {
        let fee = service.fees.base;
        selectedOptions.forEach((optionIndex) => {
          fee += service.fees.optional?.[optionIndex]?.value || 0;
        });
        setTotalFee(fee);
      }
    }
  }, [selectedService, selectedOptions]);

  useEffect(() => {
    if (
      formData.serviceId !== selectedService ||
      formData.city !== selectedCity ||
      formData.notaryId !== selectedNotary ||
      formData.date !== selectedDate ||
      formData.time !== selectedTime
    ) {
      onUpdate({
        serviceId: selectedService,
        city: selectedCity,
        notaryId: selectedNotary,
        date: selectedDate,
        time: selectedTime,
      });
    }
  }, [
    selectedService,
    selectedCity,
    selectedNotary,
    selectedDate,
    selectedTime,
  ]);

  const handleOptionChange = (index: number) => {
    setSelectedOptions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    if (
      selectedService !== null &&
      selectedNotary !== null &&
      selectedDate &&
      selectedTime
    ) {
      const service = services.find((s) => s.id === selectedService);
      onComplete({
        city: selectedCity,
        notaryId: selectedNotary,
        serviceId: selectedService,
        fixedPrice: service?.fixedPrice || 0,
        totalFee,
        date: selectedDate,
        time: selectedTime,
      });
    }
  };

  const isFormValid =
    selectedCity &&
    selectedService !== null &&
    selectedNotary !== null &&
    selectedDate &&
    selectedTime;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-6">
        Քայլ 1: Ծառայության ընտրություն
      </h2>
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="service" className="block font-medium mb-2">
            Ընտրեք ծառայությունը
          </label>
          <select
            id="service"
            value={selectedService || ""}
            onChange={(e) => setSelectedService(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Ընտրեք ծառայությունը
            </option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.service_name}
              </option>
            ))}
          </select>
        </div>

        {selectedService !== null &&
          services
            .find((s) => s.id === selectedService)
            ?.fees.optional?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  checked={selectedOptions.has(index)}
                  onChange={() => handleOptionChange(index)}
                />
                <label htmlFor={`option-${index}`}>
                  {option.label} (+{option.value} դրամ)
                </label>
              </div>
            ))}

        <div>
          <label htmlFor="city" className="block font-medium mb-2">
            Ընտրեք քաղաքը
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {cities.map((city) => (
              <option key={city.city} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="notary" className="block font-medium mb-2">
            Ընտրեք նոտարական կետը
          </label>
          <select
            id="notary"
            value={selectedNotary || ""}
            onChange={(e) => setSelectedNotary(Number(e.target.value))}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Ընտրեք նոտարական կետը
            </option>
            {filteredNotaries.map((notary) => (
              <option key={notary.id} value={notary.id}>
                {notary.name}
              </option>
            ))}
          </select>
        </div>

        {selectedNotary && (
          <div>
            <label htmlFor="time" className="block font-medium mb-2">
              Ընտրեք ժամանակը
            </label>
            <select
              id="time"
              value={selectedTime || ""}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Ընտրեք ժամանակը
              </option>
              {workingHours.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="date" className="block font-medium mb-2">
            Ընտրեք ամսաթիվը
          </label>
          <select
            id="date"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Ընտրեք ամսաթիվը
            </option>
            {availableDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between">
          <div className="text-lg font-bold mt-2">
            Պետտուրք: {totalFee} դրամ
          </div>
          <div className="text-lg font-bold mt-2">
            Ծառայության գինը:{" "}
            {services.find((s) => s.id === selectedService)?.fixedPrice} դրամ
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            disabled={!isFormValid}
            onClick={handleSubmit}
            className={`px-4 py-2 rounded-lg text-white ${
              isFormValid
                ? "bg-indigo-500 hover:bg-indigo-600"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Շարունակել
          </button>
        </div>
      </form>
    </div>
  );
}
