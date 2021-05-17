import { useState } from "react";
import Searching from "./Searching/Searching";
import MessageList from "./MessageList/MessageList";
import "./messages.css";

const Messages = () => {
  const [userId, setUserId] = useState(0);
  const [targetName, setTargetName] = useState("");

  function handleClick(event) {
    setUserId(event.target.id);
    setTargetName(event.target.innerText);
  }

  return (
    <div className="rightContentMess">
      <Searching handleClick={handleClick} />
      {userId ? <MessageList userId={userId} targetName={targetName} /> : null}
    </div>
  );
};

export default Messages;
