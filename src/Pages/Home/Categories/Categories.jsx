import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [catagories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-46ra20-main.vercel.app/productCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container mx-auto my-3'>
            <ul className='flex justify-around'>
                {
                    catagories?.map(category => <li 
                        key={category._id}
                        className='border rounded shadow-xl btn btn-outline btn-success px-4 py-2 '
                        style={{cursor:'pointer'}}
                        
                    ><Link to={`/category/${category.categoryName}`}>{category.categoryName}</Link></li>)
                }
            </ul>
        </div>
    );
};

export default Categories;