import { ApexOptions } from "apexcharts";
import { useMemo, useState } from "react";
import { TimerangeSortValueType } from "../../HomePage";
import { min } from "lodash";

interface CustomerSales {
  name: string;
  value: number;
  tooltip?: string;
}

const customerSalesData: CustomerSales[] = [
  { name: "Công ty Dệt may Happy Polla", value: 2900 },
  { name: "Công ty May mặc Saigon trendy", value: 2800 },
  { name: "Outlet Lemon squeeze", value: 3100 },
  { name: "Shop quần áo streetwear New York", value: 2700 },
  { name: "Shop thời trang công sở Basic Office", value: 2650 },
];

interface useHomePage_TopCustomersProps {
  currentChartWidth: number;
}
export const useHomePage_TopCustomers = ({
  currentChartWidth,
}: useHomePage_TopCustomersProps) => {
  const [currentSort, setCurrentSort] =
    useState<TimerangeSortValueType>("this_year");
  const displayData = currentSort === "this_year" ? customerSalesData : [];

  const onChangeTimeSort = (value: TimerangeSortValueType) => {
    setCurrentSort(value);
  };

  const useChartReturns = useHorizontalBarChart({
    data: displayData,
    barColor: "#0375F3",
    xAxisLabel: "Sản lượng",
    yAxisLabel: "Khách hàng",
    currentChartWidth,
  });

  return { currentSort, onChangeTimeSort, useChartReturns };
};

interface useHorizontalBarChartProps {
  data: CustomerSales[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  barColor?: string;
  currentChartWidth: number;
}
const useHorizontalBarChart = ({
  data,
  xAxisLabel = "Sản lượng",
  yAxisLabel = "Khách hàng",
  barColor = "#0375F3",
  currentChartWidth,
}: useHorizontalBarChartProps) => {
  const dataIsEmpty = data.length === 0;

  const customers = useMemo(() => data.map((item) => item.name), [data]);

  const values = useMemo(() => data.map((item) => item.value), [data]);

  const { calculatedMaxValue, tickAmount } = useMemo(() => {
    // Handle empty data case
    if (data.length === 0) {
      return { calculatedMaxValue: 3200, tickAmount: 4 };
    }

    // Find the raw max value from the data
    const rawMaxValue = Math.max(...values);

    const intervalSize = 800;
    const roundedMax = Math.ceil(rawMaxValue / intervalSize) * intervalSize;

    // Calculate how many ticks we need
    const ticks = roundedMax / intervalSize;

    return {
      calculatedMaxValue: roundedMax,
      tickAmount: ticks,
    };
  }, [values, data]);

  // Chart options
  const chartOptions: Partial<ApexOptions> = useMemo(() => {
    return {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
        fontFamily: "Lexend Deca, sans-serif",
      },
      colors: [barColor],

      plotOptions: {
        bar: {
          horizontal: true,
          distributed: false,
          dataLabels: {
            position: "center",
          },
          barHeight: "20%",
          borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["transparent"],
      },
      grid: {
        borderColor: "#919EAB33",
        row: {
          colors: ["transparent", "transparent"],
        },
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        enabled: true,
        cssClass: "bg-black",

        y: {
          title: {
            formatter: () => "",
          },
          formatter: (val) => val.toFixed(),
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
      legend: {
        show: false,
      },
      xaxis: {
        categories: customers,
        max: calculatedMaxValue,
        min: 0,
        tickAmount: tickAmount,
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
        labels: {
          style: {
            fontSize: "12px",
            colors: "#9295A4",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        title: {
          text: yAxisLabel,
          rotate: 0,
          offsetY: -130,
          offsetX: dataIsEmpty ? 40 : -40,

          style: {
            fontSize: "14px",
            fontWeight: 400,
            color: "#667085",
          },
        },
        labels: {
          formatter: (val) => {
            return isNaN(Number(val)) ? String(val) : "";
          },
          style: {
            fontSize: "12px",
            colors: "#9295A4",
            fontWeight: 400,
          },

          minWidth: currentChartWidth / 5,
          maxWidth: min([currentChartWidth / 4, 150]),
        },
      },
    };
  }, [
    barColor,
    customers,
    calculatedMaxValue,
    tickAmount,
    xAxisLabel,
    yAxisLabel,
    dataIsEmpty,
    currentChartWidth,
  ]);

  const seriesData = useMemo(() => {
    return [
      {
        name: yAxisLabel,
        data: values,
      },
    ];
  }, [yAxisLabel, values]);

  return {
    chartOptions,
    seriesData,
  };
};
