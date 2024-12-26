/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./SideBar.css";
import { Footer } from "../Footer";
import youtubeLogo from "../../assets/icons/youtube.svg";
import youtubeStudioLogo from "../../assets/icons/youtube_studio.svg";
import youtubeTVLogo from "../../assets/icons/youtube_tv.svg";
import youtubeMusicLogo from "../../assets/icons/youtube_music.svg";
import youtubeKidsLogo from "../../assets/icons/youtube_kids.svg";


interface NavigationItem {
    name: string,
    icon: string,
    href: string,
    channel?: string,
    image?: string
}

interface ChannelItem {
    channel: string,
    image: string
}

interface SidebarData_Large {
    navigation: NavigationItem[],
    personal: NavigationItem[],
    subscribe: ChannelItem[],
    explore: NavigationItem[],
    services: NavigationItem[],
    settings: NavigationItem[]
}

interface SideBar_Large {
    sidebarData: SidebarData_Large
}



const SideBar_Large: React.FC<SideBar_Large> = ({ sidebarData }) => {

    // Logo
    const logo: Record<string, any> = {
        youtube: youtubeLogo,
        youtube_studio: youtubeStudioLogo,
        youtube_tv: youtubeTVLogo,
        youtube_music: youtubeMusicLogo,
        youtube_kids: youtubeKidsLogo
    }

    return (
        <nav id="sidebar" className="large">
            {/* navigation */}
            <ul>
                {sidebarData.navigation.map((nav, index) => (
                    <li key={index}>
                        <Link to={nav.href} title={nav.name} className='btn-sidebar'>
                            <i className={`fa-solid fa-${nav.icon}`}></i>
                            <p>{nav.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            {/* personal */}
            <ul>
                <li>
                    <Link to="/" className='btn-sidebar'>
                        <b className="me-2">Bạn</b>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                {sidebarData.personal.map((per, index) => (
                    <li key={index}>
                        <Link to={per.href} className='btn-sidebar' title={per.name}>
                            <i className={`fa-solid fa-${per.icon}`}></i>
                            <p>{per.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            {/* subscribe */}
            <ul>
                <li className="mx-3 my-2 text-e1e1e1 text-start">
                    <b className="me-2">Kênh đăng ký</b>
                </li>
                {sidebarData.subscribe.map((sub, index) => {
                    if (index >= 7) return null;
                    return <li key={index}>
                        <Link to="" className='btn-sidebar' title={sub.channel}>
                            <i><img className="rounded-circle" src={sub.image} alt="" width="30px" /></i>
                            <p>{sub.channel}</p>
                        </Link>
                    </li>
                })}
                {
                    sidebarData.subscribe.length > 7 ?
                        <li>
                            <Link to="" className='btn-sidebar'>
                                <i className="fa-solid fa-chevron-down"></i>
                                <p>Thêm</p>
                            </Link>
                        </li>
                        : null
                }
            </ul>
            <hr />
            {/* explore */}
            <ul>
                <li className="mx-3 my-2 text-e1e1e1 text-start">
                    <b className="me-2">Khám phá</b>
                </li>
                {sidebarData.explore.map((ex, index) => (
                    <li key={index}>
                        <Link to={ex.href} className='btn-sidebar' title={ex.name}>
                            <i className={`fa-solid fa-${ex.icon}`}></i>
                            <p>{ex.name}</p>
                        </Link>
                    </li>
                ))}

            </ul>
            <hr />
            {/* services */}
            <ul>
                <li className="mx-3 my-2 text-e1e1e1 text-start">
                    <b className="me-2">Dịch vụ khác của YouTube</b>
                </li>
                {sidebarData.services.map((ser, index) => (
                    <li key={index}>
                        <Link to={ser.href} className='btn-sidebar' title={ser.name}>
                            <i><img src={logo[ser.icon]} alt="" width="25px" /></i>
                            <p>{ser.name}</p>
                        </Link>
                    </li>
                ))}

            </ul>
            <hr />
            {/* settings */}
            <ul>
                {sidebarData.settings.map((set, index) => (
                    <li key={index}>
                        <Link to={set.href} className='btn-sidebar' title={set.name}>
                            <i className={`fa-solid fa-${set.icon}`}></i>
                            <p>{set.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />

            <Footer></Footer>

        </nav>
    );
};



export default SideBar_Large;
