import React from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from "../../assets/logos/youtube-header.svg";
import "./NotFoundPage.css";


const NotFoundPage: React.FC = () => {
    return (
        <div id="not-found-page" className="wrap-content d-flex flex-column align-items-center justify-content-center">
            <img className="not-found-img" src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="" />
            <p className="text-light my-3">This page isn't available. Sorry about that.<br />Try searching for something alse</p>
            <div className="search-box-404 d-flex justify-content-center align-items-center">
                <Link to="/">
                    <img className="logo-header me-1" src={LogoHeader} alt="" />
                </Link>
                <form action="" className="ms-1">
                    <input className="ps-2" type="text" placeholder="Search" name="search" />
                    <button className="px-4" type="submit" title="Tìm kiếm">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};



export default NotFoundPage;
