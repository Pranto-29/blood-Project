// import React from 'react';

// const Forbiden = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
//       <h1 style={{ fontSize: '50px', color: 'red' }}>🚫 403 Forbidden</h1>
//       <p style={{ fontSize: '20px' }}>
//         আপনি এই পেজটি দেখার অনুমতি পাননি। <br />
//         (Access is forbidden)
//       </p>
//     </div>
//   );
// };


// export default Forbiden;

import React from 'react';

const Forbidden = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center">
    <h1 className="text-6xl text-red-600">🚫 403 Forbidden</h1>
    <p className="text-xl mt-4">{message || "আপনার এই পেজে প্রবেশের অনুমতি নেই।"}</p>
  </div>
);

export default Forbidden;
