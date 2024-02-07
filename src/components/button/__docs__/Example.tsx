import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";
import { Wrapper } from "../../../utils/Wrapper";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  size = "small",
  variant = "primary",
  text = "Button",
}) => {
  return (
    <Wrapper>
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        variant={variant}
      />
    </Wrapper>
  );
};

export default Example;
