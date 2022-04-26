import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PostItemHeader from "../components/PostItemHeader";
import useActionCreators from "../hooks/useActionCreators";
import { Post } from "../interfaces";
import { RootState } from "../modules";
import backIcon from "../img/back.png";
import likeIcon from "../img/like-thumb-gray.png";
import talkIcon from "../img/talk-gray.png";

interface PostHeaderProps {
  post: Post;
}

interface PostFooterProps {
  likeCount: number;
  commentCount: number;
}

interface PostImageProps {
  imgUrl: string | string[] | null;
}

interface CountButtonProps {
  count: number;
  icon: string;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
`;

const BackToListContainer = styled.div`
  color: #b4b4b4;
  font-size: 14px;
  font-weight: 700px;
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 11px;
`;

const BackIcon = styled.img`
  margin-right: 6px;
  margin-left: 16px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  line-height: 24px;
  font-size: 17px;
  margin: 22px 24px 0 26px;
`;

const Content = styled.div`
  margin: 8px 24px 15px 26px;
  font-size: 15px;
  line-height: 24px;
  color: #7a7a7a;
`;

const PostHeaderContainer = styled.div`
  margin: 0 24px 0 26px;
`;

const PostFooterContainer = styled.div`
  padding: 15px 24px 20px 26px;
  display: flex;
  gap: 10px;
`;

const PostImageContainer = styled.img`
  width: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

const CountButtonContainer = styled.button`
  background-color: #f8f8f8;
  width: 52px;
  height: 32px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #7a7a7a;
  cursor: pointer;
`;

const BackToList = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => navigate(-1);

  return (
    <BackToListContainer>
      <BackIcon src={backIcon} alt="back" onClick={onBackButtonClick} />글
      목록으로
    </BackToListContainer>
  );
};

const PostImage = ({ imgUrl }: PostImageProps) => {
  if (imgUrl === null) return <div />;

  if (typeof imgUrl === "string") {
    return <PostImageContainer src={imgUrl} alt="post image" />;
  }

  const imageUrlArray = imgUrl;
  return (
    <>
      {imageUrlArray.map((imgSrc: string) => (
        <PostImageContainer src={imgSrc} alt="post image" />
      ))}
    </>
  );
};

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <PostItemHeader post={post} />
    </PostHeaderContainer>
  );
};

const PostFooter = ({ likeCount, commentCount }: PostFooterProps) => {
  return (
    <PostFooterContainer>
      <CountButton icon={likeIcon} count={likeCount} />
      <CountButton icon={talkIcon} count={commentCount} />
    </PostFooterContainer>
  );
};

const CountButton = ({ icon, count }: CountButtonProps) => {
  return (
    <CountButtonContainer>
      <img src={icon} alt="button icon" />
      {count}
    </CountButtonContainer>
  );
};

const DetailPage = () => {
  const { post_pk } = useParams();
  const { currentPost, posts } = useSelector(
    (state: RootState) => state.community,
  );
  const { setCurrentPost } = useActionCreators();

  useEffect(() => {
    if (!posts) return;

    const initDetailPageState = () => {
      const newCurrentPost: Post = posts.filter(
        (post) => post.pk === Number(post_pk),
      )[0];

      if (!newCurrentPost) return;
      setCurrentPost(newCurrentPost);
    };

    initDetailPageState();
  }, [posts]);

  return (
    <Page>
      <BackToList />
      {currentPost && (
        <>
          <PostHeader post={currentPost} />
          <Title>{currentPost.title}</Title>
          <Content>{currentPost.content}</Content>
          <PostImage imgUrl={currentPost.imageUrl} />
          <PostFooter
            likeCount={currentPost.likeCount}
            commentCount={currentPost.commentCount}
          />
        </>
      )}
    </Page>
  );
};

export default DetailPage;
