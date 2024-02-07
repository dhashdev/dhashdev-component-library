import React from "react";
import styled from "styled-components";

export type TextProps = {
  as?: keyof JSX.IntrinsicElements; // allows to set the HTML tag for the text
  fontSize?: string; // allows to set the font size
  fontWeight?: "normal" | "bold"; // allows to set the font weight
  fontStyle?: "normal" | "italic"; // allows to set the font style
  color?: string; // allows to set the text color
  children: React.ReactNode; // required text content
};

const fontSizeMapping = {
  h1: "36px",
  h2: "30px",
  h3: "24px",
  h4: "20px",
  h5: "18px",
  h6: "16px",
};

const StyledText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-style: ${(props) => props.fontStyle || "normal"};
  color: ${(props) => props.color || "inherit"};
  display: block; // Ensure each text element is displayed on a separate line
  margin: 0; // default font size is inherited from parent
  font-family: "SF Pro", sans-serif; // Specify SF Pro as the preferred font
`;

const Text: React.FC<TextProps> = ({
  as = "span",
  fontSize,
  fontWeight,
  fontStyle,
  color,
  children,
  ...props
}) => {
  const mappedFontSize =
    as && fontSizeMapping[as as keyof typeof fontSizeMapping];
  return (
    <StyledText
      as={as}
      fontSize={mappedFontSize || fontSize}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      color={color}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
