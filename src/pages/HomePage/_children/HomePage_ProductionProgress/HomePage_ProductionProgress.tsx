import React from "react";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import CustomApexChart from "src/components/_common/CustomApexChart";
import { useHomePage_ProductionProgress } from "./useHomePage_ProductionProgress.hook";

interface HomePage_ProductionProgressProps {}

export default function HomePage_ProductionProgress({}: HomePage_ProductionProgressProps) {
  const { displayData, currentStatus, onChangeStatusSort } =
    useHomePage_ProductionProgress();

  return (
    <HomePage_BoxTemplate
      title="Tiến độ sản xuất theo nhóm"
      sortValue={currentStatus}
      onChangeSortValue={onChangeStatusSort}
      wrapperClassnames="bg-white shadow-md rounded-2xl"
      extendHeaderClassnames="px-4 py-6"
      sortType="status"
    >
      <div className="">hello</div>
    </HomePage_BoxTemplate>
  );
}
