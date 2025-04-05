import HomePage_ProductionPlan from "./_children/HomePage_ProductionPlan";
import HomePage_ProductionProgress from "./_children/HomePage_ProductionProgress";
import HomePage_ProductionState from "./_children/HomePage_ProductionState";
import HomePage_RequiredMaterial from "./_children/HomePage_RequiredMaterial";
import HomePage_TopCustomers from "./_children/HomePage_TopCustomers";
import HomePage_TopProducts from "./_children/HomePage_TopProducts";

interface HomePageProps {}

export type TimerangeSortValueType =
  | "today"
  | "this_week"
  | "this_month"
  | "this_quarter"
  | "this_year";

export default function HomePage({}: HomePageProps) {
  return (
    <div className="w-full flex flex-col gap-6 py-6">
      <HomePage_TopProducts />

      <div className="grid grid-cols-2 gap-6 container">
        <div className="col-span-1">
          <HomePage_ProductionPlan />
        </div>
        <div className="col-span-1">
          <HomePage_TopCustomers />
        </div>
      </div>

      <div className="w-full grid grid-cols-3 container gap-6">
        <div className="col-span-1 min-h-full">
          <HomePage_ProductionState />
        </div>
        <div className="col-span-1 min-h-full">
          <HomePage_ProductionProgress />
        </div>
        <div className="col-span-1 min-h-full">
          <HomePage_RequiredMaterial />
        </div>
      </div>
    </div>
  );
}
