import React, { FC } from "react";
import Text, { TextProps } from "../Text";
import { Wrapper } from "../../../utils/Wrapper";

const Example: FC<TextProps> = ({
  as = "span",
  fontSize = "12px",
  fontWeight = "normal",
  fontStyle = "normal",
  color = "black",

  children,
}) => {
  return (
    <Wrapper>
      <Text
        as={as}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontStyle={fontStyle}
        color={color}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

export default Example;
