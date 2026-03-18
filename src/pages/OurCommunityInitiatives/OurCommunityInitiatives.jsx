// import React from "react";

// const initiatives = [
//   {
//     title: "Blood Drive Events",
//     description: `Regular community blood drives in schools, offices, and public spaces.
// - Monthly drives in 64 districts
// - Mobile blood collection units
// - Weekend community events
// - Festival season campaigns`,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrkfgh8E15OW_5vRdiiXmfDPv_fittMhcYg&s",
//   },
//   {
//     title: "Volunteer Training",
//     description: `Comprehensive training programs for community volunteers and coordinators.
// - First aid certification
// - Donor counseling skills
// - Event organization training
// - Digital platform usage`,
//     image:
//       "",
//   },
// {
//   title: "Recognition Programs",
//   description: `Honoring outstanding donors, volunteers, and community champions.
// - Annual donor appreciation
// - Volunteer of the month
// - Corporate partnership awards
// - Community impact certificates`,
//   image:
//     "https://images.unsplash.com/photo-1573164574390-2056d5f5a6fc?auto=format&fit=crop&w=800&q=80",
// },
//   {
//     title: "Digital Outreach",
//     description: `Leveraging technology to spread awareness and connect communities.
// - Social media campaigns
// - Mobile app notifications
// - SMS awareness programs
// - Online education resources`,
//     image:
//       "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const OurCommunityInitiatives = () => {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           Our Community Initiatives
//         </h2>
//         <p className="text-gray-600 mb-12">
//           We believe in giving back to the community. Here are some of our key initiatives that make a positive impact.
//         </p>

//         <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
//           {initiatives.map((initiative, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img
//                 src={initiative.image}
//                 alt={initiative.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6 text-left">
//                 <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                   {initiative.title}
//                 </h3>
//                 <p className="text-gray-600 whitespace-pre-line">
//                   {initiative.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurCommunityInitiatives;

import React from "react";

const initiatives = [
  {
    title: "Blood Drive Events",
    description: `Regular community blood drives in schools, offices, and public spaces.
- Monthly drives in 64 districts
- Mobile blood collection units
- Weekend community events
- Festival season campaigns`,
    image:
      "https://c7.alamy.com/comp/2D6N38T/blood-donation-t…hospital-laboratory-world-blood-donor-2D6N38T.jpg",
  },
  {
    title: "Volunteer Training",
    description: `Comprehensive training programs for community volunteers and coordinators.
- First aid certification
- Donor counseling skills
- Event organization training
- Digital platform usage`,
    image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJWNy7Sfk7sLTUiFmOkivh_b87D2B42iH0w&s",
  },
  {
    title: "Recognition Programs",
    description: `Honoring outstanding donors, volunteers, and community champions.
- Annual donor appreciation
- Volunteer of the month
- Corporate partnership awards
- Community impact certificates`,
    image:
      "	https://blogimage.vantagecircle.com/content/images/2023/10/VC_Featured-Image-Dark.png",
  },
  {
    title: "Digital Outreach",
    description: `Leveraging technology to spread awareness and connect communities.
- Social media campaigns
- Mobile app notifications
- SMS awareness programs
- Online education resources`,
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
];

const OurCommunityInitiatives = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Community Initiatives
        </h2>
        <p className="text-gray-600 mb-12">
          We believe in giving back to the community. Here are some of our key initiatives that make a positive impact.
        </p>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={initiative.image}
                alt={initiative.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {initiative.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCommunityInitiatives;