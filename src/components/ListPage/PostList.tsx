import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import viewCountIcon from "../../img/eye.png";
import likeCountIcon from "../../img/like-thumb.png";
import talkCountIcon from "../../img/talk.png";
import { Post } from "../../interfaces";
import { RootState } from "../../modules";
import PostItemHeader from "../common/PostItemHeader";

interface PostItemProps {
  post: Post;
  onClick: React.MouseEventHandler;
}

interface CountInfoProps {
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

interface CountInfoItemProps {
  icon: string;
  count: number;
}

const PostListContainer = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 14px;
  gap: 6px;
`;

const PostItemContainer = styled.div`
  background-color: #ffffff;
  padding: 24px 26px 20px 26px;
`;

const Title = styled.div`
  margin-top: 19px;
  font-weight: 700;
  line-height: 24px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Content = styled.div`
  margin-top: 7px;
  font-size: 14px;
  line-height: 22px;
  color: #7a7a7a;
  height: 44px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PostImage = styled.img`
  margin-top: 17px;
  width: 100%;
  height: 160px;
  object-fit: cover;
  vertical-align: middle;
`;

const CountInfoContainer = styled.div`
  margin-top: 16px;
  font-weight: 500;
  font-size: 12px;
  color: #7a7a7a;
  display: flex;
  gap: 12px;
`;

const CountInfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CountInfoItem = ({ icon, count }: CountInfoItemProps) => {
  return (
    <CountInfoItemContainer>
      <img src={icon} alt="icon" />
      <span>{count}</span>
    </CountInfoItemContainer>
  );
};

const CountInfo = ({ viewCount, likeCount, commentCount }: CountInfoProps) => {
  return (
    <CountInfoContainer>
      <CountInfoItem icon={viewCountIcon} count={viewCount} />
      <CountInfoItem icon={likeCountIcon} count={likeCount} />
      <CountInfoItem icon={talkCountIcon} count={commentCount} />
    </CountInfoContainer>
  );
};

const PostItem = ({ post, onClick }: PostItemProps) => {
  const getImageSrc = (post: Post) => {
    if (!post.imageUrl) return;
    if (typeof post.imageUrl === "string") {
      return post.imageUrl;
    } else {
      return post.imageUrl[0];
    }
  };

  return (
    <PostItemContainer onClick={onClick}>
      <PostItemHeader post={post} />
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      {post.imageUrl && <PostImage src={getImageSrc(post)} alt="post image" />}
      <CountInfo
        viewCount={post.viewCount}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
      />
    </PostItemContainer>
  );
};

const PostList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const { posts, currentCategory } = useSelector(
    (state: RootState) => state.community,
  );

  useEffect(() => {
    let scrollTopValue: number;
    if (typeof location.state === "number") scrollTopValue = location.state;
    else scrollTopValue = 0;

    setTimeout(() => {
      window.scroll({
        top: scrollTopValue,
        left: 0,
      });
    }, 0);
  }, [location]);

  useLayoutEffect(() => {
    const isAllCategory: boolean = currentCategory?.categoryPk === -1;
    if (isAllCategory) {
      setFilteredPosts(posts);
      return;
    }

    const isPopularCategory: boolean = currentCategory?.categoryPk === 0;
    if (isPopularCategory) {
      const popularPosts = posts.filter((post) => post.viewCount >= 100);
      setFilteredPosts(popularPosts);
      return;
    }

    const newFilteredCategory = posts.filter(
      (post) => post.categoryPk === currentCategory?.categoryPk,
    );
    setFilteredPosts(newFilteredCategory);
  }, [currentCategory]);

  const onPostItemClick = (postPk: number) => {
    const scrollPostion = window.pageYOffset;
    navigate(`/community/post/${postPk}`, {
      state: scrollPostion,
    });
  };

  return (
    <PostListContainer>
      {filteredPosts.map((post) => (
        <PostItem
          key={post.pk}
          post={post}
          onClick={() => onPostItemClick(post.pk)}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
