import React from "react";
import { motion } from "framer-motion";

function TemplateMsg({ msg, float = "left", backgroundColor = "#0f7bff", isUser = false }) {
  return msg.text ? (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      style={{
        backgroundColor: backgroundColor,
        width: "fit-content",
        padding: "2.5rem",
        height: "13%",
        borderRadius: "1.3rem",
        margin: "12px 0 12px 0",
        marginLeft: isUser && "auto",
        float: float,
      }}
    >
      <p>
        <span style={{ color: "orange" }}>{msg.username || "Unknow User"}</span>: {msg.text}
      </p>
    </motion.div>
  ) : null;
}

export default TemplateMsg;
