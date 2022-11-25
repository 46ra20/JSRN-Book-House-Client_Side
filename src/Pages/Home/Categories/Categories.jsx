import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const [catagories, setCategories] = useState([])
    const navigate = useNavigate();

    const handleCategory = (id) =>{
        navigate(`category/${id}`)
    }

    useEffect(() => {
        fetch('http://localhost:5000/productCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='container mx-auto my-3'>
            <ul className='flex justify-between'>
                {
                    catagories?.map(category => <li 
                        key={category._id}
                        className='border rounded shadow-xl btn btn-outline btn-success px-4 py-2 '
                        onClick={()=>handleCategory(category._id)}
                        style={{cursor:'pointer'}}
                        
                    >{category.categoryName}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;