import React from 'react';
import Logos from '../components/Logos';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const Authlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logos></Logos>
            <div className='flex'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Authlayout;