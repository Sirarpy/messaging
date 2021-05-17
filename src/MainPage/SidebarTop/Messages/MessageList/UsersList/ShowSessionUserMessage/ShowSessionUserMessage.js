import messagingHeaderAvatar from "../../activeUserAvatar.png";
import Cookies from "js-cookie";

function ShowSessionUserMessage({ messages, userName }) {
  let user_session_id = Cookies.get("user_session_id");

  return (
    <div className="messagingContent sessionUserMess" key={messages.message_id}>
      <div className="messageWhiteArea">
        <div className="messagingContentItems">
          <div className="messagingContentInfo">
          <div>
           <p className="messDate">
              {messages ? messages.date.slice(0, 10) : "00:00:00"}
            </p>
              <p className="messDate">
              {messages ? messages.date.slice(11, 19) : "00:00:00"}
            </p>
          </div>
            <p className="messUserName">
              {userName
                ? userName.map((sessionUserName) =>
                    +sessionUserName.id === +user_session_id
                      ? `${sessionUserName.firstName} ${sessionUserName.lastName}`
                      : false
                  )
                : false}
            </p>
          </div>
          <p className="messageContentText">{messages.message_content}</p>
        </div>
        <div className="messagingContentAvatar">
          <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar" />
        </div>
      </div>
    </div>
  );
}

export default ShowSessionUserMessage;
