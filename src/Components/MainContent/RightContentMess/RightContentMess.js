import Searching from "./Searching/Searching"
import Messages from "./Messages/Messages";
import './RightContentMess.css'

const RightContentMess = ()=>{
    return(
    <div className="rightContentMess">
        <Searching/>
        <Messages/>
    </div>
    )
}
export default RightContentMess;