import { FormEvent, useEffect, useLayoutEffect, useState } from "react";
import { Post } from "../../interfaces";

const WriteForm = () => {
  const [form, setForm] = useState<Post>();

  // 초기 폼 데이터 설정
  useLayoutEffect(() => {
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
  }, []);

  useEffect(() => console.log({ form }), [form]);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>카테고리</div>
    </form>
  );
};

export default WriteForm;
