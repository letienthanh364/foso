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
        <p className="text-sm font-medium text-text-primary">{label}</p>
        <p className="text-sm font-medium text-text-primary">
          {total === -1 ? (
            "-"
          ) : (
            <>
              {count}{" "}
              <span className="text-text-secondary">({percentage}%)</span>
            </>
          )}
        </p>
      </div>
      <div className="h-2 w-full bg-[#919EAB1F] rounded-full overflow-hidden">
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
