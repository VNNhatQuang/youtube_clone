import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./SideBar.css";


interface NavigationItem {
    name: string,
    icon: string,
    href: string
}

interface SideBar_Small {
    sidebarData: NavigationItem[],
}



const SideBar_Small: React.FC<SideBar_Small> = ({ sidebarData = [] }) => {
    return (
        <nav id="sidebar" className="small">
            <ul>
                {sidebarData.map((sidebar, index) => (
                    <li key={index}>
                        <Link to={sidebar.href} className="btn-sidebar">
                            <i className={`fa-solid fa-${sidebar.icon}`}></i>
                            <p>{sidebar.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideBar_Small;
