import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import { useHomePage_ProductionPlan } from "./useHomePage_ProductionPlan.hook";
import CustomApexChart from "src/components/_common/CustomApexChart";

interface HomePage_ProductionPlanProps {}

export default function HomePage_ProductionPlan({}: HomePage_ProductionPlanProps) {
  const { currentSort, onChangeTimeSort, useChartReturns } =
    useHomePage_ProductionPlan({});

  const { chartOptions, seriesData } = useChartReturns;

  return (
    <HomePage_BoxTemplate
      title="Kế hoạch sản xuất"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
      wrapperClassnames=""
      extendHeaderClassnames="px-4"
    >
      <div className="">
        <CustomApexChart
          type="bar"
          series={seriesData}
          options={chartOptions}
          height={350}
        />
      </div>
    </HomePage_BoxTemplate>
  );
}
