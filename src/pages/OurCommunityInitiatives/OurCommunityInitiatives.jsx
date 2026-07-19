


import React from "react";

const initiatives = [
  {
    title: "Blood Drive Events",
    description: `Regular blood donation campaigns organized across the country.

• Community blood drives
• Mobile donation camps
• Emergency blood support
• Festival donation programs`,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Volunteer Training",
    description: `Empowering volunteers with essential healthcare and leadership skills.

• First Aid Training
• Donor Management
• Emergency Response
• Community Leadership`,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Recognition Programs",
    description: `Celebrating the dedication of blood donors and volunteers.

• Best Donor Awards
• Volunteer Recognition
• Community Certificates
• Appreciation Events`,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Digital Outreach",
    description: `Using technology to spread awareness and connect donors quickly.

• Social Media Campaigns
• SMS Alerts
• Mobile App Support
• Online Awareness Programs`,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
];

const OurCommunityInitiatives = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            ❤️ Community Support
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
            Our Community Initiatives
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We are committed to creating a healthier society through blood
            donation, volunteer engagement, awareness campaigns, and community
            support programs that save lives every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-500 duration-300">
                  {initiative.title}
                </h3>

                <p className="mt-4 text-gray-600 whitespace-pre-line leading-8">
                  {initiative.description}
                </p>
                <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCommunityInitiatives;