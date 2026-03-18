import React from 'react';

const securityStats = [
  { number: "99.9%", title: "Uptime Guarantee" },
  { number: "256-bit", title: "SSL Encryption" },
  { number: "24/7", title: "Security Monitoring" },
  { number: "100%", title: "GDPR Compliant" },
];

const securityCerts = [
  "ISO 27001 - Information Security Management",
  "HIPAA - Health Information Privacy",
  "SOC 2 - Security & Availability",
  "FDA Guidelines - Blood Safety Standards",
];

const SecurityCards = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Security by the Numbers</h2>
        <p className="text-gray-600 mb-12">
          Our commitment to safety and security in measurable terms
        </p>

        {/* Stats Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {securityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <span className="text-4xl font-bold text-red-500 mb-2">{stat.number}</span>
              <span className="text-gray-700 font-medium text-center">{stat.title}</span>
            </div>
          ))}
        </div>

        {/* Certifications Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {securityCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-left hover:shadow-2xl transition-shadow duration-300 text-center justify-center bg-blue-400"
            >
              <span className="text-gray-900 font-semibold">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityCards;