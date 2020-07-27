import React from "react";
import UserMessages from "./UserMessages";

function Messages({ message, usermsg }) {
  return (
    <div>
      <UserMessages userMsg={message} usermsg={usermsg}/>
    </div>
  );
}

export default Messages;
