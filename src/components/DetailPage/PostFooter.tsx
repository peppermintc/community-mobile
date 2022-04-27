import { useSelector } from "react-redux";
import styled from "styled-components";
import useActionCreators from "../../hooks/useActionCreators";
import { RootState } from "../../modules";
import likeIcon from "../../img/like-thumb-gray.png";
import talkIcon from "../../img/talk-gray.png";

interface PostFooterProps {
  likeCount: number;
  commentCount: number;
}

interface CountButtonProps {
  count: number;
  icon: string;
  onClick?: React.MouseEventHandler;
}

const PostFooterContainer = styled.div`
  padding: 15px 24px 20px 26px;
  display: flex;
  gap: 10px;
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

const CountButton = ({ icon, count, onClick }: CountButtonProps) => {
  return (
    <CountButtonContainer onClick={onClick}>
      <img src={icon} alt="button icon" />
      {count}
    </CountButtonContainer>
  );
};

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
