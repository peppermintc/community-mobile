import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/community";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { fetchCategories, setCurrentCategory, setPosts, setCurrentPost } =
    useMemo(
      () => bindActionCreators(communityActionCreators, dispatch),
      [dispatch],
    );

  return {
    fetchCategories,
    setCurrentCategory,
    setPosts,
    setCurrentPost,
  };
};

export default useActionCreators;
