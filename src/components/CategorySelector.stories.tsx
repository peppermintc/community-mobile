import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategorySelector from "./CategorySelector";

export default {
  title: "Component/CategorySelector",
  component: CategorySelector,
} as ComponentMeta<typeof CategorySelector>;

export const Default: ComponentStory<typeof CategorySelector> = () => (
  <CategorySelector />
);
