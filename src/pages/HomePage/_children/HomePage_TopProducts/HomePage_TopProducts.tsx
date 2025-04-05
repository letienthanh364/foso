import { useState } from "react";
import TimeSorter from "src/components/_common/TimeSorter";
import WidgetSummary from "src/components/_common/WidgetSummary";

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
  const [currentSort, setCurrentSort] = useState<string>("month");
  const displayData = currentSort === "month" ? productData : emptyData;

  const onChangeTimeSort = (value: string) => {
    setCurrentSort(value);
  };

  return (
    <div className="container ">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between w-full gap-2">
          <p className="font-medium text-lg capitalize flex-grow text-left">
            Top sản phẩm sản xuất nhiều nhất
          </p>

          <TimeSorter value={currentSort} onChange={onChangeTimeSort} />
        </div>

        <div className="w-full flex gap-3">
          {displayData.map((ele, index) => {
            return <WidgetSummary key={ele?.label || index} data={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}
