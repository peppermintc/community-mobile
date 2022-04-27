import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../img/back.png";

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

const HeaderCompleteButtonContainer = styled.button`
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

const HeaderCompleteButton = () => {
  return <HeaderCompleteButtonContainer>완료</HeaderCompleteButtonContainer>;
};

const WritePageHeader = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => navigate("/community/list");

  return (
    <HeaderContainer>
      <HeaderBackButton src={backIcon} alt="back" onClick={onBackButtonClick} />
      <HeaderTitle>글쓰기</HeaderTitle>
      <HeaderCompleteButton />
    </HeaderContainer>
  );
};

export default WritePageHeader;
