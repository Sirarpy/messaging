import logo from './images/Logo_AlanTuring.png';
import notif from './images/Vector-Notif.png';
import user from './images/user.png'
const Header = () =>{
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="headerItems">
                <h1>Messages</h1>
                <div className="rightHeaderItems">
                    <img src={notif} alt="notif"/>
                    <img src={user} alt="notif"/>
                </div>
            </div>
        </header>
    )
}
export default Header;