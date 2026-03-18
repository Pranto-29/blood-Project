// import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router';
// import useAxiosSecure from '../../houk/useAxiosSecure';

// const PaymentSucces = () => {
//     const[searchParams] = useSearchParams();

//     const sessionId = searchParams.get('session_id');

//     const axiosInstance = useAxiosSecure();

//     useEffect(()=>{
//         axiosInstance.post(`/success-payment?session_id=${sessionId}`)
//         .then(res=>{
//             console.log(res.data)
//         })
//     },[axiosInstance,sessionId])
//     return (
//         <div>
//          Success
//         </div>
//     );
// };

// export default PaymentSucces;

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router';
// import useAxiosSecure from '../../houk/useAxiosSecure';
// import { CheckCircleIcon } from '@heroicons/react/24/solid';

// const PaymentSucces = () => {
//     const [searchParams] = useSearchParams();
//     const [paymentData, setPaymentData] = useState(null);

//     const sessionId = searchParams.get('session_id');
//     const axiosInstance = useAxiosSecure();

//     useEffect(() => {
//         if (!sessionId) return;
//         axiosInstance.post(`/success-payment?session_id=${sessionId}`)
//             .then(res => {
//                 setPaymentData(res.data.result);
//                 console.log(res.data);
//             })
//             .catch(err => {
//                 console.error(err);
//             });
//     }, [axiosInstance, sessionId]);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//             <ul className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center space-y-4">
//                 <li className="flex justify-center">
//                     <CheckCircleIcon className="w-12 h-12 text-green-500" />
//                 </li>
//                 <li>
//                     <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
//                 </li>
//                 <li>
//                     <p className="text-gray-600">Thank you for your donation. Your support is appreciated.</p>
//                 </li>

//                 {paymentData && (
//                     <li className="text-left bg-gray-50 p-4 rounded-md space-y-1">
//                         <p><span className="font-semibold">Amount:</span> ${paymentData.amount}</p>
//                         <p><span className="font-semibold">Transaction ID:</span> {paymentData.transactionId}</p>
//                         <p><span className="font-semibold">Paid At:</span> {new Date(paymentData.paidAt).toLocaleString()}</p>
//                     </li>
//                 )}

//                 <li>
//                     <button
//                         onClick={() => window.location.href = '/'}
//                         className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
//                     >
//                         Go to Home
//                     </button>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default PaymentSucces;

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../houk/useAxiosSecure';

const PaymentSucces = () => {
    const [searchParams] = useSearchParams();
    const [paymentData, setPaymentData] = useState(null);
    const [loading, setLoading] = useState(true);

    const sessionId = searchParams.get('session_id');
    const axiosInstance = useAxiosSecure();

    useEffect(() => {
        if (!sessionId) return;
        setLoading(true);
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
            .then(res => {
                setPaymentData(res.data.result);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, [axiosInstance, sessionId]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200 p-4">
            <ul className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center space-y-6">
                
                {loading ? (
                    <li className="text-gray-600 font-medium">Loading payment details...</li>
                ) : (
                    <>
                        <li>
                            <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
                        </li>
                        <li>
                            <p className="text-gray-600">Thank you for your donation. Your support is greatly appreciated.</p>
                        </li>

                        {paymentData ? (
                            <li className="text-left bg-gray-50 p-4 rounded-md space-y-2 border border-green-200">
                                {/* <p><span className="font-semibold">Amount:</span> ${paymentData.amount}</p>
                                <p><span className="font-semibold">Transaction ID:</span> {paymentData.
payment_status}</p>
                                <p><span className="font-semibold">Paid At:</span> {new Date(paymentData.paidAt).toLocaleString()}</p>
                                <p><span className="font-semibold">Email:</span> {paymentData.donorEmail}</p> */}
                            </li>
                        ) : (
                            <li className="text-red-500 font-medium">Payment data not found!</li>
                        )}

                        <li>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
                            >
                                Go to Home
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default PaymentSucces;