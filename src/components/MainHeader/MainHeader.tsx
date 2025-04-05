import { classNames } from "primereact/utils";
import { NavLink } from "react-router-dom";
import { useMainHeader } from "./useMainHeader.hook";
import SearchBar from "../_common/SearchBar";
import { Badge } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader() {
  const { onSearch, firstNavList, secondNavList } = useMainHeader();

  return (
    <div className="w-full h-[72px] flex items-center justify-center bg-blue-new text-white">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img src="/images/logo.png" alt="mrp" />
          <div className="flex items-center text-sm ">
            {firstNavList.map((ele) => {
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
        <div className="flex items-center gap-4 justify-end">
          <SearchBar onSearch={onSearch} placeholder="Tìm kiếm" />
          <div className="flex items-center gap-3">
            {secondNavList.map((ele) => {
              return (
                <NavLink
                  key={ele.name}
                  to={ele.url}
                  className={({ isActive }) =>
                    classNames("p-1 rounded-md", {
                      "bg-white/20": isActive,
                      "hover:bg-white/20": !isActive,
                    })
                  }
                >
                  {ele.name === "noti" ? (
                    <Badge badgeContent={1} color="error">
                      {ele.iconLabel}
                    </Badge>
                  ) : (
                    ele.iconLabel
                  )}
                </NavLink>
              );
            })}
          </div>
          <div className={classNames("flex items-center gap-1 ")}>
            <img src="images/Rectangle_2026.png" alt="Rectangle_2026" />
            <button
              type="button"
              className="hover:bg-white/20 p-1 rounded-lg
            "
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
