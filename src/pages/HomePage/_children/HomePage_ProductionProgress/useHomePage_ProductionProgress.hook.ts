import { useState } from "react";

export type StatusType = "in_progress" | "completed" | "cancelled";

interface ProductionProgress {
  count: number;
  total: number;
  name: string;
}

const productionProgressData: ProductionProgress[] = [
  {
    name: "Áo sơ mi dài tay",
    count: 123,
    total: 246,
  },
  {
    name: "Áo sơ mi cut tay",
    count: 321,
    total: 428,
  },
  {
    name: "Quần baggy",
    count: 231,
    total: 513,
  },
  {
    name: "Quần tây",
    count: 999,
    total: 1665,
  },
  {
    name: "Đầm maxi",
    count: 876,
    total: 973,
  },
  {
    name: "Áo hoodie",
    count: 765,
    total: 5100,
  },
  {
    name: "Áo khoác bomber",
    count: 543,
    total: 2262,
  },
];

const emptyData: ProductionProgress[] = Array(7)
  .fill(0)
  .map((_) => {
    return {
      name: "Chưa có mặt hàng",
      count: 0,
      total: -1,
    };
  });

export const useHomePage_ProductionProgress = () => {
  const [currentStatus, setCurrentStatus] = useState<StatusType>("completed");
  const displayData =
    currentStatus === "completed" ? productionProgressData : emptyData;

  const onChangeStatusSort = (value: StatusType) => {
    setCurrentStatus(value);
  };

  return { displayData, currentStatus, onChangeStatusSort };
};
