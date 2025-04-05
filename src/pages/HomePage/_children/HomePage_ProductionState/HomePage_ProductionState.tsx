import { useHomePage_ProductionState } from "./useHomePage_ProductionState.hook";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import PieChart from "src/components/_common/PieChart";

interface HomePage_ProductionStateProps {}

export default function HomePage_ProductionState({}: HomePage_ProductionStateProps) {
  const { displayData, currentSort, onChangeTimeSort, total } =
    useHomePage_ProductionState();

  return (
    <HomePage_BoxTemplate
      title="Tình hình sản xuất"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
      wrapperClassnames="bg-white shadow-md rounded-2xl pt-0 p-6"
      extendHeaderClassnames="px-4 py-6"
      sortType="time"
    >
      <PieChart title="Lệnh sản xuất" segments={displayData} total={total} />
    </HomePage_BoxTemplate>
  );
}
