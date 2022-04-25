import React, { MouseEvent, useRef, useState } from "react";
import styled from "styled-components";
import { Category } from "../interfaces";

interface CategorySelectorProps {
  categories: Category[];
}

interface ButtonsProps {
  children: React.ReactNode;
}

interface ButtonProps {
  label: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 38px;
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

const ButtonContainer = styled.button`
  cursor: pointer;
  width: max-content;
  height: 100%;
  padding: 0 15px;
  background-color: #ffffff;
  color: #7a7a7a;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories }) => {
  return (
    <Container>
      <Buttons>
        {categories.map((category) => (
          <Button key={category.categoryPk} label={category.categoryName} />
        ))}
      </Buttons>
    </Container>
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

  const moveButtons = (movementX: number) => {
    if (!buttonsRef || !buttonsRef.current) return;

    const newLeft = `${
      Number(buttonsRef.current.style.left.slice(0, -2)) + movementX
    }px`;
    buttonsRef.current.style.left = newLeft;
  };

  const onButtonsMouseDown = () => draggingOn();
  const onButtonsMouseUp = () => draggingOff();
  const onButtonsMouseLeave = () => draggingOff();
  const onButtonsMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    moveButtons(e.movementX);
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

const Button = ({ label }: ButtonProps) => {
  return <ButtonContainer>{label}</ButtonContainer>;
};

export default CategorySelector;
