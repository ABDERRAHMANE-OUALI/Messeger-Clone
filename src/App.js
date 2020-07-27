import React, { useState, useEffect } from "react";
import TextMessenger from "./Components/TextMessenger.jsx";
import Messages from "./Components/Messages";
import Logo from "./Components/Logo";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState([
    { id: Date.now(), username: username, text: "" },
  ]);
  useEffect(() => {
    const getUsername = prompt("Enter Your Username :");
    setUsername(getUsername);
  }, []);
  const handleMessages = (msg) => {
    setMessage([...message, { id: Date.now(), username: username, text: msg }]);
    db.collection("messages").add({
      username: username,
      text: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div className="App">
      <Logo />
      <Messages message={message} usermsg={username} />
      <TextMessenger handleMessages={handleMessages} />
    </div>
  );
}

export default App;
