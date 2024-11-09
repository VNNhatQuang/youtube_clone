import React from 'react';
import { Link } from 'react-router-dom';
import './ViewOptions.css';

const ViewOptions = () => {
    return (
        <div className="view-options d-flex">
            {/* Grid View */}
            <Link to="" className="rounded-circle p-2">
                <i className="fa-solid fa-table-cells"></i>
            </Link>
            &nbsp;
            {/* List View */}
            <Link to="" className="rounded-circle p-2">
                <i className="fa-solid fa-list"></i>
            </Link>
        </div>
    );
};

export default ViewOptions;
