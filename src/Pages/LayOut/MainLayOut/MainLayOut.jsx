import React from 'react';
import { useState } from 'react';
import {Outlet} from 'react-router-dom'
import PageLoading from '../../../Components/PageLoading/PageLoading';
import MenuBar from '../../Sheared/MenuBar/MenuBar';
import PageFooter from '../../Sheared/PageFooter/PageFooter';

const MainLayOut = () => {
    const [pageLoading, setPageLoading] = useState(true)
    return (
        <>  
            <div className={`${pageLoading?'':'hidden'}`}>
                <PageLoading/>
            </div>
            <MenuBar></MenuBar>
            <Outlet></Outlet>
            <PageFooter setPageLoading={setPageLoading}></PageFooter>
        </>
    );
};

export default MainLayOut;