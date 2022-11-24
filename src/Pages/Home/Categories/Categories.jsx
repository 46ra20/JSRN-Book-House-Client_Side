import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Categories = () => {
    const [catagories, setCategories] = useState([])
    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(catagories)
    return (
        <div className='container mx-auto my-3'>
            
        </div>
    );
};

export default Categories;