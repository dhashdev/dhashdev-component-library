import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "General/Text",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "black",
    children: "This is default text",
  },
};

export const Heading1: Story = {
  args: {
    as: "h1",
    children: "This is a Heading 1 Text",
  },
};

export const Heading2: Story = {
  args: {
    as: "h2",
    children: "This is a Heading 2 Text",
  },
};

export const CustomFont: Story = {
  args: {
    children: "This is custom font text",
  },
};

export const Bold: Story = {
  args: {
    children: "This is bold text",
    fontWeight: "bold",
  },
};

export const Italic: Story = {
  args: {
    children: "This is italic text",
    fontStyle: "italic",
  },
};

export const Colored: Story = {
  args: {
    children: "This is colored text",
    color: "blue",
  },
};

export const CustomFontSize: Story = {
  args: {
    children: "This is custom font size text",
    fontSize: "20px",
  },
};
