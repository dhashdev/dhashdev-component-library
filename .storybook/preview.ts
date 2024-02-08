import type { Preview } from "@storybook/react";
import "../src/index.css";
const preview: Preview = {
  parameters: {
    parameters: {
      layout: "centered",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
