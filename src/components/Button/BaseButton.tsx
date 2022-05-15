import React from "react";
import Button from "@mui/material/Button";

type Props = {
  label: string;
  variant?: "text" | "outlined" | "contained";
  onClick: () => void;
};

export const BaseButton: React.FC<Props> = ({ label, variant, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};
