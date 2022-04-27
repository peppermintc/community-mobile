import styled from "styled-components";
import PostItemHeader from "../common/PostItemHeader";
import { Post } from "../../interfaces";

interface PostHeaderProps {
  post: Post;
}

const PostHeaderContainer = styled.div`
  margin: 0 24px 0 26px;
`;

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <PostItemHeader post={post} />
    </PostHeaderContainer>
  );
};

export default PostHeader;
