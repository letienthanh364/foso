import { useMemo, useState } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import { ApexOptions } from "apexcharts";
import Utils_String from "src/utils/string.util";
import { useViewport } from "src/hooks/common/useViewport";

export interface ProductionPlan {
  name: string;
  planned: number;
  actual: number;
}

const productionData: ProductionPlan[] = [
  { name: "Áo thun", planned: 60, actual: 40 },
  { name: "Áo sơ mi", planned: 100, actual: 60 },
  { name: "Áo thun dài", planned: 80, actual: 20 },
  { name: "Quần baggy", planned: 70, actual: 45 },
  { name: "Quần jeans", planned: 85, actual: 55 },
];

interface useHomePage_ProductionPlanProps {}
export const useHomePage_ProductionPlan =
  ({}: useHomePage_ProductionPlanProps) => {
    const [currentSort, setCurrentSort] =
      useState<TimerangeSortValueType>("this_quarter");
    const displayData = currentSort === "this_quarter" ? productionData : [];

    const onChangeTimeSort = (value: TimerangeSortValueType) => {
      setCurrentSort(value);
    };

    const useChartReturns = useChartData({
      data: displayData,
    });

    return { currentSort, onChangeTimeSort, useChartReturns };
  };

interface useChartDataProps {
  data: ProductionPlan[];
  maxValue?: number;
  planLabel?: string;
  actualLabel?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  colors?: [string, string];
}
const useChartData = ({
  data,
  maxValue,
  planLabel = "Kế hoạch",
  actualLabel = "Thực tế",
  yAxisLabel = "Cái",
  xAxisLabel = "Mặt hàng",
  colors = ["#0375F3", "#1FC583"],
}: useChartDataProps) => {
  const isSmall = useViewport().width < 768;

  const categories = useMemo(
    () =>
      data.map((item) =>
        isSmall
          ? Utils_String.splitStringToArray({ inputString: item.name })
          : item.name
      ),
    [data, isSmall]
  );
  const plannedValues = useMemo(() => data.map((item) => item.planned), [data]);
  const actualValues = useMemo(() => data.map((item) => item.actual), [data]);

  const { calculatedMaxValue, tickAmount } = useMemo(() => {
    if (data.length === 0) {
      return { calculatedMaxValue: 100, tickAmount: 5 };
    }

    const rawMaxValue =
      maxValue || Math.max(...plannedValues, ...actualValues) * 1.2;

    const roundedMax = Math.ceil(rawMaxValue / 20) * 20;

    const ticks = roundedMax / 20;

    return {
      calculatedMaxValue: roundedMax,
      tickAmount: ticks,
    };
  }, [maxValue, plannedValues, actualValues, data]);

  const chartOptions: Partial<ApexOptions> = useMemo(() => {
    return {
      colors: colors,
      xaxis: {
        categories: categories,
        position: "bottom",
        labels: {
          style: {
            fontSize: "12px",
            colors: "#9295A4",
            fontWeight: 400,
          },
          ...(data.length === 0
            ? { formatter: (_val) => "" }
            : { formatter: undefined }),
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        title: {
          text: xAxisLabel,
          style: {
            fontSize: "12px",
            fontWeight: 600,
            color: "#667085",
          },
        },
      },
      yaxis: {
        max: calculatedMaxValue,
        min: 0,
        tickAmount: tickAmount,
        forceNiceScale: true,
        labels: {
          style: {
            fontSize: "12px",
            colors: "#9295A4",
            fontWeight: 400,
          },
        },
        title: {
          text: yAxisLabel,
          rotate: 0,
          offsetY: -130,
          offsetX: 20,
          style: {
            fontSize: "14px",
            fontWeight: 600,
            color: "#667085",
          },
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: () => "",
          },
        },
        style: {
          fontSize: "14px",
          fontFamily: "Lexend Deca, sans-serif",
        },
        marker: {
          show: false,
        },
        fixed: {
          enabled: false,
        },
        theme: "dark",
        fillSeriesColor: false,
      },
      grid: {
        borderColor: "#919EAB33",
        row: {
          colors: ["transparent", "transparent"],
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        fontSize: "12px",
        markers: {
          size: 12,
          shape: "circle",
          strokeWidth: 4,
        },

        itemMargin: {
          horizontal: 16,
          vertical: 0,
        },
        fontWeight: 400,
        showForSingleSeries: true,
        showForNullSeries: true,
        showForZeroSeries: true,
      },
      chart: {
        toolbar: {
          show: false,
        },
        fontFamily: "Inter, sans-serif",
      },
    };
  }, [
    calculatedMaxValue,
    categories,
    colors,
    data.length,
    tickAmount,
    xAxisLabel,
    yAxisLabel,
  ]);

  // Series data
  const seriesData = useMemo(() => {
    return [
      {
        name: planLabel,
        data: plannedValues,
      },
      {
        name: actualLabel,
        data: actualValues,
      },
    ];
  }, [actualLabel, actualValues, planLabel, plannedValues]);

  return { chartOptions, seriesData };
};
