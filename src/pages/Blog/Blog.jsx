// import React from "react";

// const blogs = [
//   {
//     id: 1,
//     title: "The Lifesaving Gift: Why Donating Blood Matters",
//     image:
//       "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Behind the Needle: The Journey of a Blood Donor",
//     image:
//       "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Heroes Among Us: Celebrating Blood Donors",
//     image:
//       "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     title: "Who Can Donate Blood? Eligibility Explained",
//     image:
//       "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 5,
//     title: "Myths & Facts About Blood Donation",
//     image:
//       "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 6,
//     title: "How One Donation Saves Multiple Lives",
//     image:
//       "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const Blog = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
//       <div className="max-w-7xl mx-auto px-5">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
//             Latest Articles
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
//             Blood Donation
//             <span className="text-red-600"> Blog</span>
//           </h2>

//           <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
//             Explore inspiring stories, donation tips, and important information
//             to become a better blood donor and help save lives.
//           </p>
//         </div>

//         {/* Blog Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
//             >
//               <div className="overflow-hidden">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
//                 />
//               </div>

//               <div className="p-7">
//                 <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
//                   Blood Donation
//                 </span>

//                 <h3 className="text-2xl font-bold text-gray-800 leading-snug mb-4 group-hover:text-red-600 transition">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-600 mb-6">
//                   Learn valuable information about blood donation, donor
//                   eligibility, myths, and inspiring stories from our community.
//                 </p>

//                 <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-300">
//                   Read More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Lifesaving Gift: Why Donating Blood Matters",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Behind the Needle: The Journey of a Blood Donor",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Heroes Among Us: Celebrating Blood Donors",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Who Can Donate Blood? Eligibility Explained",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Myths & Facts About Blood Donation",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "How One Donation Saves Multiple Lives",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7706a4a41?auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            Latest Articles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Blood Donation
            <span className="text-red-600"> Blog</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Explore inspiring stories, donation tips, and important information
            to become a better blood donor and help save lives.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Blood Donation
                </span>

                <h3 className="text-2xl font-bold text-gray-800 leading-snug mb-4 group-hover:text-red-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  Learn valuable information about blood donation, donor
                  eligibility, myths, and inspiring stories from our community.
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-300">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;