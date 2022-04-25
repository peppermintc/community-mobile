import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetPosts } from "../api";
import viewCountIcon from "../img/eye.png";
import likeCountIcon from "../img/like-thumb.png";
import talkCountIcon from "../img/talk.png";
import { Post } from "../interfaces";

interface PostItemProps {
  post: Post;
}

interface HeaderProps {
  profileImageUrl: string;
  userName: string;
  category: string;
  writtenAt: string;
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
  height: 0px;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 6px;
  margin-top: 14px;
`;

const PostItemContainer = styled.div`
  background-color: #ffffff;
  padding: 24px 26px 20px 26px;
`;

const HeaderContainer = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
`;

const Section = styled.section`
  width: 100%;
  padding-left: 8px;
  padding-top: 4px;
`;

const UserName = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #222222;
  width: fit-content;
`;

const PostInfo = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #b4b4b4;
  width: fit-content;
`;

const Title = styled.div`
  margin-top: 19px;
  font-weight: 700;
  line-height: 24px;
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

const Header = ({
  profileImageUrl,
  userName,
  category,
  writtenAt,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <ProfileImage src={profileImageUrl} />
      <Section>
        <UserName>{userName}</UserName>
        <PostInfo>
          {category} ・ {writtenAt}
        </PostInfo>
      </Section>
    </HeaderContainer>
  );
};

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

const PostItem = ({ post }: PostItemProps) => {
  return (
    <PostItemContainer>
      <Header
        profileImageUrl={post.writerProfileUrl}
        userName={post.writerNickName}
        category={post.categoryName}
        writtenAt={post.writtenAt}
      />
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      {post.imageUrl && <PostImage src={post.imageUrl} alt="post image" />}
      <CountInfo
        viewCount={post.viewCount}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
      />
    </PostItemContainer>
  );
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useLayoutEffect(() => {
    axiosGetPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostItem key={post.pk} post={post} />
      ))}
    </PostListContainer>
  );
};

export default PostList;
