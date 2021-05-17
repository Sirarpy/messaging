import React, { useRef } from "react";
import axios from "axios";
import sendMessageIcon from "../Send Message.png";
import Cookies from "js-cookie";

const SendMessage = ({ userId, targetName, uniqueGNames, uName, value, onChange }) => {
  const textareaRef = useRef();
  var newMessage = useRef();

  function sendMessage() {
    if (textareaRef.current.value === "") {
      alert("message is empty");
    } else if (userId === 0) {
      alert("user is not defined");
    } else {
      //  console.log(textareaRef.current.value );
      newMessage = textareaRef.current.value;
      textareaRef.current.value = "";
    }

    let session_id = Cookies.get("session_id");

    uniqueGNames.map((uG) => {
      if (uG === targetName && newMessage !== "") {
        axios
          .post(
            "http://localhost:8303/post",
            {
              message_content: newMessage,
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
      } else {
        return false;
      }

      return uG;
    });

    // eslint-disable-next-line array-callback-return
    uName.map((uN) => {
      if (uN === targetName) {
        axios
          .post(
            "http://localhost:8303/post",
            {
              message_content: newMessage,
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
      } else {
        return false;
      }
    });
  }

  function handleChange(event) {
        // Here, we invoke the callback with the new value
        onChange(event.target.value);
    }

  return (
    <div className="messagingWrite">
      <div className="messagingWriteRow">
        <textarea ref={textareaRef} placeholder="Send Message..."   value={value} onChange={handleChange}/>
        <button type="submit" onClick={sendMessage}>
          <img src={sendMessageIcon} alt="sendMessg" />
        </button>
      </div>
    </div>
  );
};
export default SendMessage;
