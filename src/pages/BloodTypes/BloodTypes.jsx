// import React, { useState } from "react";

// const bloodData = {
//   "A+": { donate: ["A+", "AB+"], receive: ["A+", "A-", "O+", "O-"] },
//   "A-": { donate: ["A+", "A-", "AB+", "AB-"], receive: ["A-", "O-"] },
//   "B+": { donate: ["B+", "AB+"], receive: ["B+", "B-", "O+", "O-"] },
//   "B-": { donate: ["B+", "B-", "AB+", "AB-"], receive: ["B-", "O-"] },
//   "AB+": { donate: ["AB+"], receive: ["All Types"] },
//   "AB-": { donate: ["AB+", "AB-"], receive: ["A-", "B-", "AB-", "O-"] },
//   "O+": { donate: ["O+", "A+", "B+", "AB+"], receive: ["O+", "O-"] },
//   "O-": { donate: ["All Types"], receive: ["O-"] },
// };

// const BloodTypes = () => {
//   const [selected, setSelected] = useState("B+");
//   const [mode, setMode] = useState("receive");

//   return (
//     <section className="bg-gray-50 py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">

//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-gray-800">
//           Blood Types & <span className="text-pink-500">Compatibility</span>
//         </h2>
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//           Understanding blood type compatibility is crucial for safe donations.
//         </p>

//         {/* Blood Type Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mt-10">
//           {Object.keys(bloodData).map((type) => (
//             <button
//               key={type}
//               onClick={() => setSelected(type)}
//               className={`px-6 py-3 rounded-lg border transition ${
//                 selected === type
//                   ? "bg-pink-500 text-white shadow-lg"
//                   : "bg-white text-gray-700 hover:bg-pink-100"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>

//         {/* Mode Toggle */}
//         <div className="flex justify-center mt-8 gap-4">
//           <button
//             onClick={() => setMode("donate")}
//             className={`px-6 py-2 rounded-full ${
//               mode === "donate"
//                 ? "bg-gray-800 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Can Donate To
//           </button>

//           <button
//             onClick={() => setMode("receive")}
//             className={`px-6 py-2 rounded-full ${
//               mode === "receive"
//                 ? "bg-pink-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//           >
//             Can Receive From
//           </button>
//         </div>

//         {/* Result Box */}
//         <div className="mt-10 bg-white shadow-xl rounded-xl p-10">
//           <h3 className="text-2xl font-semibold mb-4">
//             {selected} Blood Type
//           </h3>

//           <p className="text-lg text-gray-600">
//             {mode === "donate"
//               ? `Can donate to: ${bloodData[selected].donate.join(", ")}`
//               : `Can receive from: ${bloodData[selected].receive.join(", ")}`}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BloodTypes;

import React, { useState } from "react";

const bloodData = {
  "A+": { donate: ["A+", "AB+"], receive: ["A+", "A-", "O+", "O-"] },
  "A-": { donate: ["A+", "A-", "AB+", "AB-"], receive: ["A-", "O-"] },
  "B+": { donate: ["B+", "AB+"], receive: ["B+", "B-", "O+", "O-"] },
  "B-": { donate: ["B+", "B-", "AB+", "AB-"], receive: ["B-", "O-"] },
  "AB+": { donate: ["AB+"], receive: ["All Types"] },
  "AB-": { donate: ["AB+", "AB-"], receive: ["A-", "B-", "AB-", "O-"] },
  "O+": { donate: ["O+", "A+", "B+", "AB+"], receive: ["O+", "O-"] },
  "O-": { donate: ["All Types"], receive: ["O-"] },
};

const BloodTypes = () => {
  const [selected, setSelected] = useState("B+");
  const [mode, setMode] = useState("receive");

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800">
          Blood Types & <span className="text-pink-500">Compatibility</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Understanding blood type compatibility is crucial for safe donations.
        </p>

        {/* Blood Type Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-10">
          {Object.keys(bloodData).map((type) => (
            <div
              key={type}
              onClick={() => setSelected(type)}
              className={`cursor-pointer p-6 rounded-xl shadow-lg transition transform hover:scale-105 ${
                selected === type
                  ? "bg-pink-500 text-white shadow-2xl"
                  : "bg-white text-gray-700 hover:bg-pink-100"
              }`}
            >
              <p className="text-xl font-semibold">{type}</p>
            </div>
          ))}
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() => setMode("donate")}
            className={`px-6 py-2 rounded-full ${
              mode === "donate"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Can Donate To
          </button>

          <button
            onClick={() => setMode("receive")}
            className={`px-6 py-2 rounded-full ${
              mode === "receive"
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Can Receive From
          </button>
        </div>

        {/* Result Box */}
        <div className="mt-10 bg-white shadow-xl rounded-xl p-10">
          <h3 className="text-2xl font-semibold mb-4">
            {selected} Blood Type
          </h3>

          <p className="text-lg text-gray-600">
            {mode === "donate"
              ? `Can donate to: ${bloodData[selected].donate.join(", ")}`
              : `Can receive from: ${bloodData[selected].receive.join(", ")}`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BloodTypes;