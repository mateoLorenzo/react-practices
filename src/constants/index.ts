import { atom } from "jotai";

export type ObjectiveType = "OBJ" | "LS" | "RC";

export const numberAtom = atom<number[]>([]);
