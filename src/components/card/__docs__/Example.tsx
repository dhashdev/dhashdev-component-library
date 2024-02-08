import React, { FC } from "react";
import Card, { CardProps } from "../Card";
import cardImage from "../../../assets/images/card-demo-image.jpeg";
import { Wrapper } from "../../../utils/Wrapper";

const Example: FC<CardProps> = ({
  variant = "default",
  heading = "This is card heading",
  description = "This is card description",
  imageUrl = { url: cardImage, fit: "cover" }, // Removed height and width from imageUrl
  height = "auto",
  width = "auto",
  footer = "This is card footer",
}) => {
  return (
    <Wrapper>
      <Card
        variant={variant}
        heading={heading}
        description={description}
        imageUrl={imageUrl}
        footer={footer}
        height={height}
        width={width}
      />
    </Wrapper>
  );
};

export default Example;
