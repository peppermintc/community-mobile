import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/community";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const {
    initStore,
    setCurrentCategory,
    setCurrentPost,
    updateCurrentPostLikeCount,
    updateCurrentPostViewCount,
  } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch],
  );

  return {
    initStore,
    setCurrentCategory,
    setCurrentPost,
    updateCurrentPostLikeCount,
    updateCurrentPostViewCount,
  };
};

export default useActionCreators;
