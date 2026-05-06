import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Lifesaving Gift: Why Donating Blood Matters",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
  },
  {
    id: 2,
    title: "Behind the Needle: The Journey of a Blood Donor",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde",
  },
  {
    id: 3,
    title: "Heroes Among Us: Celebrating Blood Donors",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
  {
    id: 4,
    title: "Who Can Donate Blood? Eligibility Explained",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4",
  },
  {
    id: 5,
    title: "Myths & Facts About Blood Donation",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    id: 6,
    title: "How One Donation Saves Multiple Lives",
    image: "https://c7.alamy.com/comp/2D6N38T/blood-donation-t…hospital-laboratory-world-blood-donor-2D6N38T.jpg",
  },
];

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
        Blogs
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">Blog</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-5">
                {blog.title}
              </h3>

              <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg transition">
                Learn now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
