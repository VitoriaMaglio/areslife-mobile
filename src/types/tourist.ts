export type TouristStatus = "Seguro" | "Atenção" | "Crítico";

export type Tourist = {
  id: string;
  name: string;
  age: number;
  origin: string;
  destination: string;
  status: TouristStatus;
  oxygenLevel: number;
  heartRate: number;
  missionDays: number;
};