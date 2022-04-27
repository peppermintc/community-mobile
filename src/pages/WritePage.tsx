import styled from "styled-components";
import WriteForm from "../components/WriteForm";
import WritePageHeader from "../components/WritePageHeader";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  background-color: white;
`;

const WritePage = () => {
  return (
    <Page>
      <WritePageHeader />
      <WriteForm />
    </Page>
  );
};

export default WritePage;
