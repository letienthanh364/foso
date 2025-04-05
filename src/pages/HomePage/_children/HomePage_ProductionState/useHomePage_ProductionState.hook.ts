import { useState } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import { PieChartSegment } from "src/components/_common/PieChart/PieChart";

const productionData: PieChartSegment[] = [
  { color: "#FF9D2D", percentage: 30, count: 5, label: "Chưa hoàn thành" },
  { color: "#2D88FF", percentage: 40, count: 6, label: "Đang sản xuất" },
  { color: "#30CE7D", percentage: 30, count: 5, label: "Hoàn thành" },
];

const emptyData: PieChartSegment[] = [
  { color: "#FF9D2D", percentage: 0, count: 0, label: "Chưa hoàn thành" },
  { color: "#2D88FF", percentage: 0, count: 0, label: "Đang sản xuất" },
  { color: "#30CE7D", percentage: 0, count: 0, label: "Hoàn thành" },
];

export const useHomePage_ProductionState = () => {
  const [currentSort, setCurrentSort] =
    useState<TimerangeSortValueType>("today");
  const displayData = currentSort === "today" ? productionData : emptyData;

  const onChangeTimeSort = (value: TimerangeSortValueType) => {
    setCurrentSort(value);
  };

  const total = displayData.reduce((acc, ele) => acc + ele.count, 0);

  return { displayData, currentSort, onChangeTimeSort, total };
};
