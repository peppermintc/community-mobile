import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import pictureIcon from "../../img/picture-icon.png";
import { Post } from "../../interfaces";
import { RootState } from "../../modules";

const ImageAttachButtonContainer = styled.button`
  width: fit-content;
  background-color: blue;
  border: none;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #dbe9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  color: #2c7fff;
  font-weight: 700;
  font-size: 12px;
  gap: 2px;
  cursor: pointer;
`;

const ImageAttachButton = () => {
  const form: Post | null = useSelector(
    (state: RootState) => state.community.form,
  );
  const { setForm } = useActionCreators();

  const imageCount = () => {
    if (!form) return "(0/0)";
    if (typeof form.imageUrl === "string") return "(1/1)";
    if (!form.imageUrl || !form.imageUrl.length) return "(0/0)";
    return `(${form.imageUrl.length}/${form.imageUrl.length})`;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!form) return;
    if (!fileInputRef) return;
    if (!e.target) return;
    if (e.target.files === null) return;

    const fileList = e.target.files;

    const updateFormImageUrl = () => {
      let loadCompleteCount = 0;

      const newImageUrlList: string[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const currentFile = fileList[i];

        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (typeof fileReader.result !== "string") return;

          const inputImageUrl: string = fileReader.result;
          newImageUrlList.push(inputImageUrl);
        };

        fileReader.onloadend = () => {
          loadCompleteCount++;

          if (loadCompleteCount === fileList.length) {
            const newForm: Post = { ...form, imageUrl: newImageUrlList };
            setForm(newForm);
          }
        };

        fileReader.readAsDataURL(currentFile);
      }
    };

    updateFormImageUrl();
  };

  const onButtonClick = () => fileInputRef.current?.click();

  return (
    <ImageAttachButtonContainer onClick={onButtonClick}>
      <img src={pictureIcon} alt="picture icon" />
      <span>사진</span>
      <span>{imageCount()}</span>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png, image/jpeg"
        multiple={true}
        onChange={onFileInputChange}
        style={{ display: "none" }}
      />
    </ImageAttachButtonContainer>
  );
};

export default ImageAttachButton;
