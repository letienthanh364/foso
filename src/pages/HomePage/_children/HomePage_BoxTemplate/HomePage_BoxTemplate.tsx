import { ReactNode } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import TimeSorter from "src/components/_common/TimeSorter";

interface HomePage_BoxTemplateProps {
  title: string;
  sortValue: TimerangeSortValueType;
  onChangeSortValue: (value: TimerangeSortValueType) => void;
  children: ReactNode;
}

export default function HomePage_BoxTemplate({
  title,
  onChangeSortValue,
  sortValue,
  children,
}: HomePage_BoxTemplateProps) {
  return (
    <div className="container ">
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between w-full gap-2">
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
