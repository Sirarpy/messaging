import React, { useState, useEffect, useRef } from "react";
import "./messageList.css";
import messagingHeaderAvatar from "./activeUserAvatar.png";
import sendMessageIcon from "./Send Message.png";

// import SendMessage from "./SendMessage/SendMessage";
import UsersList from "./UsersList/UsersList";
import GroupsList from "./GroupsList/GroupsList";
import axios from "axios";
import Cookies from "js-cookie";

function MessageList({ userId, targetName }) {
  const [innerHeight, setInnerHeight] = useState("37vh");
  const [userName, setUserName] = useState([0]);
  const [groupName, setGroupName] = useState([0]);
  const [messages, setMessages] = useState([0]);
  let session_id = Cookies.get("session_id");
  const [groupMessages, setGroupMessages] = useState([0]);

  window.addEventListener("resize", (event) => {
    setInnerHeight(() => (700 / 1400) * 100 + "vh");
  });

  // *********************** usersList********************
  useEffect(() => {
    getAllUsers();
    getAllGroups();
    loadUsersMassages();
    loadGroupMessages();
  }, [userId, session_id]);
  // }, [userId]);

  const loadUsersMassages = () => {
    axios
      .get("http://localhost:8303/chat/user/" + userId, {
        headers: {
          session_id: session_id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setMessages(response.data));
  };

  const loadGroupMessages = () => {
    axios
      .get("http://localhost:8303/chat/group/" + userId, {
        headers: {
          session_id: session_id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => setGroupMessages(response.data));
  };

  const getAllUsers = () => {
    axios
      .get("http://localhost:8303/users", {
        headers: {
          session_id: session_id,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setUserName(response.data);
      });
  };

  const getAllGroups = () => {
    axios
      .get("http://localhost:8303/user/groupChat", {
        headers: {
          session_id: session_id,
        },
      })
      .then((response) => setGroupName(response.data));
  };

  const uName = userName.map(
    (currentUser) => `${currentUser.firstName} ${currentUser.lastName}`
  );

  const uniqueGNames = [];

  groupName &&
    groupName.map((gName) => {
      if (uniqueGNames.indexOf(gName.Name) === -1) {
        uniqueGNames.push(gName.Name);
      }
      return gName;
    });

  // ********************  send message ****************
  const textareaRef = useRef();

  function sendMessage() {
    const message = textareaRef.current.value;

    if (message === "") {
      alert("message is empty");
      return;
    }

    if (userId === 0) {
      alert("user is not defined");
      return;
    }

    if (uniqueGNames.includes(targetName)) {
      axios
        .post(
          "http://localhost:8303/post",
          {
            message_content: message,
            user_receiver_id: -1,
            group_receiver_id: +userId,
          },
          {
            headers: {
              session_id: session_id,
              "Content-Type": "application/json",
            },
          }
        )
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } else if (uName.includes(targetName)) {
      axios
        .post(
          "http://localhost:8303/post",
          {
            message_content: message,
            user_receiver_id: +userId,
            group_receiver_id: -1,
          },
          {
            headers: {
              session_id: session_id,
            },
          }
        )
        .then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    // eslint-disable-next-line array-callback-return
    loadUsersMassages();
    loadGroupMessages();
    textareaRef.current.value = "";
  }

  return (
    <section className="messageItems">
      <div className="messagingHeader">
        <div className="messagingHeaderAvatar">
          <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar" />
        </div>
        <div>
          <p className="MessTitle">{targetName}</p>
        </div>
      </div>
      <section className="allMessages" style={{ height: innerHeight }}>
        <div>
          {
            <GroupsList
              userId={userId}
              targetName={targetName}
              userName={userName}
              uniqueGNames={uniqueGNames}
              groupMessages={groupMessages}
            />
          }
          {
            <UsersList
              userId={userId}
              targetName={targetName}
              userName={userName}
              messages={messages}
            />
          }
        </div>
      </section>
      {/* <SendMessage
        userId={userId}
        targetName={targetName}
        uniqueGNames={uniqueGNames}
        uName={uName}
        value={value}
        onChange={handleChange} 
      /> */}
      <div className="messagingWrite">
        <div className="messagingWriteRow">
          <textarea ref={textareaRef} placeholder="Send Message..." />
          <button type="submit" onClick={sendMessage}>
            <img src={sendMessageIcon} alt="sendMessg" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MessageList;
