const upgateMessage = "UPDATE-MESSAGE";
const sendMessage = "SEND-MESSAGE";

let initialState = {
  dialogs: [{ id: 1, name: "Denis" }],
  messages: [{ id: 1, message: "Im lox" }],
  newMessageText: "",
};

alert("Yes");

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case upgateMessage: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    case sendMessage: {
      let newText = state.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 2, message: newText }],
        newMessageText: "",
      };
    }
    default:
      return state;
  }
};
export const sendMessageActionCreator = (text) => {
  return { type: sendMessage };
};

export const upgateMessageActionCreator = (Text) => {
  return { type: upgateMessage, newText: Text };
};

export default dialogsReducer;
