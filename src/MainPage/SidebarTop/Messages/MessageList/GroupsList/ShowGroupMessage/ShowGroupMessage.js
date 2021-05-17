import messagingHeaderAvatar from '../../activeUserAvatar.png'

function ShowGroupMessage({gMess, userName}) {
      return (
        <div className="messagingContent" key={gMess.message_id}>
        <div className="messageWhiteArea">
        <div className="messagingContentAvatar">
                <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
            </div>
            <div className="messagingContentItems">
                <div className="messagingContentInfo">
                    {
                        userName.map(eachGMember =>
                            eachGMember.id === gMess.user_sender_id ?
                                <p key={eachGMember.id} className="messUserName">{eachGMember.firstName} {eachGMember.lastName}</p>
                                : false
                        )
                    }
                    <div>
                    <p className="messDate">{gMess ? gMess.date.slice(0, 10) : "00:00:00"}</p>
                    <p className="messDate">{gMess ? gMess.date.slice(11, 18) : "00:00:00"}</p>
                    </div>
                    
                </div>
                <p className="messageContentText">{gMess.message_content}</p>
            </div>
        </div>
            
        </div>
    )

}

export default ShowGroupMessage