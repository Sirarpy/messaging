import React, { useEffect, useState } from "react";
import axios from "axios";
import ShowGroupMessage from "./ShowGroupMessage/ShowGroupMessage";
import ShowSessionUserGroupMessage from "./ShowSessionUserGroupMessage/ShowSessionUserGroupMessage";
import Cookies from "js-cookie";

const GroupsList = ({ userId, targetName, userName, uniqueGNames, groupMessages }) => {
  // const [groupMessages, setGroupMessages] = useState([0]);

  // let session_id = Cookies.get("session_id");
  let user_session_id = Cookies.get("user_session_id");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8303/chat/group/" + userId, 
  //     {
  //       headers: {
  //         session_id: session_id,
  //          "Content-Type": "application/json",
  //       },
  //     }
  //     )
  //     .then((response) => setGroupMessages(response.data));
  // }, [userId, session_id]);

  return (
    <div key={userId}>
      {uniqueGNames
        ? uniqueGNames.map((currentUser) =>
            currentUser === targetName
              ? groupMessages
                ? groupMessages.map((gMess) =>
                    +gMess.user_sender_id !== +user_session_id ? (
                      <ShowGroupMessage
                        gMess={gMess}
                        // key={gMess.message_id}
                        userName={userName}
                      />
                    ) : (
                      <ShowSessionUserGroupMessage
                        gMess={gMess}
                        // key={gMess.message_id}
                        userName={userName}

                      />
                    )
                  )
                : false
              : false
          )
        : false}
    </div>
  );
};

export default GroupsList;
