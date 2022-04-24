import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListPage from "./ListPage";

export default {
  title: "Page/ListPage",
  component: ListPage,
} as ComponentMeta<typeof ListPage>;

export const Default: ComponentStory<typeof ListPage> = () => <ListPage />;
