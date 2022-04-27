import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { Post } from "../../interfaces";
import { RootState } from "../../modules";
import getCurrentTime from "../../utils/getCurrentTime";
import postPkGenerator from "../../utils/postPkGenerator";

const CompleteButtonContainer = styled.button`
  border: none;
  height: 36px;
  width: 64px;
  background-color: #2c7fff;
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CompleteButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const form = useSelector((state: RootState) => state.community.form);
  const posts = useSelector((state: RootState) => state.community.posts);

  const { setPosts } = useActionCreators();

  const onButtonClick = () => {
    if (!form) return;

    const currentTime = getCurrentTime();
    const postPk = postPkGenerator();
    const newForm: Post = {
      ...form,
      pk: postPk,
      writerNickName: "현재 작성자",
      writtenAt: currentTime,
    };

    setPosts([...posts, newForm]);

    const prevScrollPosition = location.state;
    navigate("/community/list", { state: prevScrollPosition });
  };

  return (
    <CompleteButtonContainer onClick={onButtonClick}>
      완료
    </CompleteButtonContainer>
  );
};

export default CompleteButton;
