import React,  {useState, useEffect} from 'react'
import messagingHeaderAvatar from './../activeUserAvatar.png'
import cheack from './../cheack.png'
import sendMassg  from './../Send Message.png'
function NewMessage(params) {

const newDate  = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let houres =newDate.getHours()
    let minutes =newDate.getMinutes()

return(
    <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">{params.mess}</p>
                    </div>
                </div>
)
    
}

export default NewMessage