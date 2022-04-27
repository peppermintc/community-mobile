import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { Post } from "../../interfaces";
import { RootState } from "../../modules";

const TitleInputContainer = styled.input`
  background-color: #ffffff;
  border: none;
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b4b4b4;
  }
`;

const TitleInput = () => {
  const form = useSelector((state: RootState) => state.community.form);
  const { setForm } = useActionCreators();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    if (!e.target) return;
    const newTitle = e.target.value;
    const newForm: Post = { ...form, title: newTitle };
    setForm(newForm);
  };

  return (
    <TitleInputContainer
      placeholder="제목을 작성해주세요"
      onChange={onInputChange}
      maxLength={100}
    />
  );
};

export default TitleInput;
