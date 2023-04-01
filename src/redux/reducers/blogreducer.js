import { ActionTypes } from "../constants/action-types";

const initialState = {
  blogItems: [],
};

export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BLOG_ITEMS:
      return { ...state, blogItems: action.payload };
    default:
      return state;
  }
};
