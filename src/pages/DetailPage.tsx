import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: yellow;
`;

const DetailPage: React.FC = () => {
  return <Page>DetailPage</Page>;
};

export default DetailPage;
