/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import "./SideBar.css";
import SideBar_Small from "./SideBar_Small";
import SideBar_Large from "./SideBar_Large";
import sidebarData from "../../scripts/sidebar.json";


interface SideBar {
    toggleMenu: boolean
}



const SideBar: React.FC<SideBar> = ({ toggleMenu }) => {
    if (toggleMenu) {
        return <SideBar_Small sidebarData={sidebarData.data_small} />;
    }
    return <SideBar_Large sidebarData={sidebarData.data_large} />;
};


export default SideBar;
