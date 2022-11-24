import React from 'react';
import {Outlet} from 'react-router-dom'
import MenuBar from '../../Sheared/MenuBar/MenuBar';
import PageFooter from '../../Sheared/PageFooter/PageFooter';

const MainLayOut = () => {
    return (
        <>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <PageFooter></PageFooter>
        </>
    );
};

export default MainLayOut;