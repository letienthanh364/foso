import { NavLink } from "react-router-dom";
import { useMainHeaderReturns } from "../../useMainHeader.hook";
import { classNames } from "primereact/utils";
import { Divider } from "@mui/material";

interface MainHeader_Mobile_MenuContentProps {
  mainHeaderProps: useMainHeaderReturns;
  setOpenMenu: (value: boolean) => void;
}

export default function MainHeader_Mobile_MenuContent({
  mainHeaderProps,
  setOpenMenu,
}: MainHeader_Mobile_MenuContentProps) {
  const { firstNavList, secondNavList } = mainHeaderProps;

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <div className="flex flex-col gap-4 py-2 px-3 sm:py-4 sm:px-6">
      <div className="flex flex-col gap-2">
        {firstNavList.map((ele) => {
          return (
            <NavLink
              key={ele.name}
              to={ele.url}
              onClick={handleClose}
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
      <Divider />
      <div className="flex items-center gap-2 flex-wrap">
        {secondNavList.map((ele) => {
          return ele.name === "noti" ? null : (
            <NavLink
              key={ele.name}
              to={ele.url}
              onClick={handleClose}
              className={({ isActive }) =>
                classNames("p-1 rounded-md border border-black/20", {
                  "bg-blue-light/20": isActive,
                  "hover:bg-blue-light/20": !isActive,
                })
              }
            >
              {ele.iconLabel}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
