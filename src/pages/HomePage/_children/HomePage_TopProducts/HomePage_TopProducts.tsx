import { useState } from "react";
import WidgetSummary from "src/components/_common/WidgetSummary";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import { TimerangeSortValueType } from "../../HomePage";

interface HomePage_TopProductsProps {}

interface WidgetItem {
  label: string;
  value: number;
  percentChange: number;
}

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

export default function HomePage_TopProducts({}: HomePage_TopProductsProps) {
  const [currentSort, setCurrentSort] =
    useState<TimerangeSortValueType>("this_month");
  const displayData = currentSort === "this_month" ? productData : emptyData;

  const onChangeTimeSort = (value: TimerangeSortValueType) => {
    setCurrentSort(value);
  };

  return (
    <HomePage_BoxTemplate
      title="Top sản phẩm sản xuất nhiều nhất"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
    >
      <div className="w-full flex gap-3">
        {displayData.map((ele, index) => {
          return <WidgetSummary key={ele?.label || index} data={ele} />;
        })}
      </div>
    </HomePage_BoxTemplate>
  );
}
