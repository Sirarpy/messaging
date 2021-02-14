import './header.css';
import logo from '../../images/Logo_AlanTuring.png';
import notif from '../../images/Vector-Notif.png';
import activeUser from '../../images/activeUserAvatar.png'
// import user from '../images/user.png'
const Header = () =>{
    return(
        <header className='messaging'>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="headerItems">
                    <h1>Messages</h1>
                <div className="rightHeaderItems">
                    <img className='notif' src={notif} alt="notif"/>
                    <img className='activeUserAvatar' src={activeUser} alt="activeUserAvatar"/>
                </div>
            </div>
        </header>
    )
}
export default Header;