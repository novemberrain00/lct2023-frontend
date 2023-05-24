import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";
import AuthPage from "../pages/authPage/authPage";
import RegPage from "../pages/regPage/regPage";
import HomePage from '../pages/homePage/homePage';

const Router: FC = () => {
    return (
        <Routes>
            <Route path='/login' element={<AuthPage/>}/>
            <Route path='/registration' element={<RegPage/>}/>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    )
};

export default Router;