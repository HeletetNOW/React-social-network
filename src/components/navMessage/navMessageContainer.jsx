import {
  sendMessageActionCreator,
  upgateMessageActionCreator,
} from "../../redux/dialogs-reducer";
import NavMessage from "./navMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },

    upgateMessage: (text) => {
      dispatch(upgateMessageActionCreator(text));
    },
  };
};

const NavMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavMessage);

export default NavMessageContainer;
