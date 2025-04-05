import { StatusType } from "src/pages/HomePage/_children/HomePage_ProductionProgress/useHomePage_ProductionProgress.hook";
import { TimerangeSortValueType } from "src/pages/HomePage/HomePage";
import { OptionInput } from "src/types/_inputs/option.input.type";

const timeOptions: OptionInput<TimerangeSortValueType>[] = [
  {
    name: "Hôm nay",
    value: "today",
  },
  {
    name: "Tuần này",
    value: "this_week",
  },
  {
    name: "Tháng này",
    value: "this_month",
  },
  {
    name: "Quý này",
    value: "this_quarter",
  },
  {
    name: "Năm nay",
    value: "this_year",
  },
];

const statusOptions: OptionInput<StatusType>[] = [
  {
    name: "Đang sản xuất",
    value: "in_progress",
  },
  {
    name: "Hoàn thành",
    value: "completed",
  },
  {
    name: "Bị hủy",
    value: "cancelled",
  },
];

const CustomSorterOptions = {
  timeOptions,
  statusOptions,
};

export default CustomSorterOptions;
