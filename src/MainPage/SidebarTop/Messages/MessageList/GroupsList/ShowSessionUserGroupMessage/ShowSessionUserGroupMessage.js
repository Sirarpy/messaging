import messagingHeaderAvatar from "../../activeUserAvatar.png";
import Cookies from "js-cookie";

function ShowSessionUserGroupMessage({ gMess, userName }) {
  let user_session_id = Cookies.get("user_session_id");

  return (
    <div className="messagingContent sessionUserMess" key={gMess.message_id}>
      <div className="messageWhiteArea">
        <div className="messagingContentItems">
          <div className="messagingContentInfo">
            <div>
              <p className="messDate">
                {gMess ? gMess.date.slice(0, 10) : "00:00:00"}
              </p>
              <p className="messDate">
                {gMess ? gMess.date.slice(11, 18) : "00:00:00"}
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
          <p className="messageContentText">{gMess.message_content}</p>
        </div>
        <div className="messagingContentAvatar">
          <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar" />
        </div>
      </div>
    </div>
  );
}

export default ShowSessionUserGroupMessage;
