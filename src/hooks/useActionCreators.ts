import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/community";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { initListPageState, setCurrentCategory, setCurrentPost } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch],
  );

  return {
    initListPageState,
    setCurrentCategory,
    setCurrentPost,
  };
};

export default useActionCreators;
