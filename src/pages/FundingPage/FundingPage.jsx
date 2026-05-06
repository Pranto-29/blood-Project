// // import React from 'react';

// // const FundingPage = () => {
// //     return (
// //         <div>
// //              hi
// //         </div>
// //     );
// // };

// // // export default FundingPage;

// import React, { useEffect, useState, useContext } from 'react';
// import useAxiosSecure from '../../houk/useAxiosSecure';
// import { AuthContext } from '../../context/AuthContext/AuthContext';

// const FundingPage = () => {

//     const axiosInstance = useAxiosSecure();
//     const { user } = useContext(AuthContext);

//     const [payments, setPayments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             axiosInstance
//                 .get(`/my-payments?email=${user.email}`)
//                 .then(res => {
//                     setPayments(res.data);
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     setLoading(false);
//                 });
//         }
//     }, [user]);

//     if (loading) {
//         return (
//             <div className="text-center mt-20">
//                 <span className="loading loading-spinner loading-lg"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-5xl mx-auto mt-12 px-4">
//             <h2 className="text-3xl font-bold text-center mb-8">
//                 Funding History
//             </h2>

//             {payments.length === 0 ? (
//                 <p className="text-center text-gray-500">
//                     No donation history found.
//                 </p>
//             ) : (
//                 <div className="bg-black text-white rounded-xl overflow-hidden shadow-lg">

//                     {/* Header */}
//                     <div className="grid grid-cols-3 bg-pink-500 p-4 font-semibold">
//                         <p>Donor Email</p>
//                         <p>Date</p>
//                         <p>Amount</p>
//                     </div>

//                     {/* Data */}
//                     {payments.map(payment => (
//                         <div
//                             key={payment._id}
//                             className="grid grid-cols-3 p-4 border-b border-gray-700 hover:bg-gray-900 transition"
//                         >
//                             <p>{payment.donorEmail}</p>
//                             <p>
//                                 {new Date(payment.paidAt).toLocaleDateString()}
//                             </p>
//                             <p className="text-pink-400 font-bold">
//                                 ${payment.amount}
//                             </p>
//                         </div>
//                     ))}

//                 </div>
//             )}
//         </div>
//     );
// };

// export default FundingPage;


import React, { useEffect, useState, useContext } from 'react';
import useAxiosSecure from '../../houk/useAxiosSecure';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const FundingPage = () => {

    const axiosInstance = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        if (user?.email) {
            axiosInstance
                .get(`/my-payments?email=${user.email}`)
                .then(res => {
                    setPayments(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user]);

    // Pagination logic
    const totalPages = Math.ceil(payments.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPayments = payments.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const totalDonation = payments.reduce((sum, p) => sum + p.amount, 0);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">

            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl font-bold text-center mb-4">
                    Funding History
                </h2>

                <p className="text-center text-pink-400 text-lg mb-10">
                    Total Donated: ${totalDonation}
                </p>

                {payments.length === 0 ? (
                    <div className="text-center text-gray-400">
                        No donation history found.
                    </div>
                ) : (
                    <>
                        {/* Table */}
                        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">

                            {/* Header */}
                            <div className="grid grid-cols-3 bg-gradient-to-r from-pink-500 to-purple-500 p-4 font-semibold text-center">
                                <p>Email</p>
                                <p>Date</p>
                                <p>Amount</p>
                            </div>

                            {/* Data */}
                            {currentPayments.map(payment => (
                                <div
                                    key={payment._id}
                                    className="grid grid-cols-3 p-4 border-b border-gray-700 text-center hover:bg-gray-700 transition duration-300"
                                >
                                    <p className="truncate">{payment.donorEmail}</p>
                                    <p>{new Date(payment.paidAt).toLocaleDateString()}</p>
                                    <p className="text-pink-400 font-bold">
                                        ${payment.amount}
                                    </p>
                                </div>
                            ))}

                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-8 space-x-2">

                                <button
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Prev
                                </button>

                                {[...Array(totalPages).keys()].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => setCurrentPage(num + 1)}
                                        className={`px-4 py-2 rounded ${
                                            currentPage === num + 1
                                                ? "bg-pink-500"
                                                : "bg-gray-700 hover:bg-gray-600"
                                        }`}
                                    >
                                        {num + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
                                >
                                    Next
                                </button>

                            </div>
                        )}

                    </>
                )}
            </div>
        </div>
    );
};

export default FundingPage;