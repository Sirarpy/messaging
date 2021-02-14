// import { FaRegCalendar, FaGraduationCap} from "react-icons/all";
import cap from '../../../images/cap.png'
import calendar from '../../../images/calend.png'
import './LeftBar.css'

const LeftBar = ()=>{
    return(
        <div className='leftBar'>
            <img src={cap} alt="cap"/>
            <img src={calendar} alt="calendar"/>
        </div>
    )
}
export default LeftBar