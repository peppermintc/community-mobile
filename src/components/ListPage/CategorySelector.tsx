import React, { MouseEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { Category } from "../../interfaces";
import { RootState } from "../../modules";

export const CATEGORY_ALL: Category = {
  categoryPk: -1,
  categoryCode: "ALL",
  categoryName: "전체",
};

export const CATEGORY_POPULAR: Category = {
  categoryPk: 0,
  categoryCode: "POPULAR",
  categoryName: "⭐ 인기글",
};

interface ButtonsProps {
  children: React.ReactNode;
}

interface ButtonProps {
  category: Category;
}

interface ButtonContainerProps {
  isSelected: boolean;
  onClick: React.MouseEventHandler;
}

const CategorySelectorContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 38px;
  overflow-x: scroll;
  cursor: grab;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ButtonsContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0px;
  display: flex;
  gap: 2px;
  padding: 0 22px;
`;

const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  width: max-content;
  height: 100%;
  padding: 0 15px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#7a7a7a")};
  background-color: ${(props) => (props.isSelected ? "#2C7FFF" : "#ffffff")};
`;

const Button = ({ category }: ButtonProps) => {
  const { currentCategory } = useSelector(
    (state: RootState) => state.community,
  );

  const { setCurrentCategory } = useActionCreators();

  return (
    <ButtonContainer
      isSelected={category.categoryPk === currentCategory?.categoryPk}
      onClick={() => setCurrentCategory(category)}
    >
      {category.categoryName}
    </ButtonContainer>
  );
};

const Buttons = ({ children }: ButtonsProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const buttonsRef = useRef<HTMLDivElement>(null);

  const draggingOn = () => {
    if (isDragging) return;
    setIsDragging(true);
  };

  const draggingOff = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const scrollButtons = (e: MouseEvent) => {
    if (!buttonsRef || !buttonsRef.current) return;

    const newLeft =
      Number(buttonsRef.current.style.left.slice(0, -2)) + e.movementX;
    const newLeftPx = `${newLeft}px`;
    const buttonsLeftX = newLeft;
    const buttonsRightX = newLeft + buttonsRef.current.offsetWidth;

    let scrollDisable = false;
    if (buttonsRightX < 100) scrollDisable = true;
    if (window.innerWidth - buttonsLeftX < 100) scrollDisable = true;

    if (scrollDisable === true) return;
    else buttonsRef.current.style.left = newLeftPx;
  };

  const onButtonsMouseDown = () => draggingOn();
  const onButtonsMouseUp = () => draggingOff();
  const onButtonsMouseLeave = () => draggingOff();
  const onButtonsMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    scrollButtons(e);
  };

  return (
    <ButtonsContainer
      ref={buttonsRef}
      onMouseDown={onButtonsMouseDown}
      onMouseUp={onButtonsMouseUp}
      onMouseMove={onButtonsMouseMove}
      onMouseLeave={onButtonsMouseLeave}
    >
      {children}
    </ButtonsContainer>
  );
};

const CategorySelector: React.FC = () => {
  const { categories } = useSelector((state: RootState) => state.community);

  return (
    <CategorySelectorContainer>
      <Buttons>
        <Button key={CATEGORY_ALL.categoryPk} category={CATEGORY_ALL} />
        <Button key={CATEGORY_POPULAR.categoryPk} category={CATEGORY_POPULAR} />
        {categories.map((category) => (
          <Button key={category.categoryPk} category={category} />
        ))}
      </Buttons>
    </CategorySelectorContainer>
  );
};

export default CategorySelector;
