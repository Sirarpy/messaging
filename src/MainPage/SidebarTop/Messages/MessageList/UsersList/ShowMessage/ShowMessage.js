import messagingHeaderAvatar from "../../activeUserAvatar.png";

function ShowMessage({ messages, currentUser }) {
  return (
    <div className="messagingContent" key={messages.message_id}>
      <div className="messageWhiteArea">
        <div className="messagingContentAvatar">
          <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar" />
        </div>
        <div className="messagingContentItems">
          <div className="messagingContentInfo">
            <p className="messUserName">{`${currentUser.firstName} ${currentUser.lastName}`}</p>

            <div>
            
            <p className="messDate">
              {messages ? messages.date.slice(0, 10) : "00:00:00"}
            </p>
            <p className="messDate">
              {messages ? messages.date.slice(11, 19) : "00:00:00"}
            </p>
            </div>
            
          </div>
          <p className="messageContentText">{messages.message_content}</p>
        </div>
      </div> 
    </div>
  );
}

export default ShowMessage;
