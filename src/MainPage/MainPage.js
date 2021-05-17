import React from "react";
import "../SignUp/SignUp.css";
import SidebarLeft from "./SidebarLeft/SidebarLeft";
import SidebarTop from "./SidebarTop/SidebarTop";
import MainContent from "./MainPageNavbar/MainPageNavbar";

export function MainPage() {
    return (
        <div className={"MainPage"}>
            <SidebarTop/>
            <SidebarLeft/>
            <MainContent/>
        </div>
    )
}