// Card.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import cardImage from "../../../assets/images/card-demo-image.jpeg";
import Button from "../../button/Button";
import styled from "styled-components";

const meta: Meta = {
  title: "General/Card",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

const SideMarginContainer = styled.div`
  margin: 0 20%; // Adjust the side margins as needed
`;

export const SimpleCard: Story = {
  args: {
    variant: "default",
    heading: "Simple Card",
    description: "This is a simple card with only heading and description.",
  },
};

export const ImageCard: Story = {
  args: {
    variant: "image",
    heading: "Image Card",
    description:
      "This is a card with an image. This is a card with a footer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: {
      url: cardImage,
    },
  },
};

export const CardWithHW: Story = {
  args: {
    variant: "image",
    heading: "Image Card",
    description:
      "This is a card with an image. This is a card with a footer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    height: "400px",
    width: "400px",
    imageUrl: {
      url: cardImage,
    },
  },
};

export const FooterCard = () => (
  <SideMarginContainer>
    <Example
      variant="footer"
      heading="Footer Card"
      description="This is a card with a footer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      footer={<Button variant="primary" size="small" text="View Details" />}
    />
  </SideMarginContainer>
);

export const GridOfCards = () => (
  <GridContainer>
    <Example
      variant="default"
      heading="Simple Card 1"
      description="This is a simple card."
    />
    <Example
      variant="default"
      heading="Simple Card 2"
      description="This is a simple card."
    />
    <Example
      variant="default"
      heading="Simple Card 3"
      description="This is a simple card."
    />
    <Example
      variant="default"
      heading="Simple Card 4"
      description="This is a simple card."
    />
    <Example
      variant="default"
      heading="Simple Card 5"
      description="This is a simple card."
    />
    <Example
      variant="default"
      heading="Simple Card 6"
      description="This is a simple card."
    />
  </GridContainer>
);
