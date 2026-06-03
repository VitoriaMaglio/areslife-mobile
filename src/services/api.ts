import axios from "axios";
import { Tourist } from "../types/tourist";

/*
  ============================================================================
  INTEGRAÇÃO COM A API - ARESLIFE
  ============================================================================

  Este arquivo centraliza a comunicação do app mobile com a API do back-end.

  Por enquanto, os dados abaixo estão simulados para permitir que o front-end
  funcione e seja testado mesmo antes da API estar totalmente pronta.

  Quando a API estiver pronta, alterar apenas o "baseURL" abaixo para o link real
  da API do projeto.

  Exemplo:
  baseURL: "https://areslife-api.onrender.com"

  Depois disso, as funções getResources() e getTourists() podem ser adaptadas
  para buscar os dados reais usando api.get().
*/

export const api = axios.create({
  baseURL: "https://api.example.com", // TODO: substituir pelo link real da API do back-end
  timeout: 10000,
});

export type Resource = {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: "Bom" | "Atenção" | "Crítico";
  icon: string;
};

export const resources: Resource[] = [
  {
    id: "1",
    name: "Oxigênio",
    value: 82,
    unit: "%",
    status: "Bom",
    icon: "weather-windy",
  },
  {
    id: "2",
    name: "Água",
    value: 58,
    unit: "%",
    status: "Atenção",
    icon: "water",
  },
  {
    id: "3",
    name: "Energia",
    value: 74,
    unit: "%",
    status: "Bom",
    icon: "flash",
  },
  {
    id: "4",
    name: "Temperatura",
    value: 21,
    unit: "°C",
    status: "Bom",
    icon: "thermometer",
  },
];

export const tourists: Tourist[] = [
  {
    id: "1",
    name: "Marina Magalhães",
    age: 19,
    origin: "Brasil",
    destination: "Marte",
    status: "Seguro",
    oxygenLevel: 96,
    heartRate: 82,
    missionDays: 4,
  },
  {
    id: "2",
    name: "João Pedro",
    age: 21,
    origin: "Brasil",
    destination: "Lua",
    status: "Atenção",
    oxygenLevel: 88,
    heartRate: 101,
    missionDays: 7,
  },
  {
    id: "3",
    name: "Bruno Vinicius",
    age: 20,
    origin: "Brasil",
    destination: "Marte",
    status: "Seguro",
    oxygenLevel: 94,
    heartRate: 79,
    missionDays: 5,
  },
];

/*
  ============================================================================
  FUNÇÕES TEMPORÁRIAS COM MOCK
  ============================================================================

  Atualmente essas funções retornam os dados simulados acima.

  Quando o back-end estiver funcionando, trocar por chamadas reais da API.

  Exemplo futuro:

  export async function getResources() {
    const response = await api.get("/resources");
    return response.data;
  }

  export async function getTourists() {
    const response = await api.get("/tourists");
    return response.data;
  }
*/

export async function getResources() {
  return resources;
}

export async function getTourists() {
  return tourists;
}