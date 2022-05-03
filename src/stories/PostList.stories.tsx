import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "..";
import PostList from "../components/ListPage/PostList";

export default {
  title: "Component/PostList",
  component: PostList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof PostList>;

export const Default: ComponentStory<typeof PostList> = () => <PostList />;
