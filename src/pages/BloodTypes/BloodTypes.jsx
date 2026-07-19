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
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            Blood Compatibility Guide
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Blood Types &<span className="text-red-600"> Compatibility</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Learn which blood groups can donate to or receive from one another.
            This information helps ensure safe blood transfusions.
          </p>
        </div>

        {/* Blood Groups */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5">
          {Object.keys(bloodData).map((type) => (
            <button
              key={type}
              onClick={() => setSelected(type)}
              className={`rounded-2xl p-6 font-bold text-xl transition duration-300 shadow-lg border-2
              
              ${
                selected === type
                  ? "bg-red-600 text-white border-red-600 scale-105 shadow-red-300"
                  : "bg-white hover:bg-red-50 border-gray-200 hover:border-red-400 text-gray-700 hover:scale-105"
              }
              
              `}
            >
              🩸
              <div className="mt-2">{type}</div>
            </button>
          ))}
        </div>

        {/* Toggle Buttons */}

        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-full shadow-lg p-2 flex">
            <button
              onClick={() => setMode("donate")}
              className={`px-8 py-3 rounded-full font-semibold transition

                ${
                  mode === "donate"
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-red-50"
                }

              `}
            >
              ❤️ Can Donate To
            </button>

            <button
              onClick={() => setMode("receive")}
              className={`px-8 py-3 rounded-full font-semibold transition

                ${
                  mode === "receive"
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-red-50"
                }

              `}
            >
              🩸 Can Receive From
            </button>
          </div>
        </div>

        {/* Result Card */}

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-red-100">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-3xl">
                🩸
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {selected} Blood Group
                </h3>

                <p className="text-gray-500 mt-1">Compatibility Information</p>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="font-semibold text-red-700 mb-4 text-xl">
                {mode === "donate" ? "Can Donate To" : "Can Receive From"}
              </h4>

              <div className="flex flex-wrap gap-3">
                {(mode === "donate"
                  ? bloodData[selected].donate
                  : bloodData[selected].receive
                ).map((item) => (
                  <span
                    key={item}
                    className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodTypes;
