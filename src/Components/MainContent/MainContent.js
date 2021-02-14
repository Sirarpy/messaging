import LeftBar from "./LeftBar/LeftBar";
import RightContentMess from "./RightContentMess/RightContentMess";

const MainContent = () => {
    return (
        <main className='mainMessage' style={{display: "flex"}}>
            <LeftBar/>
            <RightContentMess/>
        </main>


    )
}
export default MainContent;