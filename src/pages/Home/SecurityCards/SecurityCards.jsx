import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaCertificate,
} from "react-icons/fa";

const securityStats = [
  {
    number: "99.9%",
    title: "Uptime Guarantee",
    icon: <FaShieldAlt />,
  },
  {
    number: "256-bit",
    title: "SSL Encryption",
    icon: <FaLock />,
  },
  {
    number: "24/7",
    title: "Security Monitoring",
    icon: <FaUserShield />,
  },
  {
    number: "100%",
    title: "GDPR Compliant",
    icon: <FaCertificate />,
  },
];

const securityCerts = [
  "ISO 27001 - Information Security Management",
  "HIPAA - Health Information Privacy",
  "SOC 2 - Security & Availability",
  "FDA Guidelines - Blood Safety Standards",
];

const SecurityCards = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            🔒 Trusted & Secure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-5">
            Security by the Numbers
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We prioritize the privacy and safety of every donor and recipient.
            Our platform follows international security standards to ensure
            secure and reliable blood donation services.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {securityStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-4xl group-hover:bg-red-500 group-hover:text-white duration-500">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-gray-800 mt-6">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-600 font-semibold text-lg">
                {stat.title}
              </p>
            </div>
          ))}
        </div>

        {/* Certification Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {securityCerts.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8 flex flex-col items-center justify-center text-center text-white"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <FaCertificate className="text-4xl" />
              </div>

              <h3 className="font-semibold text-lg leading-8">{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityCards;
