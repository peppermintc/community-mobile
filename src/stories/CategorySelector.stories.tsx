import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "..";
import CategorySelector from "../components/ListPage/CategorySelector";

export default {
  title: "Component/CategorySelector",
  component: CategorySelector,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CategorySelector>;

export const Default: ComponentStory<typeof CategorySelector> = () => (
  <CategorySelector />
);
