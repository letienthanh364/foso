import { toast } from "sonner";
import {
  BellIcon,
  ConvertShapeIcon,
  GearIcon,
  MessageTextIcon,
  QuestionIcon,
} from "src/assets/icons";
import mainPath from "src/constants/path";
import { NavigateItem } from "src/types/_commons/common.type";

export const useMainHeader = () => {
  const onSearch = (value: string | undefined) => {
    toast.success(value, { duration: 1000 });
  };

  // ! left nav list
  const firstNavList: NavigateItem[] = [
    {
      name: "Danh mục",
      url: mainPath.categories,
    },
    {
      name: "Bán & Xuất hàng",
      url: mainPath.salesExports,
    },
    {
      name: "Mua & Nhập hàng",
      url: mainPath.purchasesImports,
    },
    {
      name: "Kho & Sản xuất",
      url: mainPath.warehouseProduction,
    },
    {
      name: "Kế toán",
      url: mainPath.accounting,
    },
    {
      name: "Báo cáo & Thống kê",
      url: mainPath.reportsStatistics,
    },
    {
      name: "Tiện ích",
      url: mainPath.utilities,
    },
  ];

  // ! right nav list
  const secondNavList: NavigateItem[] = [
    {
      name: "gear",
      url: "/gear",
      iconLabel: <GearIcon />,
    },
    {
      name: "convert",
      url: "/convert",
      iconLabel: <ConvertShapeIcon />,
    },
    {
      name: "message",
      url: "/message",
      iconLabel: <MessageTextIcon />,
    },
    {
      name: "noti",
      url: "/noti",
      iconLabel: <BellIcon />,
    },
    {
      name: "help",
      url: "/help",
      iconLabel: <QuestionIcon />,
    },
  ];

  return { onSearch, firstNavList, secondNavList };
};
