import styled from "styled-components";
import ImageAttachButton from "./ImageAttachButton";
import ImagePreview from "./ImagePreview";

const ImageAttacherContainer = styled.div`
  padding: 20px;
`;

const ImageAttacher = () => {
  return (
    <ImageAttacherContainer>
      <ImagePreview />
      <ImageAttachButton />
    </ImageAttacherContainer>
  );
};

export default ImageAttacher;
