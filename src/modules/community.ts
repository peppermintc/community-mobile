import { Dispatch } from "redux";
import { axiosGetCategories, axiosGetPosts } from "../api";
import { Category, Post } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface CommunityState {
  posts: Post[];
  categories: Category[];
  currentPost: Post | null;
  currentCategory: Category | null;
}

// Action Types
const SET_POSTS = "SET_POSTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CURRENT_POST = "SET_CURRENT_POST";
const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

// Action Creators
export const fetchCategories = () => async (dispatch: Dispatch) => {
  const categories: Category[] = await axiosGetCategories();
  dispatch({
    type: SET_CATEGORIES,
    payload: categories,
  });
};

export const setPosts = () => async (dispatch: Dispatch) => {
  const posts: Post[] = await axiosGetPosts();
  dispatch({
    type: SET_POSTS,
    payload: posts,
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

// Initial State
const initialState: CommunityState = {
  posts: [],
  categories: [],
  currentPost: null,
  currentCategory: null,
};

// Reducer
const communityReducer = (
  state: CommunityState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload,
      };
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    default:
      return state;
  }
};

export default communityReducer;
