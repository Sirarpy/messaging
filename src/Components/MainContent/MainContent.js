import LeftBar from "./LeftBar/LeftBar";
import RightContentMess from "./RightContentMess/RightContentMess";

const MessageContent = () => {
    return (
        <main className='mainMessage' style={{display: "flex", backgroundColor: "#F9FBFE"}}>
            <LeftBar/>
            <RightContentMess/>
        </main>


    )
}
export default MessageContent;