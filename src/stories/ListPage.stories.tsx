import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "..";
import ListPage from "../pages/ListPage";

export default {
  title: "Page/ListPage",
  component: ListPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof ListPage>;

export const Default: ComponentStory<typeof ListPage> = () => <ListPage />;
