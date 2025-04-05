import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export interface CustomApexChartProps {
  type?: "bar" | "line" | "area" | "pie" | "donut" | "radar" | "heatmap";
  series: ApexOptions["series"];
  options?: Partial<ApexOptions>;
  height?: number | string;
  width?: number | string;
  className?: string;
}

const CustomApexChart: React.FC<CustomApexChartProps> = ({
  type = "bar",
  series,
  options = {},
  height = 350,
  width = "100%",
  className = "",
}) => {
  // Default chart options
  const defaultOptions: ApexOptions = useMemo(() => {
    return {
      chart: {
        type: type,
        toolbar: {
          show: false,
        },
        fontFamily: "Inter, sans-serif",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 2,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        axisBorder: {
          show: true,
          color: "#78909c",
        },
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
          style: {
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val.toString();
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "12px",
        // Fix for the markers type
        markers: {
          size: 12,
          strokeWidth: 0,
          radius: 2,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      grid: {
        borderColor: "#e0e0e0",
        row: {
          colors: ["transparent", "transparent"],
          opacity: 0.1,
        },
      },
    };
  }, [type]);

  // Merge default options with user provided options
  const mergedOptions = useMemo(() => {
    return {
      ...defaultOptions,
      ...options,
      chart: {
        ...defaultOptions.chart,
        ...(options.chart || {}),
        type: type, // Ensure type is consistent
      },
    };
  }, [defaultOptions, options, type]);

  return (
    <div className={`apex-chart-wrapper ${className}`}>
      <ReactApexChart
        options={mergedOptions}
        series={series}
        type={type}
        height={height}
        width={width}
      />
    </div>
  );
};

export default CustomApexChart;
