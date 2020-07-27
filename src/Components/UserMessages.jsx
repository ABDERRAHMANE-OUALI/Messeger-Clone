import React, { useEffect, useState } from "react";
import TemplateMsg from "./TemplateMsg";
import db from "../firebase";

function UserMessages({ userMsg, usermsg }) {
  const [serverMsg, setServerMsg] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snap) => {
        setServerMsg(snap.docs.map((doc) => doc.data()));
      });
  }, [usermsg]);
  const editedMsg = serverMsg.filter((m) => m.username !== usermsg);
  return (
    <div className="msg__column">
      {editedMsg.map((m) => (
        <TemplateMsg msg={m} backgroundColor="gray" key={m.timestamp} />
      ))}
      {userMsg.map((m) => (
        <TemplateMsg msg={m} isUser={true} key={m.id} />
      ))}
    </div>
  );
}

export default UserMessages;
