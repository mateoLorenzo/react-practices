import { atom } from "jotai";

export type ObjectiveType = "OBJ" | "LS" | "RC";

export const numberAtom = atom<number[]>([]);

export interface FilterOption {
  id: number;
  name: string;
}

export const initialFilterOptions = [
  { id: 1, name: "Jerarquía" },
  { id: 2, name: "Responsable " },
  { id: 3, name: "Tipo OKR" },
];

export const hierarchyFilterOptions = [
  { id: 5, name: "Departamental" },
  { id: 6, name: "Organizacional" },
];
export const responsibleFilterOptions = [
  { id: 7, name: "Pepe Perez" },
  { id: 8, name: "Harry Kane" },
  { id: 9, name: "Michael Jackson" },
];
export const typeFilterOptions = [
  { id: 10, name: "Cualitativo" },
  { id: 11, name: "Cuantitativo" },
];

export const departmentalFiltersList = [
  "Todos (15)", //TODO: Calculate total numbers
  "Customer Success",
  "Marketing ",
  "Operaciones ",
  "Producto ",
  "Ventas ",
  "Customer Success 2",
  "Marketing 2",
  "Operaciones 2",
  "Producto 2",
  "Ventas 2",
  "Customer Success 3",
  "Marketing 3",
  "Operaciones 3",
  "Producto 3",
  "Ventas 3",
];
