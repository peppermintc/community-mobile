import styled from "styled-components";
import CategorySelector from "../components/CategorySelector";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 22px;
  margin: 34px auto 20px 30px;
  color: #222222;
`;

const ListPage: React.FC = () => {
  return (
    <Page>
      <Title>커뮤니티</Title>
      <CategorySelector />
    </Page>
  );
};

export default ListPage;
