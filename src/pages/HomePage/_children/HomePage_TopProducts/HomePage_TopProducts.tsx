import WidgetSummary from "src/components/_common/WidgetSummary";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import { useHomePage_TopProducts } from "./useHomePage_TopProducts.hook";

interface HomePage_TopProductsProps {}

export default function HomePage_TopProducts({}: HomePage_TopProductsProps) {
  const { currentSort, onChangeTimeSort, displayData } =
    useHomePage_TopProducts();

  return (
    <HomePage_BoxTemplate
      title="Top sản phẩm sản xuất nhiều nhất"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
      sortType="time"
    >
      <div className="w-full flex gap-3 flex-wrap">
        {displayData.map((ele, index) => {
          return <WidgetSummary key={ele?.label || index} data={ele} />;
        })}
      </div>
    </HomePage_BoxTemplate>
  );
}
