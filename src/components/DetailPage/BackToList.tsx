import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../../img/back.png";

const BackToListContainer = styled.div`
  color: #b4b4b4;
  font-size: 14px;
  font-weight: 700px;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;

const BackIcon = styled.img`
  margin-right: 6px;
  margin-left: 16px;
  cursor: pointer;
`;

const BackToList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    const prevScrollPosition = location.state;
    navigate("/community/list", { state: prevScrollPosition });
  };

  return (
    <BackToListContainer>
      <BackIcon src={backIcon} alt="back" onClick={onBackButtonClick} />글
      목록으로
    </BackToListContainer>
  );
};

export default BackToList;
