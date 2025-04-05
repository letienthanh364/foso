import React from "react";

export interface PieChartSegment {
  color: string;
  count: number;
  label: string;
  percentage: number;
}

interface PieChartProps {
  title: string;
  total: number;
  segments: PieChartSegment[];
  backgroundColor?: string;
}

export default function PieChart({
  title,
  total,
  segments,
  backgroundColor = "#EEEEEE",
}: PieChartProps) {
  const validSegments = segments.filter(
    (segment) => segment.count !== 0 && segment.percentage !== 0
  );

  const calculatePath = (percentage: number, startAngle: number) => {
    const endAngle = startAngle + (percentage / 100) * 360;
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);

    const radius = 130;
    const strokeWidth = 50;
    const centerX = 200;
    const centerY = 200;

    const x1 = centerX + (radius - strokeWidth / 2) * Math.cos(startAngleRad);
    const y1 = centerY + (radius - strokeWidth / 2) * Math.sin(startAngleRad);
    const x2 = centerX + (radius - strokeWidth / 2) * Math.cos(endAngleRad);
    const y2 = centerY + (radius - strokeWidth / 2) * Math.sin(endAngleRad);

    const largeArcFlag = percentage > 50 ? 1 : 0;

    return `M ${x1} ${y1} A ${radius - strokeWidth / 2} ${radius - strokeWidth / 2} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  };

  const calculateLabelPosition = (percentage: number, startAngle: number) => {
    const angle = startAngle + (percentage / 200) * 360;
    const angleRad = (angle - 90) * (Math.PI / 180);

    const radius = 160;
    const centerX = 200;
    const centerY = 200;

    const x = centerX + radius * Math.cos(angleRad);
    const y = centerY + radius * Math.sin(angleRad);

    return { x, y };
  };

  let currentAngle = 0;
  const paths = validSegments.map((segment) => {
    const path = calculatePath(segment.percentage, currentAngle);
    const labelPos = calculateLabelPosition(segment.percentage, currentAngle);
    const result = { ...segment, path, labelPos };
    currentAngle += (segment.percentage / 100) * 360;
    return result;
  });

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <div className="relative w-80 h-80">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke={backgroundColor}
            strokeWidth="50"
          />

          {paths.map((segment, index) => (
            <React.Fragment key={index}>
              <path
                d={segment.path}
                fill="none"
                stroke={segment.color}
                strokeWidth="50"
                strokeLinecap="round"
              />

              <g>
                <rect
                  x={segment.labelPos.x - 20}
                  y={segment.labelPos.y - 15}
                  width="40"
                  height="30"
                  rx="15"
                  fill={segment.color}
                />
                <text
                  x={segment.labelPos.x}
                  y={segment.labelPos.y + 5}
                  textAnchor="middle"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                >
                  {segment.percentage}%
                </text>
              </g>
            </React.Fragment>
          ))}

          <foreignObject x="100" y="140" width="200" height="120">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="text-xl font-bold">{total}</div>
              <div className="text-gray-500 text-base">{title}</div>
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="flex w-full justify-between mt-4 gap-2">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex-1 border border-[#DDDDE2] rounded-lg p-2 gap-1 flex flex-col items-start"
          >
            <div
              className="text-xl font-semibold"
              style={{ color: segment.color }}
            >
              {segment.count}
            </div>
            <div className="text-start text-sm text-[#141522]">
              {segment.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
