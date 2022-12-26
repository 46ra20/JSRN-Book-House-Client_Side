import React from 'react';
import Menubar from '../MenuBar/MenuBar'
import image from '../../../Assets/error.png'

const Error404 = () => {
    return (
        <div>
            <div className='z-10'>
                <Menubar></Menubar>
            </div>
            <div className='h-screen w-auto mx-auto flex flex-col items-center my-10'>
                <img src={image} alt=""></img>
            </div>
        </div>
    );
};

export default Error404;