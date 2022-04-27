import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { RootState } from "../../modules";
import likeIcon from "../../img/like-thumb-gray.png";
import talkIcon from "../../img/talk-gray.png";
import CountButton from "./CountButton";

interface PostFooterProps {
  likeCount: number;
  commentCount: number;
}

const PostFooterContainer = styled.div`
  padding: 15px 24px 20px 26px;
  display: flex;
  gap: 10px;
`;

const PostFooter = ({ likeCount, commentCount }: PostFooterProps) => {
  const { currentPost } = useSelector((state: RootState) => state.community);
  const { updateCurrentPostLikeCount } = useActionCreators();

  const onLikeButtonClick = () => {
    if (!currentPost) return;
    updateCurrentPostLikeCount();
  };

  return (
    <PostFooterContainer>
      <CountButton
        icon={likeIcon}
        count={likeCount}
        onClick={onLikeButtonClick}
      />
      <CountButton icon={talkIcon} count={commentCount} />
    </PostFooterContainer>
  );
};

export default PostFooter;
