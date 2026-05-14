import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Rootlayout = () => {
    return (
        <div className=' max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

<<<<<<< HEAD
export default Rootlayout;

// import React from 'react';
// import { Outlet } from 'react-router';
// import Footer from '../pages/Shared/Footer/Footer';
// import Navbar from '../pages/Shared/Navbar/Navbar';

// const Rootlayout = () => {
//     return (
//         <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300'>
            
//             <div className='max-w-7xl mx-auto'>
//                 <Navbar></Navbar>

//                 <Outlet></Outlet>

//                 <Footer></Footer>
//             </div>

//         </div>
//     );
// };

// export default Rootlayout;
=======
export default Rootlayout;
>>>>>>> b616efc448974e0ec8e467f018fc2318782d78fc
