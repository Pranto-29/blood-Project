// import React from 'react';
// import Logos from '../components/Logos';
// import { Outlet } from 'react-router';
// import authImage from '../assets/banner/volunteer-collecting-blood-donation-free-vector (1).jpg';


// const Authlayout = () => {
//     return (
//         <div className='max-w-7xl mx-auto'>
//             <Logos></Logos>
//             <div className='flex'>
//                 <div className='flex-1'>
//                     <Outlet></Outlet>
//                 </div>
//                 <div className='flex-1'>
//                      <img src={authImage} alt="" />
                   
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Authlayout;


import React from 'react';
import Logos from '../components/Logos';
import { Outlet } from 'react-router';
<<<<<<< HEAD
// import authImage from '../assets/banner/volunteer-collecting-blood-donation-free-vector (1).jpg';
=======
import authImage from '../assets/banner/volunteer-collecting-blood-donation-free-vector (1).jpg';
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc

const Authlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logos />

            <div className='flex items-center min-h-[100vh]'>
                {/* left side */}
                <div className='flex-1'>
                    <Outlet />
                </div>

                {/* right side image center */}
<<<<<<< HEAD
                {/* <div className='flex-1 flex justify-center items-center'>
=======
                <div className='flex-1 flex justify-center items-center'>
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
                    <img 
                        src={authImage} 
                        alt="auth" 
                        className="w-[90%] object-contain"
                    />
<<<<<<< HEAD
                </div> */}
=======
                </div>
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
            </div>
        </div>
    );
};

export default Authlayout;