import { forwardRef, useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { TimerangeSortValueType } from "src/pages/HomePage/HomePage";

interface OptionInput {
  name: string;
  value: TimerangeSortValueType;
}

interface TimeSorterProps {
  onChange?: (value: TimerangeSortValueType) => void;
  value: TimerangeSortValueType;
}

const TimeSorter = forwardRef<HTMLInputElement, TimeSorterProps>(
  ({ onChange, value }: TimeSorterProps, ref) => {
    const [selectedOption, setSelectedOption] =
      useState<TimerangeSortValueType>(value);

    const timeOptions: OptionInput[] = [
      {
        name: "Hôm nay",
        value: "today",
      },
      {
        name: "Tuần này",
        value: "this_week",
      },
      {
        name: "Tháng này",
        value: "this_month",
      },
      {
        name: "Quý này",
        value: "this_quarter",
      },
      {
        name: "Năm nay",
        value: "this_year",
      },
    ];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value as TimerangeSortValueType;
      setSelectedOption(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };

    const renderSelectedOption = (selected: string) => {
      const selectedObj = timeOptions.find(
        (option) => option.value === selected
      );
      return (
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCalendar}
            size="sm"
            className="text-[#9295A4]"
          />
          <span>{selectedObj?.name || "Select time"}</span>
        </div>
      );
    };

    return (
      <div className="flex-shrink w-[150px]">
        <TextField
          ref={ref}
          select
          variant="outlined"
          fullWidth
          value={selectedOption}
          slotProps={{
            select: {
              displayEmpty: true,
              renderValue: (selected) =>
                renderSelectedOption(selected as string),
              MenuProps: {
                PaperProps: {
                  className: "custom-scrollbar",
                  sx: {
                    "--scrollbar-width": "4px",
                    maxHeight: "320px",
                    overflowY: "auto",
                    boxSizing: "content-box",
                  },
                },
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-input": {
              fontSize: "16px",
              padding: "8px 12px",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              borderColor: "#D0D5DD",
            },
          }}
          onChange={handleChange}
        >
          {timeOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              data-value={option.value}
            >
              <div className="flex items-center gap-2">{option.name}</div>
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
);

TimeSorter.displayName = "TimeSorter";

export default TimeSorter;
