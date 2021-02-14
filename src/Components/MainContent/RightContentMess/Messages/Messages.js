import React from 'react'
import {useState, useEffect} from 'react'
import './messages.css'
import messagingHeaderAvatar from './activeUserAvatar.png'
import cheack from './cheack.png'
import sendMassg  from './Send Message.png'
import NewMessage from './NewMessage/NewMessage'


function Messages(){

    const [innerHeight, setInnerHeight] = useState('37vh')

    useEffect(()=>{
        window.addEventListener('resize', (event) => {
            setInnerHeight(()=>((700 / 1400) * 100)+'vh' )
        });

    }, [])


    const newDate  = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let houres =newDate.getHours()
    let minutes =newDate.getMinutes()

let textInput = React.createRef();
const [mess, setMess] = useState('')

useEffect(()=>{
    setMess(mess)
})

function handleClick() {
  setMess(textInput.current.value);
  textInput.current.value = ''
}

        return(
        <section className="messageItems">
            <div className="messagingHeader">
                <div className="messagingHeaderAvatar">
                    <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                </div>
                <div><p className="MessTitle">First-Name Last-Surname</p> </div>
            </div>  
            <section className="allMessages" style={{height:innerHeight}}>
            {
                mess ? <NewMessage mess = {mess}/> : ""
            }
            
                <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">The first lessons explain C# concepts using small snippets of code. You'll learn the basics of C# syntax and how to work with data types like strings, numbers, and booleans. It's all interactive, and you'll be writing and running code within minutes.
                            These first lessons assume no prior knowledge of programming or the C# language.</p>
                    </div>
                </div>  
                <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">The first lessons explain C# concepts using small snippets of code. You'll learn the basics of C
                            # syntax and how to work with data types like strings, numbers, and booleans.</p>
                    </div>
                </div>  
                <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">The first lessons explain C# concepts using small snippets of code. You'll learn the basics of C
                            # syntax and how to work with data types like strings, numbers, and booleans.</p>
                    </div>
                </div> 
                <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">The first lessons explain C# concepts using small snippets of code. You'll learn the basics of C
                            # syntax and how to work with data types like strings, numbers, and booleans.</p>
                    </div>
                </div>
                <div className="messagingContent">
                    <div className="messagingContentAvatar">
                        <img src={messagingHeaderAvatar} alt="messagingHeaderAvatar"/>
                    </div>
                    <div className="messagingContentItems">
                        <div className="messagingContentInfo">
                            <p>Name Surname</p> <p>{date} {month} {year}, {houres}:{minutes} </p> <img src={cheack} alt="check"/>
                        </div>
                            <p className="messagecontentText">The first lessons explain C# concepts using small snippets of code. You'll learn the basics of C
                            # syntax and how to work with data types like strings, numbers, and booleans.</p>
                    </div>
                </div> 
            </section>
            <div className="messagingWrite">
                <div className="messagingWriteRow">
                <textarea ref={textInput}  placeholder="The first lessons explain C#"></textarea>
                <img src={sendMassg} alt="sendMessg" onClick={handleClick} />
            </div>
            </div>  
        </section>
    )
}
export default Messages;