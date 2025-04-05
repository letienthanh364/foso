import { useState } from "react";

export type StatusType = "in_progress" | "completed" | "cancelled";

export const useHomePage_ProductionProgress = () => {
  const [currentStatus, setCurrentStatus] = useState<StatusType>("completed");
  const displayData = currentStatus === "completed" ? [] : [];

  const onChangeStatusSort = (value: StatusType) => {
    setCurrentStatus(value);
  };

  return { displayData, currentStatus, onChangeStatusSort };
};
