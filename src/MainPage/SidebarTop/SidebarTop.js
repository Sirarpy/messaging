import React from "react";
import "./SidebarTop.css";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import messages from "./images/Messages.svg";
import notifications from "./images/Notifications.svg";
import user from "./images/User.svg";
import axios from "axios/index";
import Cookies from "js-cookie";

// import SignOut from "../../SignOut/SignOut";

const SidebarTop = () => {
  let { url } = useRouteMatch();
  let location = useLocation();
  let title = location.pathname.split("/")[2]?.replace("-", " ");
  let edu_title = location.pathname.split("/")[2] === "education";

  function signOut() {
    axios
      .get(
        "http://localhost:8303/signout"
        // {
        //   headers: {
        //     session_id: session_id,
        //     "Content-Type": "application/json",
        //   },
        // }
      )
      .then(
        (response) => {
          if (response.status === 200) {
            Cookies.remove("session_id");

            console.log("session deleted");
            console.log("session deleted");
            console.log(Cookies.get("session_id"));

            // Cookies.remove();
            // history.push(`${API_BASE_URL}"/SignUp"`);
          }
        },
        (Error) => console.log(Error.status)
      );
  }

  return (
    <div className={`${edu_title ? "rightbar_activ" : ""} SidebarTop`}>
      <h3 className={"main_title"}>
        {title ? title[0].toUpperCase() + title.slice(1) : "Main page"}
      </h3>
      <div>
        {/* { <SignOut/>} */}

        {/* <Link>
       { <SignOut/>}
      </Link> */}


        <Link to={'/SignUp'}>
          <button className="signOut" onClick={signOut}>Sign Out</button>
        </Link>
        <Link to={`${url}/messages`}>
          {title === "messages" ? "" : <img src={messages} alt="" />}
        </Link>
        <Link to={`${url}/notifications`}>
          {title === "notifications" ? "" : <img src={notifications} alt="" />}
        </Link>
        <Link to={`${url}/my-account`}>
          <img className={"user_img"} src={user} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default SidebarTop;
