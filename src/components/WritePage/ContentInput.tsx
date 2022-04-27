import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { Post } from "../../interfaces";
import { RootState } from "../../modules";

const ContentInputContainer = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 220px;
  border: none;
  padding: 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b4b4b4;
  }
`;

const ContentInput = () => {
  const form = useSelector((state: RootState) => state.community.form);
  const { setForm } = useActionCreators();

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!form) return;
    if (!e.target) return;
    const newContent = e.target.value;
    const newForm: Post = { ...form, content: newContent };
    setForm(newForm);
  };

  const PLACEHOLDER =
    "내용을 작성해주세요. \n\n◎사진 및 외부 콘텐츠 첨부시 영향력 상승!\n◎뉴스, 블로그 등 외부 콘텐츠는 https:// 링크를 붙여 넣으세요. 본문에 썸네일로 표시됩니다.\n◎광고글 글지, 서비스 이용이 제한됩니다.";

  return (
    <ContentInputContainer
      placeholder={PLACEHOLDER}
      onChange={onTextAreaChange}
    />
  );
};

export default ContentInput;
