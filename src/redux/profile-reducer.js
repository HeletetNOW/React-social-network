const addPostAC = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";

let initialState = {
  posts: [{ id: 1, message: "hey", likeCount: 0 }],
  newPostText: "social-network",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPostAC: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 1, message: state.newPostText, likeCount: 0 },
        ],
        newPostText: "",
      };
    }
    case updateNewPostText: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USERS_PROFILE: {
      debugger;
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: updateNewPostText, newText: text };
};
export const addPost = () => {
  return { type: addPostAC };
};
export const setUsersProfile = (profile) => {
  return { type: SET_USERS_PROFILE, profile };
};
export default profileReducer;
