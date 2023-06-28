import Style from "./Message.module.css";
import React from "react";

const Message = (props) => {
  return <div className={Style.link}>{props.message}</div>;
};

export default Message;
