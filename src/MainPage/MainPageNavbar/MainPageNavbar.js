import React from 'react';
import "./MainPageNavbar.css";
import {Switch, Route, useRouteMatch, useLocation} from "react-router-dom";
import Messages from "../SidebarTop/Messages/Messages";
import Notification from "../SidebarTop/Notification/Notification";
import MyAccount from "../SidebarTop/MyAccount/MyAccount";
import Education from "../SidebarLeft/Education/Education";
import Calendar from "../SidebarLeft/Calendar/Calendar";
// import MainContent from "../MainContent/MainContent";

const MainPageNavbar = (props) => {
    let {path} = useRouteMatch();
    let location = useLocation();
    let edu_title = location.pathname.split("/")[2] === "education";

    return (
        <div className={`${edu_title ? "rightbar_activ" : ""} MainContent`}>
            <Switch>
                {/* <Route exact path={path}>
                    <MainContent/>
                </Route> */}
                <Route exact path={`${path}/messages`}>
                    <Messages/>
                </Route>
                <Route path={`${path}/education`}>
                    <Education/>                                                                    
                </Route>
                <Route path={`${path}/calendar`}>
                    <Calendar/>
                </Route>
                
                <Route path={`${path}/notifications`}>
                    <Notification/>
                </Route>
                <Route path={`${path}/my-account`}>
                    <MyAccount/>
                </Route>
            </Switch>
        </div>
    )
};

export default MainPageNavbar