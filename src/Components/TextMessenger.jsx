import React, { useState } from "react";
import { Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

function TextMessenger({ handleMessages }) {
  const [input, setInput] = useState("");
  return (
    <form className="textmessenger" onSubmit={(e) => e.preventDefault()}>
      <Input
        onChange={(e) => setInput(e.currentTarget.value)}
        value={input}
        className="form-control"
        placeholder="Enter Your Message Here..."
      />
      <IconButton
        onClick={() => {
          handleMessages(input);
          setInput("");
        }}
        disabled={!input}
        color="primary" 
        className="btn-primary"
      >
        <SendIcon />
      </IconButton>
    </form>
  );
}

export default TextMessenger;
