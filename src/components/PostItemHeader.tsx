import styled from "styled-components";
import { Post } from "../interfaces";
import { formatWrittenAt } from "../utils";

interface PostItemHeaderProps {
  post: Post | null;
}

const PostItemHeaderContainer = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  background-color: pink;
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

const PostItemHeader = ({ post }: PostItemHeaderProps) => {
  return post ? (
    <PostItemHeaderContainer>
      <ProfileImage src={post.writerProfileUrl} />
      <Section>
        <UserName>{post.writerNickName}</UserName>
        <PostInfo>
          {post.categoryName} ・ {formatWrittenAt(post.writtenAt)}
        </PostInfo>
      </Section>
    </PostItemHeaderContainer>
  ) : null;
};

export default PostItemHeader;
