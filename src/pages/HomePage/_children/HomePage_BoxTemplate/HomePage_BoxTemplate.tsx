import { ReactNode } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import TimeSorter from "src/components/_common/TimeSorter";
import classNames from "classnames";

interface HomePage_BoxTemplateProps {
  title: string;
  sortValue: TimerangeSortValueType;
  onChangeSortValue: (value: TimerangeSortValueType) => void;
  children: ReactNode;
  wrapperClassnames?: string;
  extendHeaderClassnames?: string;
}

export default function HomePage_BoxTemplate({
  title,
  onChangeSortValue,
  sortValue,
  children,
  wrapperClassnames = "container",
  extendHeaderClassnames,
}: HomePage_BoxTemplateProps) {
  return (
    <div className={wrapperClassnames}>
      <div className="flex w-full flex-col gap-4">
        <div
          className={classNames(
            "flex items-center justify-between w-full gap-2",
            extendHeaderClassnames
          )}
        >
          <p className="font-medium text-lg capitalize flex-grow text-left">
            {title}
          </p>

          <TimeSorter value={sortValue} onChange={onChangeSortValue} />
        </div>

        {children}
      </div>
    </div>
  );
}
