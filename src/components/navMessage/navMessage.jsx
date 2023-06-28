import React from "react";
import Style from "./navMessage.module.css";
import Message from "./Message/Message";

const NavMessage = (props) => {
  let onMessage = React.createRef();

  let onChangeMessage = () => {
    let newText = onMessage.current.value;
    props.upgateMessage(newText);
  };

  let sendMessage = () => {
    props.sendMessage();
  };

  let messages = props.dialogsPage.messages.map((p) => (
    <Message message={p.message} />
  ));
  let dialogs = props.dialogsPage.dialogs.map((p) => (
    <div className={Style.link}>{p.name}</div>
  ));
  return (
    <div className={Style.content}>
      <div className={Style.dialogs}>{dialogs}</div>
      <div className={Style.row}>
        {messages}
        <textarea
          ref={onMessage}
          onChange={onChangeMessage}
          value={props.dialogsPage.newMessageText}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default NavMessage;
