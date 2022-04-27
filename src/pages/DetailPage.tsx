import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import { Post } from "../interfaces";
import { RootState } from "../modules";
import { LinkGenerator } from "../utils/LinkGenerator";
import BackToList from "../components/DetailPage/BackToList";
import PostHeader from "../components/DetailPage/PostHeader";
import PostFooter from "../components/DetailPage/PostFooter";

interface PostImageProps {
  imgUrl: string | string[] | null;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  background-color: #ffffff;
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

const DetailPage = () => {
  const { post_pk } = useParams();
  const currentPost = useSelector(
    (state: RootState) => state.community.currentPost,
  );
  const posts = useSelector((state: RootState) => state.community.posts);
  const { setCurrentPost, updateCurrentPostViewCount } = useActionCreators();

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

  useEffect(() => {
    updateCurrentPostViewCount();
  }, []);

  return (
    <Page>
      <BackToList />
      {currentPost && (
        <>
          <PostHeader post={currentPost} />
          <Title>{currentPost.title}</Title>
          <Content>
            <LinkGenerator>{currentPost.content}</LinkGenerator>
          </Content>
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
