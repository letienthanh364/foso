import { classNames } from "primereact/utils";
import { NavLink } from "react-router-dom";
import mainPath from "src/constants/path";
import { NavigateItem } from "src/types/_commons/common.type";

export default function MainHeader() {
  const navigateItems: NavigateItem[] = [
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

  return (
    <div className="w-full h-[72px] flex items-center justify-center bg-blue-new text-white">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img src="/images/logo.png" alt="mrp" />
          <div className="flex items-center text-sm ">
            {navigateItems.map((ele) => {
              return (
                <NavLink
                  key={ele.name}
                  to={ele.url}
                  className={({ isActive }) =>
                    classNames("py-1 px-2  rounded-md", {
                      "bg-blue-light": isActive,
                      "hover:bg-blue-light": !isActive,
                    })
                  }
                >
                  {ele.name}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
