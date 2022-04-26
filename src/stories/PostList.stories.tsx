import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "..";
import PostList from "../components/PostList";

export default {
  title: "Component/PostList",
  component: PostList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof PostList>;

export const Default: ComponentStory<typeof PostList> = () => <PostList />;
