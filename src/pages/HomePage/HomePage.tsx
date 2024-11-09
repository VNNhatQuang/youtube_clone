import React from 'react';
import Home from '../../components/Home/Home';
import categoryData from "../../scripts/category.json";
import Category from '../../components/Category/Category';
import dataHome from "../../scripts/home.json";



const HomePage: React.FC = () => {
    return (
        <div id="home-page" className="wrap-content">
            <Category categoryData={categoryData}></Category>
            <Home data={dataHome}></Home>
        </div>
    );
};

export default HomePage;
