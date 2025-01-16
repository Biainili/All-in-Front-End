export interface Notary {
  id: number;
  name: string;
  workingHours: string[];
}

export interface City {
  city: string;
  notaries: Notary[];
}

export const cities: City[] = [
  {
    city: "Ереван",
    notaries: [
      {
        id: 1,
        name: "Нотариус А",
        workingHours: ["12:00 - 13:00", "14:00 - 15:00", "16:00 - 17:00"],
      },
      {
        id: 2,
        name: "Нотариус Б",
        workingHours: ["10:00 - 11:00", "13:00 - 14:00"],
      },
    ],
  },
  {
    city: "Гюмри",
    notaries: [
      {
        id: 3,
        name: "Нотариус В",
        workingHours: ["12:00 - 13:00", "14:00 - 15:00", "16:00 - 17:00"],
      },
      {
        id: 4,
        name: "Нотариус Г",
        workingHours: ["12:00 - 13:00", "14:00 - 15:00", "16:00 - 17:00"],
      },
    ],
  },
];
