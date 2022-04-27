import styled from "styled-components";

interface PostImageProps {
  imgUrl: string | string[] | null;
}

const PostImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

const PostImage = ({ imgUrl }: PostImageProps) => {
  if (imgUrl === null) return <div />;

  if (typeof imgUrl === "string") {
    return <PostImageContainer src={imgUrl} alt="post image" />;
  }

  const imageUrlArray = imgUrl;
  return (
    <>
      {imageUrlArray.map((imgSrc: string, index) => (
        <PostImageContainer key={index} src={imgSrc} alt="post image" />
      ))}
    </>
  );
};

export default PostImage;
