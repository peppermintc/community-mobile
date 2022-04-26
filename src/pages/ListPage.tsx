import { useLayoutEffect } from "react";
import styled from "styled-components";
import CategorySelector from "../components/CategorySelector";
import PostList from "../components/PostList";
import useActionCreators from "../hooks/useActionCreators";

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
  const { initListPageState } = useActionCreators();

  useLayoutEffect(() => {
    initListPageState();
  }, []);

  return (
    <Page>
      <Title>커뮤니티</Title>
      <CategorySelector />
      <PostList />
    </Page>
  );
};

export default ListPage;
