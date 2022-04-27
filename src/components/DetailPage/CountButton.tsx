import styled from "styled-components";

interface CountButtonProps {
  count: number;
  icon: string;
  onClick?: React.MouseEventHandler;
}

const CountButtonContainer = styled.button`
  background-color: #f8f8f8;
  width: 52px;
  height: 32px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #7a7a7a;
  cursor: pointer;
`;

const CountButton = ({ icon, count, onClick }: CountButtonProps) => {
  return (
    <CountButtonContainer onClick={onClick}>
      <img src={icon} alt="button icon" />
      {count}
    </CountButtonContainer>
  );
};

export default CountButton;
