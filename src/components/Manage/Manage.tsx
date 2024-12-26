import React from 'react';
import "./Manage.css";
import { Link } from 'react-router-dom';


interface Manage {
    title: string,
}



const Manage: React.FC<Manage> = ({ title }) => {
    return (
        <Link to="/channels" className="manage px-3 py-2 rounded-pill">
            {title}
        </Link>
    );
};



export default Manage;
