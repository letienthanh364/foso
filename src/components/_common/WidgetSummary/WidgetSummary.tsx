import { DecreaseIcon, IncreaseIcon } from "src/assets/icons";

interface WidgetSummaryProps {
  data?: { value: number; label: string; percentChange: number };
}

export default function WidgetSummary({ data }: WidgetSummaryProps) {
  const { value, label, percentChange } = data || {
    value: 0,
    label: "Chưa có mặt hàng",
    percentChange: 0,
  };
  const isPositive = percentChange >= 0;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex-grow">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-start">
          <p className=" font-bold text-blue-light text-[32px]">{value}</p>
          <span className="text-sm mt-2">{label}</span>
        </div>

        {percentChange !== 0 && (
          <div className="flex items-center gap-1">
            {isPositive ? (
              <IncreaseIcon
                chevornClassName="text-[#1F9285]"
                carretClassName="text-[#1FC583]"
              />
            ) : (
              <DecreaseIcon
                chevornClassName="text-error-main"
                carretClassName="text-error-light"
              />
            )}
            <span className="font-medium text-sm">
              {Math.abs(percentChange).toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
