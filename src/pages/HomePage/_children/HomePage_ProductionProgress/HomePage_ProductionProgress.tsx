import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import { useHomePage_ProductionProgress } from "./useHomePage_ProductionProgress.hook";
import FillBar from "src/components/_common/FillBar";

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
      <div className="py-2 w-full flex flex-col gap-8 px-6">
        {displayData.map((ele, index) => {
          const { name, count, total } = ele;
          return (
            <FillBar
              key={total === -1 ? index : name}
              count={count}
              total={total}
              label={name}
            />
          );
        })}
      </div>
    </HomePage_BoxTemplate>
  );
}
