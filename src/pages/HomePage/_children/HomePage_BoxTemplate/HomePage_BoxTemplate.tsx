import { ReactNode } from "react";
import classNames from "classnames";
import CustomSorter from "src/components/_common/CustomSorter";
import CustomSorterOptions from "src/components/_common/CustomSorter/options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

interface HomePage_BoxTemplateProps<T> {
  title: string;
  sortValue: T;
  onChangeSortValue: (value: T) => void;
  children: ReactNode;
  wrapperClassnames?: string;
  extendHeaderClassnames?: string;
  sortType: "time" | "status";
}

export default function HomePage_BoxTemplate<T>({
  title,
  onChangeSortValue,
  sortValue,
  children,
  wrapperClassnames = "container",
  extendHeaderClassnames,
  sortType,
}: HomePage_BoxTemplateProps<T>) {
  return (
    <div className={wrapperClassnames}>
      <div className="flex w-full flex-col gap-4">
        <div
          className={classNames(
            "flex items-start xl:items-center justify-between w-full gap-2",
            extendHeaderClassnames
          )}
        >
          <p className="font-medium xl:text-lg capitalize flex-grow text-left">
            {title}
          </p>

          <CustomSorter
            value={sortValue}
            onChangeValue={onChangeSortValue}
            optionList={
              sortType === "time"
                ? CustomSorterOptions.timeOptions
                : CustomSorterOptions.statusOptions
            }
            iconLable={
              sortType === "time" ? (
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="sm"
                  className="text-[#9295A4]"
                />
              ) : undefined
            }
          />
        </div>

        {children}
      </div>
    </div>
  );
}
