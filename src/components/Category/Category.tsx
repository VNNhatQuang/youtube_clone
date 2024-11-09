import React from 'react';
import "./Category.css";


interface CategoryData {
    name: string;
}

interface CategoryProps {
    categoryData: CategoryData[];
}



const Category: React.FC<CategoryProps> = ({ categoryData = [] }) => {
    return (
        <nav id="category">
            {categoryData.map((category, index) => (
                <a className='btn-category' href="" key={index}>{category.name}</a>
            ))}
        </nav>
    );
};

export default Category;
