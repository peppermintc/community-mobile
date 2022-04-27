import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { Post } from "../../interfaces";
import useActionCreators from "../../hooks/useActionCreators";
import closeIcon from "../../img/Close.png";

interface PreviewItemsProps {
  children: React.ReactNode;
}

interface PreviewItemProps {
  previewImageUrl: string;
}

const ImagePreviewContainer = styled.div`
  width: 100%;
  height: 83px;
  margin-bottom: 16px;
  overflow-x: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const PreviewItemsContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0px;
  display: flex;
  gap: 16px;
`;

const PreviewItemContainer = styled.div`
  height: 83px;
  min-width: 89px;
  max-width: 89px;
  position: relative;
`;

const PreviewItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  background-color: #ebebeb;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

const CloseIconContainer = styled.img`
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
`;

const PreviewItems = ({ children }: PreviewItemsProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const itemsRef = useRef<HTMLDivElement>(null);

  const draggingOn = () => {
    if (isDragging) return;
    setIsDragging(true);
  };

  const draggingOff = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  const scrollItems = (e: React.MouseEvent) => {
    if (!itemsRef || !itemsRef.current) return;

    const newLeft =
      Number(itemsRef.current.style.left.slice(0, -2)) + e.movementX;
    const newLeftPx = `${newLeft}px`;
    const ItemsLeftX = newLeft;
    const ItemsRightX = newLeft + itemsRef.current.offsetWidth;

    let scrollDisable = false;
    if (ItemsRightX < window.innerWidth - 40) scrollDisable = true;
    if (ItemsLeftX > 0) scrollDisable = true;

    if (scrollDisable === true) return;
    else itemsRef.current.style.left = newLeftPx;
  };

  const onMouseDown = () => draggingOn();
  const onMouseUp = () => draggingOff();
  const onMouseLeave = () => draggingOff();
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    scrollItems(e);
  };

  useEffect(() => {
    if (!itemsRef || !itemsRef.current) return;
    itemsRef.current.style.left = "0px";
  }, [children]);

  return (
    <PreviewItemsContainer
      ref={itemsRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </PreviewItemsContainer>
  );
};

const PreviewItem = ({ previewImageUrl }: PreviewItemProps) => {
  const form = useSelector((state: RootState) => state.community.form);
  const { setForm } = useActionCreators();

  const onCloseClick = () => {
    if (!form) return;

    if (form.imageUrl === null) {
      return;
    } else if (typeof form.imageUrl === "string") {
      const newForm: Post = { ...form, imageUrl: null };
      setForm(newForm);
    } else {
      let newImageUrl: string | string[] | null = form.imageUrl.filter(
        (image) => image !== previewImageUrl,
      );
      if (newImageUrl.length < 1) newImageUrl = null;
      const newForm: Post = { ...form, imageUrl: newImageUrl };
      setForm(newForm);
    }
  };

  return (
    <PreviewItemContainer>
      <PreviewItemImage src={previewImageUrl} alt="preview" />
      <CloseIconContainer
        src={closeIcon}
        alt="close"
        onClick={() => onCloseClick()}
      />
    </PreviewItemContainer>
  );
};

const ImagePreview = () => {
  const [previewImageList, setPreviewImageList] = useState<string[]>([]);
  const form = useSelector((state: RootState) => state.community.form);

  useEffect(() => {
    if (!form) return;

    if (form.imageUrl === null) {
      setPreviewImageList([]);
    } else if (typeof form.imageUrl === "string") {
      setPreviewImageList([form.imageUrl]);
    } else setPreviewImageList(form.imageUrl);
  }, [form]);

  return (
    <ImagePreviewContainer>
      <PreviewItems>
        {previewImageList.map((previewImageUrl, index) => (
          <PreviewItem key={index} previewImageUrl={previewImageUrl} />
        ))}
      </PreviewItems>
    </ImagePreviewContainer>
  );
};

export default ImagePreview;
