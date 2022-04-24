import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 22px;
  margin: 34px 0 20px 30px;
  color: #222222;
`;

const ListPage: React.FC = () => {
  return (
    <Page>
      <Title>커뮤니티</Title>
    </Page>
  );
};

export default ListPage;
