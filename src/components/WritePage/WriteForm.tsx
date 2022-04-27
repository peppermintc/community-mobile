import { FormEvent, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import useActionCreators from "../../hooks/useActionCreators";
import { RootState } from "../../modules";
import CategorySelector from "./CategorySelector";

const WriteForm = () => {
  const form = useSelector((state: RootState) => state.community.form);
  const { setForm } = useActionCreators();

  const setInitialFormDate = () => {
    const initialForm = {
      categoryPk: 1000,
      categoryName: "",
      pk: 1000,
      title: "title",
      content: "content",
      viewCount: 1000,
      likeCount: 1000,
      commentCount: 1000,
      imageUrl: null,
      writtenAt: "",
      writerNickName: "",
      writerProfileUrl: "",
    };
    setForm(initialForm);
  };

  useLayoutEffect(() => {
    setInitialFormDate();
  }, []);

  useEffect(() => console.log({ form }), [form]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <CategorySelector />
    </form>
  );
};

export default WriteForm;
