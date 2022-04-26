import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/community";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { setCategories, setCurrentCategory, setPosts, setCurrentPost } =
    useMemo(
      () => bindActionCreators(communityActionCreators, dispatch),
      [dispatch],
    );

  return {
    setCategories,
    setCurrentCategory,
    setPosts,
    setCurrentPost,
  };
};

export default useActionCreators;
