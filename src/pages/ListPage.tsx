import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetCategories } from "../api";
import CategorySelector from "../components/CategorySelector";
import { Category } from "../interfaces";

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
  const [categories, setCategories] = useState<Category[]>([]);

  useLayoutEffect(() => {
    axiosGetCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <Page>
      <Title>커뮤니티</Title>
      <CategorySelector categories={categories} />
    </Page>
  );
};

export default ListPage;
