import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, message: "hey", likeCount: 0 }],
      newPostText: "social-network",
    },
    dialogsPage: {
      dialogs: [{ id: 1, name: "Denis" }],
      messages: [{ id: 1, message: "Im lox" }],
      newMessageText: "",
    },
    sideBar: {},
  },

  _emptyFunction() {},

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._emptyFunction(this._state);
  },

  subscribe(p) {
    this._emptyFunction = p;
  },
};

window.store = store;

export default store;
