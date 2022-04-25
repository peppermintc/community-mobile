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
  const CATEGORIES = [
    {
      categoryPk: 1,
      categoryCode: "PETITION",
      categoryName: "대선청원",
    },
    {
      categoryPk: 2,
      categoryCode: "FREE",
      categoryName: "자유글",
    },
    {
      categoryPk: 3,
      categoryCode: "QNA",
      categoryName: "질문/답변",
    },
    {
      categoryPk: 4,
      categoryCode: "NEWS",
      categoryName: "뉴스",
    },
    {
      categoryPk: 5,
      categoryCode: "TIP",
      categoryName: "노하우",
    },
  ];

  return (
    <Page>
      <Title>커뮤니티</Title>
      <CategorySelector categories={CATEGORIES} />
    </Page>
  );
};

export default ListPage;
