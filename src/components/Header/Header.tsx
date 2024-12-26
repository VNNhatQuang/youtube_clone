import { Link } from 'react-router-dom';
import './Header.css';
import LogoHeader from '../../assets/logos/youtube-header.svg';
import React, { useState } from 'react';
import dataDropdownMenuUser from "../../scripts/dropdown-menu-user.json";


interface HeaderProps {
    userName: string;
    avatar: string;
    handleClickMenu: () => void;
}

interface DropdownMenuItem {
    icon: string;
    name: string;
}



const Header: React.FC<HeaderProps> = ({ userName, avatar, handleClickMenu }) => {
    const nameArr = userName.split(" ");
    let aliasName = "@";
    nameArr.forEach((word, index) => {
        if (index === nameArr.length - 1) {
            aliasName += word;
        } else {
            aliasName += word[0];
        }
    });

    const [menuUser, setMenuUser] = useState(false);

    const handleClickUser = () => {
        setMenuUser(!menuUser);
    };

    return (
        <header id="header">
            {/* Menu and header logo */}
            <div className="list-header">
                <div className="menu" onClick={handleClickMenu}><i className="fa-solid fa-bars"></i></div>
                <Link to="/" className='logo'>
                    <img src={LogoHeader} alt="Logo Header" className="logo-header" />
                </Link>
            </div>
            {/* Search box */}
            <div className="search-box">
                <form method="" action="">
                    <div className="input-search">
                        <input type="text" name="search" placeholder="Tìm kiếm" />
                        <i className="fa-regular fa-keyboard"></i>
                    </div>
                    <button type="submit" title="Tìm kiếm"><i className="fa-solid fa-magnifying-glass"></i></button>
                    <div className="voice-search" title="Tìm kiếm bằng giọng nói">
                        <i className="fa-solid fa-microphone"></i>
                    </div>
                </form>
            </div>
            {/* Record, Notification and User */}
            <div className="operation-user">
                <div className="record mr-15" title="Tạo">
                    <i className="fa-solid fa-video"></i>
                </div>
                <div className="notification mr-15" title="Thông báo">
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className="user-info mr-15" onClick={handleClickUser}>
                    <img src={avatar} alt="" />
                </div>
                <div className={`dropdown-user-menu ${menuUser ? 'open' : 'd-none'}`}>
                    <div className="box-user d-flex mb-3 px-3 pt-3">
                        <div className="avatar"><img src={avatar} alt="" /></div>
                        <div className="info ps-3 m">
                            <p>{userName}</p>
                            <p>{aliasName.toLowerCase()}</p>
                            <a href="">Xem kênh của bạn</a>
                        </div>
                    </div>
                    {
                        Object.keys(dataDropdownMenuUser).map((key, index) => (
                            <div className="box-dropdown-menu-user mb-1 border-top border-0 border-secondary py-2" key={index}>
                                {
                                    (dataDropdownMenuUser as any)[key].map((data: DropdownMenuItem, index: number) => (
                                        <a href="" className="text-light text-decoration-none py-2 px-3 w-100 d-flex align-items-center" key={index}>
                                            <i className={`${data.icon}`}></i>
                                            <span className="ms-4">{data.name}</span>
                                        </a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
