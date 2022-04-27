import { FormEvent, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import useActionCreators from "../../hooks/useActionCreators";
import { RootState } from "../../modules";
import CategorySelector from "./CategorySelector";
import ContentInput from "./ContentInput";
import ImageAttacher from "./ImageAttacher";
import TitleInput from "./TitleInput";

const WriteForm = () => {
  const isAppStateReady = useSelector(
    (state: RootState) => state.community.isAppStateReady,
  );
  const { setForm } = useActionCreators();

  const setInitialFormDate = () => {
    const initialForm = {
      categoryPk: 3,
      categoryName: "질문/답변",
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

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <CategorySelector />
      <TitleInput />
      <ContentInput />
      <ImageAttacher />
    </form>
  );
};

export default WriteForm;
