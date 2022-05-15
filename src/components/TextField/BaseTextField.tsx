import { TextField } from "@mui/material";
import React from "react";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
};
export const BaseTextField: React.FC<Props> = ({ onChange, value, label }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      onChange={onChange}
      value={value}
    />
  );
};
