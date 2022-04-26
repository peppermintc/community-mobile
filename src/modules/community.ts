import { Dispatch } from "redux";
import { axiosGetCategories, axiosGetPosts } from "../api";
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
}

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";
const SET_POSTS = "SET_POSTS";
const SET_CURRENT_POST = "SET_CURRENT_POST";

// Action Creators
export const initCategorySelectorState =
  (initialCategory: Category) => async (dispatch: Dispatch) => {
    const categories: Category[] = await axiosGetCategories();
    dispatch({
      type: SET_CATEGORIES,
      payload: categories,
    });

    dispatch({
      type: SET_CURRENT_CATEGORY,
      payload: initialCategory,
    });
  };

export const setCurrentCategory =
  (currentCategory: Category) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_CURRENT_CATEGORY,
      payload: currentCategory,
    });
  };

export const fetchPosts = () => async (dispatch: Dispatch) => {
  const posts: Post[] = await axiosGetPosts();
  dispatch({
    type: SET_POSTS,
    payload: posts,
  });
};

export const setCurrentPost = (currentPost: Post) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_CURRENT_POST,
    payload: currentPost,
  });
};

// Initial State
const initialState: CommunityState = {
  categories: [],
  currentCategory: null,
  posts: [],
  currentPost: null,
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
    default:
      return state;
  }
};

export default communityReducer;
