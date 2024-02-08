import React from "react";
import styled from "styled-components";

export type CardProps = {
  variant?: "default" | "image" | "footer";
  heading?: React.ReactNode;
  description?: React.ReactNode;
  height?: string;
  width?: string;
  imageUrl?: {
    url: string;
    fit?: "contain" | "cover";
  };
  footer?: React.ReactNode;
};

const StyledCard = styled.div<CardProps>`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: ${(props: CardProps) => props.height || "auto"};
  width: ${(props: CardProps) => props.width || "auto"};
  overflow: hidden; /* Prevents text overflow */
  h2 {
    margin: 8px 0;
    max-width: 100%; /* Ensures heading doesn't overflow */
    white-space: nowrap; /* Prevents wrapping */
    overflow: hidden; /* Prevents text from wrapping to the next line */
    text-overflow: ellipsis; /* Truncates text with ellipsis */
  }
  p {
    margin: 6px 0;
    max-width: 100%; /* Ensures paragraph text doesn't overflow */
    overflow: hidden; /* Prevents text from wrapping to the next line */
    text-overflow: ellipsis; /* Truncates text with ellipsis */
  }
  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: ${(props: CardProps) => props.imageUrl?.fit || "cover"};
    max-width: 100%;
  }
  div {
    margin: 6px 0;
  }
`;

const Card: React.FC<CardProps> = ({
  variant,
  heading,
  description,
  imageUrl,
  footer,
  height,
  width,
}) => {
  return (
    <StyledCard height={height} width={width}>
      {heading && <h2>{heading}</h2>}
      {variant === "image" && imageUrl && (
        <div>
          <img src={imageUrl.url} alt="card image" />
          {description && <p>{description}</p>}
        </div>
      )}
      {variant !== "image" && description && <p>{description}</p>}
      {variant === "footer" && footer && <div>{footer}</div>}
    </StyledCard>
  );
};

export default Card;
