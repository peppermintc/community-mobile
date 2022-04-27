import { Dispatch } from "redux";
import { RootState } from ".";
import { axiosGetCategories, axiosGetPosts } from "../api";
import { CATEGORY_ALL } from "../components/ListPage/CategorySelector";
import { Category, Post } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface CommunityState {
  categories: Category[];
  currentCategory: Category | null;
  posts: Post[];
  currentPost: Post | null;
  form: Post | null;
}

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
const SET_POSTS = "SET_POSTS";
const SET_CURRENT_POST = "SET_CURRENT_POST";
const SET_FORM = "SET_FORM";

// Action Creators
export const initStore = () => async (dispatch: Dispatch) => {
  const posts: Post[] = await axiosGetPosts();
  const categories: Category[] = await axiosGetCategories();

  dispatch({
    type: SET_POSTS,
    payload: posts,
  });

  dispatch({
    type: SET_CATEGORIES,
    payload: categories,
  });

  dispatch({
    type: SET_CURRENT_CATEGORY,
    payload: CATEGORY_ALL,
  });
};

export const setCurrentCategory =
  (currentCategory: Category) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_CATEGORY,
      payload: currentCategory,
    });
  };

export const setCurrentPost = (currentPost: Post) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_CURRENT_POST,
    payload: currentPost,
  });
};

export const updateCurrentPostLikeCount =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { posts, currentPost } = getState().community;

    if (!currentPost) return;

    const newPosts = posts.map((post) => {
      if (post.pk === currentPost.pk) {
        return {
          ...post,
          likeCount: post.likeCount + 1,
        };
      } else return post;
    });

    dispatch({
      type: SET_POSTS,
      payload: newPosts,
    });
  };

export const updateCurrentPostViewCount =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { posts, currentPost } = getState().community;

    if (!currentPost) return;

    const newPosts = posts.map((post) => {
      if (post.pk === currentPost.pk) {
        return {
          ...post,
          viewCount: post.viewCount + 1,
        };
      } else return post;
    });

    dispatch({
      type: SET_POSTS,
      payload: newPosts,
    });
  };

export const setForm = (newForm: Post) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_FORM,
    payload: newForm,
  });
};

// Initial State
const initialState: CommunityState = {
  categories: [],
  currentCategory: null,
  posts: [],
  currentPost: null,
  form: null,
};

// Reducer
const communityReducer = (
  state: CommunityState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case SET_FORM:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

export default communityReducer;
