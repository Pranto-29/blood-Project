

import React from 'react';
import { Link } from 'react-router-dom'; // react-router theke na, react-router-dom theke
import { FaHeart } from 'react-icons/fa'; // example icon
import logo from '../assets/banner/download.png';

const Logos = () => {
    return (
      <Link to="/">
        <div className='flex items-end gap-2'>
            <img src={logo} alt="Logo" className='w-10 h-10' />
            <h3 className='text-3xl -ms-2.5'>LifeDrop</h3>
            <FaHeart className='text-red-400 text-xl' /> {/* icon add kora holo */}
        </div>
      </Link>
    );
};

export default Logos;


