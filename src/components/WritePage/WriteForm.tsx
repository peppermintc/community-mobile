import { FormEvent, useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import useActionCreators from "../../hooks/useActionCreators";
import { RootState } from "../../modules";
import CategorySelector from "./CategorySelector";

const WriteForm = () => {
  const isAppStateReady = useSelector(
    (state: RootState) => state.community.isAppStateReady,
  );
  const form = useSelector((state: RootState) => state.community.form);
  const { setForm } = useActionCreators();

  const setInitialFormDate = () => {
    const initialForm = {
      categoryPk: 0,
      categoryName: "",
      pk: 0,
      title: "",
      content: "",
      viewCount: 0,
      likeCount: 0,
      commentCount: 0,
      imageUrl: null,
      writtenAt: "",
      writerNickName: "",
      writerProfileUrl: null,
    };
    setForm(initialForm);
  };

  useLayoutEffect(() => {
    if (!isAppStateReady) return;
    setInitialFormDate();
  }, [isAppStateReady]);

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
