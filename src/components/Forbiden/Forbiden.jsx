// // import React from 'react';

// // const Forbiden = () => {
// //   return (
// //     <div style={{ textAlign: 'center', marginTop: '100px' }}>
// //       <h1 style={{ fontSize: '50px', color: 'red' }}>🚫 403 Forbidden</h1>
// //       <p style={{ fontSize: '20px' }}>
// //         আপনি এই পেজটি দেখার অনুমতি পাননি। <br />
// //         (Access is forbidden)
// //       </p>
// //     </div>
// //   );
// // };


// // export default Forbiden;

// import React from 'react';

// const Forbidden = ({ message }) => (
//   <div className="flex flex-col items-center justify-center min-h-screen text-center">
//     <h1 className="text-6xl text-red-600">🚫 403 Forbidden</h1>
//     <p className="text-xl mt-4">{message || "আপনার এই পেজে প্রবেশের অনুমতি নেই।"}</p>
//   </div>
// );

// export default Forbidden;


import React from "react";
import { Link } from "react-router-dom";

const Forbidden = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
        
        {/* Icon */}
        <div className="text-6xl mb-4">🚫</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600">
          403 Forbidden
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-4">
          {message || "আপনার এই পেজে প্রবেশের অনুমতি নেই।"}
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-focus transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;