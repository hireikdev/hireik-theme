import {
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  TextField,
  TextFieldProps,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { ChevronDownIcon } from "../Icons";

interface OptionIn {
  title: string;
  value: string;
}

interface ValueIn {
  selectValue: string;
  inputValue: string;
}

interface Props {
  fullWidth?: boolean;
  options: OptionIn[];
  label?: string;
  type?: TextFieldProps["type"];
  value?: ValueIn;
  onChange?: (value: ValueIn) => void;
  sx?: TextFieldProps["sx"];
}

const TextFieldWithSelect: React.FC<Props> = ({ options, label, type, onChange, fullWidth, sx, ...props }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLParagraphElement | null>(null);
  const [value, setValue] = useState<ValueIn>(props.value ?? { selectValue: "", inputValue: "" });
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getSelectedValueTitle = (value: string) => {
    const option = options.find((option) => option.value === value);
    if (option) return option.title;
    return options[0].title;
  };

  return (
    <Stack sx={sx}>
      <TextField
        {...props}
        fullWidth={fullWidth}
        label={label}
        type={type}
        value={value.inputValue}
        onChange={(event) => {
          if (onChange) {
            onChange({ ...value, inputValue: event.target.value });
            setValue((value) => ({ ...value, inputValue: event.target.value }));
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  cursor: "pointer",
                }}
                onClick={(event) => handleClick(event)}
              >
                {getSelectedValueTitle(value.selectValue)}
                <ChevronDownIcon />
              </p>
            </InputAdornment>
          ),
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List dense>
          {options.map((option) => (
            <ListItemButton
              key={option.value}
              selected={value.selectValue === option.value ?? false}
              onClick={() => {
                if (onChange) {
                  onChange({ ...value, selectValue: option.value });
                  setValue((value) => ({ ...value, selectValue: option.value }));
                }
                setAnchorEl(null);
              }}
            >
              <ListItemText>{option.title}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Stack>
  );
};

export default TextFieldWithSelect;
