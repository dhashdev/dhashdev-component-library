import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "General/Button",
  component: Example,
};
export default meta;

type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    variant: "primary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    variant: "secondary",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Success: Story = {
  args: {
    text: "Button",
    variant: "success",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Danger: Story = {
  args: {
    text: "Button",
    variant: "danger",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Warning: Story = {
  args: {
    text: "Button",
    variant: "warning",
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
