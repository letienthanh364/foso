import { useHomePage_TopCustomers } from "./useHomePage_TopCustomer.hook";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import CustomApexChart from "src/components/_common/CustomApexChart";
import { useElementOffset } from "src/hooks/common/useElementOffset";

interface HomePage_TopCustomerProps {}

export default function HomePage_TopCustomers({}: HomePage_TopCustomerProps) {
  const { elementRef, elementWidth } = useElementOffset();
  const { useChartReturns, currentSort, onChangeTimeSort } =
    useHomePage_TopCustomers({ currentChartWidth: elementWidth });
  const { seriesData, chartOptions } = useChartReturns;

  return (
    <HomePage_BoxTemplate
      title="Top 5 khách hàng có sản lượng nhiều nhất"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
      wrapperClassnames="bg-white shadow-md rounded-2xl"
      extendHeaderClassnames="px-4 py-6"
      sortType="time"
    >
      <div className="" ref={elementRef}>
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
