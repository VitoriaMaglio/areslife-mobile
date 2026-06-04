import { ReactNode } from "react";

export type TouristStatus = "Seguro" | "Atenção" | "Crítico";

export type Tourist = {
  missionType: ReactNode;
  healthStatus: ReactNode;
  nationality: ReactNode;
  ticketStatus: ReactNode;
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