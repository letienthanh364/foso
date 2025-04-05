import { useState } from "react";
import { ApexOptions } from "apexcharts";

export interface ApexChartState {
  options: ApexOptions;
  series: ApexOptions["series"];
  type: "bar" | "line" | "area" | "pie" | "donut" | "radar" | "heatmap";
  height: number | string;
  width?: string | number;
}

export interface UseCustomApexChartOptions {
  initialOptions?: ApexOptions;
  initialSeries?: ApexOptions["series"];
  initialType?: ApexChartState["type"];
  initialHeight?: number | string;
  initialWidth?: string | number;
}

export const useCustomApexChart = ({
  initialOptions = {},
  initialSeries = [],
  initialType = "bar",
  initialHeight = 350,
  initialWidth,
}: UseCustomApexChartOptions = {}) => {
  const [chartState, setChartState] = useState<ApexChartState>({
    options: initialOptions,
    series: initialSeries,
    type: initialType,
    height: initialHeight,
    width: initialWidth,
  });

  const updateOptions = (newOptions: Partial<ApexOptions>) => {
    setChartState((prevState) => ({
      ...prevState,
      options: { ...prevState.options, ...newOptions },
    }));
  };

  const updateSeries = (newSeries: ApexOptions["series"]) => {
    setChartState((prevState) => ({
      ...prevState,
      series: newSeries,
    }));
  };

  const updateType = (newType: ApexChartState["type"]) => {
    setChartState((prevState) => ({
      ...prevState,
      type: newType,
    }));
  };

  const updateHeight = (newHeight: number | string) => {
    setChartState((prevState) => ({
      ...prevState,
      height: newHeight,
    }));
  };

  const updateWidth = (newWidth: number | string) => {
    setChartState((prevState) => ({
      ...prevState,
      width: newWidth,
    }));
  };

  const updateChart = (newState: Partial<ApexChartState>) => {
    setChartState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return {
    chartState,
    updateOptions,
    updateSeries,
    updateType,
    updateHeight,
    updateWidth,
    updateChart,
  };
};

export default useCustomApexChart;
