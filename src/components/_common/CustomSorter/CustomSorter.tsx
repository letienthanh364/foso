import { MenuItem, TextField } from "@mui/material";
import React, { forwardRef, ReactNode, useState } from "react";
import { useViewport } from "src/hooks/common/useViewport";
import { OptionInput } from "src/types/_inputs/option.input.type";

interface CustomSorterProps<T> {
  value: T;
  onChangeValue: (value: T) => void;
  optionList: OptionInput<T>[];
  iconLable?: ReactNode;
}

const CustomSorter = forwardRef<
  HTMLInputElement,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CustomSorterProps<any>
>(function CustomSorter<T>(
  { onChangeValue, value, optionList, iconLable }: CustomSorterProps<T>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const [selectedOption, setSelectedOption] = useState<T>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value as unknown as T;
    setSelectedOption(newValue);
    if (onChangeValue) {
      onChangeValue(newValue);
    }
  };

  const renderSelectedOption = (selected: T) => {
    const selectedObj = optionList.find((option) => option.value === selected);
    return (
      <div className="flex items-center gap-1 xl:gap-2 text-sm xl:text-base">
        {iconLable}

        <span className="w-full truncate">
          {selectedObj?.name || "Select time"}
        </span>
      </div>
    );
  };

  const isSmall = useViewport().width < 1024;

  return (
    <div className="w-[120px] max-w-[150px] overflow-hidden">
      <TextField
        ref={ref}
        select
        variant="outlined"
        fullWidth
        value={selectedOption}
        slotProps={{
          select: {
            displayEmpty: true,
            renderValue: (selected) => renderSelectedOption(selected as T),
            MenuProps: {
              PaperProps: {
                className: "custom-scrollbar",
                sx: {
                  "--scrollbar-width": "2px",
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
            // fontSize: isSmall ? "14px" : "16px",
            padding: isSmall ? "6px 8px" : "8px 12px",
            alignItems: "center",
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            borderColor: "#D0D5DD",
          },
        }}
        onChange={handleChange}
      >
        {optionList.map((option) => (
          <MenuItem key={option.name} value={option.value as string | number}>
            <div className="flex items-center text-sm xl:text-base">
              {option.name}
            </div>
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
});

export default CustomSorter;
