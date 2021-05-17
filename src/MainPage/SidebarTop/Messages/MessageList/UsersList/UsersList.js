import ShowMessage from "./ShowMessage/ShowMessage";
import ShowSessionUserMessage from "./ShowSessionUserMessage/ShowSessionUserMessage";
import Cookies from "js-cookie";

const UsersList = ({ targetName, userName, messages }) => {
  let user_session_id = Cookies.get("user_session_id");

  return (
    <div>
      {userName
        ? userName.map((currentUser) =>
            `${currentUser.firstName} ${currentUser.lastName}` === targetName
              ? messages
                ? messages.map((item) =>
                    +item.user_sender_id === +user_session_id ? (
                      <ShowSessionUserMessage
                        messages={item}
                        key={item.message_id}
                        userName={userName}
                      />
                    ) : (
                      <ShowMessage
                        messages={item}
                        currentUser={currentUser}
                        // key={item.message_id}
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

export default UsersList;
