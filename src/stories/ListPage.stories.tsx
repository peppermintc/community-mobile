import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "..";
import ListPage from "../pages/ListPage";

export default {
  title: "Page/ListPage",
  component: ListPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ListPage>;

export const Default: ComponentStory<typeof ListPage> = () => <ListPage />;
