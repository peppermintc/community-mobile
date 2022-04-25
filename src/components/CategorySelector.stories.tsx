import { ComponentStory, ComponentMeta } from "@storybook/react";
import CategorySelector from "./CategorySelector";

export default {
  title: "Component/CategorySelector",
  component: CategorySelector,
} as ComponentMeta<typeof CategorySelector>;

export const Default: ComponentStory<typeof CategorySelector> = () => (
  <CategorySelector
    categories={[
      {
        categoryPk: 1,
        categoryCode: "PETITION",
        categoryName: "대선청원",
      },
      {
        categoryPk: 2,
        categoryCode: "FREE",
        categoryName: "자유글",
      },
      {
        categoryPk: 3,
        categoryCode: "QNA",
        categoryName: "질문/답변",
      },
      {
        categoryPk: 4,
        categoryCode: "NEWS",
        categoryName: "뉴스",
      },
      {
        categoryPk: 5,
        categoryCode: "TIP",
        categoryName: "노하우",
      },
    ]}
  />
);
