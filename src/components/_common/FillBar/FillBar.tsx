interface FillBarProps {
  label: string;
  count: number;
  total: number;
  barColor?: string;
}

export default function FillBar({
  count,
  total,
  label,
  barColor = "#22c55e",
}: FillBarProps) {
  const percentage = Math.round((count / total) * 100);

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between mb-2">
        <div className="text-lg font-medium text-gray-800">{label}</div>
        <div className="text-lg font-medium text-gray-800">
          {count} <span className="text-gray-500">({percentage}%)</span>
        </div>
      </div>
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: barColor,
          }}
        />
      </div>
    </div>
  );
}
