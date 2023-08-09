import type { Preview } from "@storybook/react";
import "../src/index.css";
import { store } from "../src/redux/store";
import { Provider } from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
