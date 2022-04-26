import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "..";
import WriteButton from "./WriteButton";

export default {
  title: "Component/WriteButton",
  component: WriteButton,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof WriteButton>;

export const Default: ComponentStory<typeof WriteButton> = () => (
  <WriteButton />
);
