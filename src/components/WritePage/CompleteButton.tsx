import { useEffect, useState } from "react";
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
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#ebebeb" : "#2c7fff")};
`;

const CompleteButton = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);

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

  useEffect(() => {
    if (!form) return;

    const isFormFilled = form.title !== "" && form.content !== "";
    if (isFormFilled) setIsDisabled(false);
    else setIsDisabled(true);
  }, [form]);

  return (
    <CompleteButtonContainer onClick={onButtonClick} disabled={isDisabled}>
      완료
    </CompleteButtonContainer>
  );
};

export default CompleteButton;
