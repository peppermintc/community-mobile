import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "..";
import CategorySelector from "../components/ListPage/CategorySelector";

export default {
  title: "Component/CategorySelector",
  component: CategorySelector,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof CategorySelector>;

export const Default: ComponentStory<typeof CategorySelector> = () => (
  <CategorySelector />
);
