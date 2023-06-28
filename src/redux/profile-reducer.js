const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [{ id: 1, message: "hey", likeCount: 0 }],
  newPostText: "social-network",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost: {
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
    default:
      return state;
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return { type: updateNewPostText, newText: text };
};
export const addPostActionCreator = () => {
  return { type: addPost };
};
export default profileReducer;
