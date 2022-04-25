import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostList from "./PostList";

export default {
  title: "Component/PostList",
  component: PostList,
} as ComponentMeta<typeof PostList>;

export const Default: ComponentStory<typeof PostList> = () => <PostList />;
