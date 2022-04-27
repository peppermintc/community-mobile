import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WriteButtonContainer = styled.button`
  box-sizing: border-box;
  width: 100px;
  background-color: #2c7fff;
  border: none;
  padding: 12px 11px;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

const WriteButton = () => {
  const navigate = useNavigate();

  const moveToWritePage = () => {
    const scrollPostion = window.pageYOffset;
    navigate("/community/post/new", { state: scrollPostion });
  };

  const onButtonClick = () => moveToWritePage();

  return (
    <WriteButtonContainer onClick={onButtonClick}>
      글쓰기 ✍️
    </WriteButtonContainer>
  );
};

export default WriteButton;
