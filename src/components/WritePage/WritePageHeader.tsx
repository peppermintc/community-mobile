import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../../img/back.png";
import CompleteButton from "./CompleteButton";

const HeaderContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 16px;
  border-bottom: 1px solid #e8e8e8;
`;

const HeaderBackButton = styled.img`
  margin-right: 6px;
  cursor: pointer;
`;

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const WritePageHeader = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => navigate("/community/list");

  return (
    <HeaderContainer>
      <HeaderBackButton src={backIcon} alt="back" onClick={onBackButtonClick} />
      <HeaderTitle>글쓰기</HeaderTitle>
      <CompleteButton />
    </HeaderContainer>
  );
};

export default WritePageHeader;
