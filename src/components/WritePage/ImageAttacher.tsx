import styled from "styled-components";
import ImageAttachButton from "./ImageAttachButton";

const ImageAttacherContainer = styled.div`
  padding: 20px;
`;

const ImageAttacher = () => {
  return (
    <ImageAttacherContainer>
      <ImageAttachButton />
    </ImageAttacherContainer>
  );
};

export default ImageAttacher;
