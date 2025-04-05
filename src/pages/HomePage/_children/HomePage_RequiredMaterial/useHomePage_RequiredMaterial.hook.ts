import { useState } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import { RequiredMaterial } from "src/types/material/required.material.type";

export const requiredMaterials: RequiredMaterial[] = [
  {
    id: "1",
    name: "Chỉ cotton",
    note: null,
    code: "NVL_000014",
    unit: "Cuộn",
    amount: 8,
    avatar: null,
  },
  {
    id: "2",
    name: "Vải lụa",
    note: null,
    code: "NVL_000024",
    unit: "Mét",
    amount: 8,
    avatar: null,
  },
  {
    id: "3",
    name: "Vải lót",
    note: null,
    code: "NVL_000024",
    unit: "Mét",
    amount: 8,
    avatar: null,
  },
  {
    id: "4",
    name: "Vải chống thấm",
    note: null,
    code: "NVL_000024",
    unit: "Mét",
    amount: 8,
    avatar: null,
  },
  {
    id: "5",
    name: "Vải nỉ",
    note: null,
    code: "NVL_000024",
    unit: "Mét",
    amount: 8,
    avatar: null,
  },
];
export const useHomePage_RequiredMaterial = () => {
  const [currentSort, setCurrentSort] =
    useState<TimerangeSortValueType>("this_week");
  const displayData = currentSort === "this_week" ? requiredMaterials : [];

  const onChangeTimeSort = (value: TimerangeSortValueType) => {
    setCurrentSort(value);
  };

  return { displayData, onChangeTimeSort, currentSort };
};
