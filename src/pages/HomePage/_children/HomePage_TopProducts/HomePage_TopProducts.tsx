import TimeSorter from "src/components/_common/TimeSorter";
import WidgetSummary from "src/components/_common/WidgetSummary";

interface HomePage_TopProductsProps {}

interface WidgetItem {
  label: string;
  value: number;
  percentageChange: number;
}

const widgetList: WidgetItem[] = [
  {
    label: "Áo sơ mi dài tay",
    value: 48,
    percentageChange: 8.2,
  },
  {
    label: "Quần tây",
    value: 18,
    percentageChange: -5,
  },
  {
    label: "Áo hoodie",
    value: 40,
    percentageChange: 12,
  },
  {
    label: "Đầm maxi",
    value: 23,
    percentageChange: 3.5,
  },
  {
    label: "Áo thun cổ tròn",
    value: 48,
    percentageChange: 4.7,
  },
];

export default function HomePage_TopProducts({}: HomePage_TopProductsProps) {
  return (
    <div className="container ">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between w-full gap-2">
          <p className="font-medium text-lg capitalize flex-grow text-left">
            Top sản phẩm sản xuất nhiều nhất
          </p>

          <TimeSorter value="month" />
        </div>

        <div className="w-full flex gap-3">
          {widgetList.map((ele) => {
            return (
              <WidgetSummary
                key={ele.label}
                value={ele.value}
                percentChange={ele.percentageChange}
                label={ele.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
