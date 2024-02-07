import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";

export type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 30px;
  display: inline-block;
  color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return COLORS.white;
      case "secondary":
        return COLORS.white;
      case "success":
        return COLORS.white;
      case "danger":
        return COLORS.white;
      case "warning":
        return COLORS.white;
      default:
        return COLORS.black; // Default color
    }
  }};
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return COLORS.primaryBlue;
      case "secondary":
        return COLORS.primaryGray;
      case "success":
        return COLORS.success;
      case "danger":
        return COLORS.danger;
      case "warning":
        return COLORS.warning;
      default:
        return COLORS.lightGray; // Default background color
    }
  }};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
`;

const Button: React.FC<ButtonProps> = ({
  size,
  variant = "primary",
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
