import { useState } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import { WidgetItem } from "src/components/_common/WidgetSummary/WidgetSummary";

const productData: WidgetItem[] = [
  {
    label: "Áo sơ mi dài tay",
    value: 48,
    percentChange: 8.2,
  },
  {
    label: "Quần tây",
    value: 18,
    percentChange: -5,
  },
  {
    label: "Áo hoodie",
    value: 40,
    percentChange: 12,
  },
  {
    label: "Đầm maxi",
    value: 23,
    percentChange: 3.5,
  },
  {
    label: "Áo thun cổ tròn",
    value: 48,
    percentChange: 4.7,
  },
];

const emptyData = [undefined, undefined, undefined, undefined, undefined];

export const useHomePage_TopProducts = () => {
  const [currentSort, setCurrentSort] =
    useState<TimerangeSortValueType>("this_month");
  const displayData = currentSort === "this_month" ? productData : emptyData;

  const onChangeTimeSort = (value: TimerangeSortValueType) => {
    setCurrentSort(value);
  };

  return { displayData, currentSort, onChangeTimeSort };
};
