// // import React from 'react';
// // import useAxiosSecure from '../../houk/useAxiosSecure';

// // const Funding = () => {
// //     const axiosInstance = useAxiosSecure();

// //     const handleCheckout = (e)=>{
// //         e.preventDefault()
// //         const donateAmount = e.target.donateAmount.value;
// //         axiosInstance.post('/create-payment-checkout', donateAmount)
// //         .then(res=>{
// //             console.log(res.data)
// //         })

// //     }
// //     return (
// //         <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
// //                 <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
// //                 <div className="flex space-x-3">
// //                     <input
// //                         type="text"
// //                         name='donateAmount'
// //                         placeholder="Enter amount"
// //                         className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     />
// //                     <button onSubmit={handleCheckout} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
// //                         Donate
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Funding;

// import React, { useContext } from 'react';
// import useAxiosSecure from '../../houk/useAxiosSecure';
// import { AuthContext } from '../../context/AuthContext/AuthContext';

// const Funding = () => {
//     const axiosInstance = useAxiosSecure();
//     const{ user } = useContext(AuthContext)

//     const handleCheckout = (e) => {
//         e.preventDefault();
//         const donateAmount = e.target.donateAmount.value; 

//         const donatEmail = user?.email
//         const donorName = user?.displayName
        
//         // works because now it's a form
//        const formData = {
//         donatEmail,
//         donateAmount,
//         donorName
//        }

//         axiosInstance.post('/create-payment-checkout', formData)
//             .then(res => {
//                 console.log(res.data);
//                 // You can redirect to payment page here if needed
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
//                 {/* Wrap input and button inside a form */}
//                 <form onSubmit={handleCheckout} className="flex space-x-3">
//                     <input
//                         type="text"
//                         name='donateAmount'
//                         placeholder="Enter amount"
//                         className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
//                     >
//                         Donate
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Funding;

// import React, { useContext } from 'react';
// import useAxiosSecure from '../../houk/useAxiosSecure';
// import { AuthContext } from '../../context/AuthContext/AuthContext';

// const Funding = () => {
//     const axiosInstance = useAxiosSecure();
//     const { user } = useContext(AuthContext);

//     const handleCheckout = async (e) => {
//         e.preventDefault();

//         const donateAmount = Number(e.target.donateAmount.value);
//         if (!donateAmount || donateAmount <= 0) {
//             alert("ভ্যালিড amount দিন");
//             return;
//         }

//         const formData = {
//             donorEmail: user?.email,
//             donorName: user?.displayName,
//             amount: donateAmount
//         };

//         try {
//             const res = await axiosInstance.post('/create-payment-checkout', formData);
//             console.log(res.data);
//             // Redirect to Stripe Checkout page
//             if (res.data.url) {
//                 window.location.href = res.data.url;
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Plezzz try again later!");
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
//                 <form onSubmit={handleCheckout} className="flex space-x-3">
//                     <input
//                         type="number"
//                         name="donateAmount"
//                         placeholder="Enter amount"
//                         className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
//                     >
//                         Donate
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Funding;




import React, { useContext } from 'react';
import useAxiosSecure from '../../houk/useAxiosSecure';
import { AuthContext } from '../../context/AuthContext/AuthContext';


const Funding = () => {
  const axiosInstance = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const donateAmount = Number(e.target.donateAmount.value);
    if (!donateAmount || donateAmount <= 0) {
      alert("ভ্যালিড amount দিন");
      return;
    }

    const formData = {
      donorEmail: user?.email,
      donorName: user?.displayName,
      amount: donateAmount
    };

    try {
      const res = await axiosInstance.post('/create-payment-checkout', formData);
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.error(err);
      alert("Plezzz try again later!");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://www.google.com/search?sa=X&sca_esv=3087728c2f704245&rlz=1C1CHBD_enBD1167BD1167&udm=2&sxsrf=ANbL-n6KfG1CVk8jQZ5USx9W92LCvUtlLg:1774509469708&q=blood+background+for+editing&stick=H4sIAAAAAAAAAFvEKpOUk5-fopCUmJydXpRfmpeikJZfpJCaklmSmZcOAEnuhTgfAAAA&source=univ&ved=2ahUKEwiJtN70gr2TAxW31DgGHeGZKb4QrNwCegQIfRAA&biw=1536&bih=742&dpr=1.25')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-crimsom opacity-40"></div>

      {/* Donation Form */}
      <div className="relative z-10 bg-pink-300 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Make a Donation</h2>
        <form onSubmit={handleCheckout} className="flex flex-col space-y-4">
          <input
            type="number"
            name="donateAmount"
            placeholder="Enter amount"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Funding;