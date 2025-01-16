export interface Service {
  id: number;
  service_name: string;
  requiredDocuments: string[];
  fixedPrice: number; // Фиксированная цена услуги
  fees: { // Госпошлины
    base: number; // Базовая госпошлина
    optional?: { // Опциональные изменения госпошлины
      label: string; // Название опции
      value: number; // Дополнительная сумма
    }[];
  };
  information: string; // Информация о документе
}

export const services: Service[] = [
  {
    id: 1,
    service_name: "Оформление договора",
    requiredDocuments: ["Паспорт", "Договор"],
    fixedPrice: 5000,
    fees: {
      base: 3000,
      optional: [
        { label: "Опция для физического лица", value: 1000 },
        { label: "Дополнительная проверка", value: 500 },
      ],
    },
    information: `Информация об услуге...`,
  },
  {
    id: 2,
    service_name: "Нотариальное заверение",
    requiredDocuments: ["Паспорт"],
    fixedPrice: 7000,
    fees: {
      base: 5000,
    },
    information: `Информация о заверении...`,
  },
];
