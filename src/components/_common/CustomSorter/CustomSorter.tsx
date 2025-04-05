import { MenuItem, TextField } from "@mui/material";
import React, { forwardRef, ReactNode, useState } from "react";
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
      <div className="flex items-center gap-2">
        {iconLable}

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
            renderValue: (selected) => renderSelectedOption(selected as T),
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
        {optionList.map((option) => (
          <MenuItem key={option.name} value={option.value as string | number}>
            <div className="flex items-center gap-2">{option.name}</div>
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
});

export default CustomSorter;
