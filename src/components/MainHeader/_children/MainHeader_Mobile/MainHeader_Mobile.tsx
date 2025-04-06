import { useState } from "react";
import { useMainHeaderReturns } from "../../useMainHeader.hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideDrawer from "src/components/_common/SideDrawer";
import MainHeader_Mobile_MenuContent from "./MainHeader_Mobile_MenuContent";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import mainPath from "src/constants/path";
import { BellIcon } from "src/assets/icons";
import SearchBar from "src/components/_common/SearchBar";

interface MainHeader_MobileProps {
  mainHeaderProps: useMainHeaderReturns;
}

export default function MainHeader_Mobile({
  mainHeaderProps,
}: MainHeader_MobileProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const { onSearch } = mainHeaderProps;

  return (
    <div className="container">
      <div className="w-full flex items-center justify-between">
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
          className="rounded-lg py-1 px-2 border hover:bg-white/20 border-white"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="flex items-center justify-end gap-4 sm:gap-6">
          <div className="items-center justify-center">
            <SearchBar
              onSearch={onSearch}
              className="w-32 bg-transparent border-none outline-none"
            />
          </div>

          <NavLink
            to={mainPath.notification}
            className={({ isActive }) =>
              classNames("p-1 rounded-md", {
                "bg-white/20": isActive,
                "hover:bg-white/20": !isActive,
              })
            }
          >
            <Badge badgeContent={1} color="error">
              <BellIcon />
            </Badge>
          </NavLink>
        </div>
      </div>

      <SideDrawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        direction="ltr"
      >
        <MainHeader_Mobile_MenuContent
          mainHeaderProps={mainHeaderProps}
          setOpenMenu={setOpenMenu}
        />
      </SideDrawer>
    </div>
  );
}
