import React, { useState } from 'react';
import ReviewsCard from './ReviewsCard';

const stories = [
  {
    testimonial: "Being part of the AidEx community means being part of something bigger. Every donation saves a life.",
    name: "Karim Uddin",
    role: "Volunteer Donor",
    location: "Khulna",
    bloodGroup: "A-",
    photoURL: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    featured: true,
  },
  {
    testimonial: "AidEx saved my life during a critical surgery. Within 30 minutes, I found a compatible donor.",
    name: "Sarah Ahmed",
    role: "Blood Recipient",
    location: "Dhaka",
    bloodGroup: "O-",
    photoURL: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    featured: true,
  },
  {
    testimonial: "As a doctor, I've seen how AidEx transforms emergency care. The quick response time is invaluable.",
    name: "Dr. Rahman Khan",
    role: "Emergency Physician",
    location: "Chittagong Medical College",
    bloodGroup: "A+",
    photoURL: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    featured: false,
  },
  {
    testimonial: "Volunteering with AidEx has been one of the most rewarding experiences of my life.",
    name: "Fatima Begum",
    role: "Regular Donor",
    location: "Sylhet",
    bloodGroup: "B+",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
  {
    testimonial: "AidEx's blood drives are well-organized and save lives every month.",
    name: "Dr. Amina Hossain",
    role: "Medical Officer",
    location: "Dhaka Medical College",
    bloodGroup: "AB+",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
  {
    testimonial: "I never knew donating blood could be so fulfilling until I joined AidEx.",
    name: "Jamal Uddin",
    role: "Volunteer Donor",
    location: "Chittagong",
    bloodGroup: "O+",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
  {
    testimonial: "AidEx connects donors with recipients efficiently and safely.",
    name: "Razia Sultana",
    role: "Regular Donor",
    location: "Rajshahi",
    bloodGroup: "B-",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
  {
    testimonial: "Thanks to AidEx, I was able to donate blood multiple times and help save lives.",
    name: "Md. Saiful Islam",
    role: "Volunteer Donor",
    location: "Khulna",
    bloodGroup: "A+",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
  {
    testimonial: "AidEx ensures timely support to those in need and promotes community health awareness.",
    name: "Dr. Nadia Karim",
    role: "Emergency Physician",
    location: "Sylhet Medical College",
    bloodGroup: "AB-",
    photoURL: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    featured: false,
  },
];

const Reviews = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, stories.length));
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stories of Hope & Healing</h2>
        <p className="text-gray-600 mb-12">
          Real stories from donors, patients, and medical professionals who have experienced the life-saving impact of our community.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
          {stories.slice(0, visibleCount).map((story, index) => (
            <ReviewsCard key={index} story={story} />
          ))}
        </div>

        {visibleCount < stories.length && (
          <button
            onClick={loadMore}
            className="mt-8 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;