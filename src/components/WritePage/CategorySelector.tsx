import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { Category, Post } from "../../interfaces";
import dropDownArrowIcon from "../../img/dropdown-arrow.png";
import { useState } from "react";
import useActionCreators from "../../hooks/useActionCreators";

interface CategoryDropDownProps {
  categories: Category[];
}

const CategorySelectorContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
`;

const CurrentCategoryContainer = styled.div`
  background-color: #ffffff;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`;

const CurrentCategoryName = styled.span`
  font-weight: 700;
  font-size: 14px;
  margin-right: 2px;
`;

const CategoryDropDownItem = styled.div`
  background-color: #ffffff;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
`;

const CategoryDropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CategoryDropDown = ({ categories }: CategoryDropDownProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const form: Post | null = useSelector(
    (state: RootState) => state.community.form,
  );
  const { setForm } = useActionCreators();

  const setFormCategory = (selectedCategory: Category) => {
    if (!form) return;

    const newForm: Post = {
      ...form,
      categoryPk: selectedCategory.categoryPk,
      categoryName: selectedCategory.categoryName,
    };
    setForm(newForm);
  };

  const currentCategoryOnClick = () => setIsDropDownOpen(!isDropDownOpen);

  const onDropDownItemClick = (category: Category) => {
    setFormCategory(category);
    setIsDropDownOpen(false);
  };

  return (
    <CategoryDropDownContainer>
      {form && (
        <CurrentCategoryContainer onClick={currentCategoryOnClick}>
          <CurrentCategoryName>{form.categoryName}</CurrentCategoryName>
          <img src={dropDownArrowIcon} alt="arrow" />
        </CurrentCategoryContainer>
      )}

      {isDropDownOpen &&
        categories.map((category) => (
          <CategoryDropDownItem
            key={category.categoryPk}
            onClick={() => onDropDownItemClick(category)}
          >
            {category.categoryName}
          </CategoryDropDownItem>
        ))}
    </CategoryDropDownContainer>
  );
};

const CategorySelector = () => {
  const categories: Category[] = useSelector(
    (state: RootState) => state.community.categories,
  );

  return (
    <CategorySelectorContainer>
      <CategoryDropDown categories={categories} />
    </CategorySelectorContainer>
  );
};

export default CategorySelector;
