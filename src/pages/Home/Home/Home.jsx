// // import React from 'react';
// // import Banner from '../Banner/Banner';
// // import Works from '../Works/work';

// // import Reviews from '../Reviews/Reviews';
// // import Contact from '../Contact/Contact';
// // import BloodTypes from '../../BloodTypes/BloodTypes';
// // import OurCommunityInitiatives from '../../OurCommunityInitiatives/OurCommunityInitiatives';
// // import SecurityCards from '../SecurityCards/SecurityCards';
// // import EmergencySupport from '../EmergencySupport/EmergencySupport';



// // const reviewsPromise = fetch('/reviews.json').then(res => res.json());
// // const Home = () => {
// //     return (
// //         <div>
// //          <Banner></Banner>
// //             <Works></Works>
// //             <BloodTypes></BloodTypes>
// //             <OurCommunityInitiatives></OurCommunityInitiatives>
// //              <SecurityCards></SecurityCards>
// //              <EmergencySupport></EmergencySupport>
         
// //             {/* <Services></Services> */}
// //             <Contact></Contact>
           
// //             <Reviews reviewsPromise={reviewsPromise}></Reviews>
// //         </div>
// //     );
// // };

// // export default Home;

// import React, { Suspense } from 'react';
// import Banner from '../Banner/Banner';
// import Works from '../Works/work';
// import Reviews from '../Reviews/Reviews';
// import Contact from '../Contact/Contact';
// import BloodTypes from '../../BloodTypes/BloodTypes';
// import OurCommunityInitiatives from '../../OurCommunityInitiatives/OurCommunityInitiatives';
// import SecurityCards from '../SecurityCards/SecurityCards';
// import EmergencySupport from '../EmergencySupport/EmergencySupport';

// const reviewsPromise = fetch('/reviews.json').then(res => res.json());

// const Home = () => {
//     return (
//         <div className="bg-gray-50 overflow-hidden">

//             {/* Banner Section */}
//             <section className="w-full">
//                 <Banner />
//             </section>

//             {/* Works Section */}
//             <section className="max-w-7xl mx-auto px-4 py-20">
//                 <Works />
//             </section>

//             {/* Blood Types */}
//             <section className="bg-white py-20">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <BloodTypes />
//                 </div>
//             </section>

//             {/* Community Initiatives */}
//             <section className="py-20 bg-gray-100">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <OurCommunityInitiatives />
//                 </div>
//             </section>

//             {/* Security */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <SecurityCards />
//                 </div>
//             </section>

//             {/* Emergency Support */}
//             <section className="py-20 bg-red-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <EmergencySupport />
//                 </div>
//             </section>

//             {/* Contact */}
//             <section className="py-20 bg-gray-100">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <Contact />
//                 </div>
//             </section>

//             {/* Reviews */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <Suspense fallback={<p className="text-center text-lg font-semibold">Loading Reviews...</p>}>
//                         <Reviews reviewsPromise={reviewsPromise} />
//                     </Suspense>
//                 </div>
//             </section>

//         </div>
//     );
// };

// export default Home;
import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/work";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";
import BloodTypes from "../../BloodTypes/BloodTypes";
import OurCommunityInitiatives from "../../OurCommunityInitiatives/OurCommunityInitiatives";
import SecurityCards from "../SecurityCards/SecurityCards";
import EmergencySupport from "../EmergencySupport/EmergencySupport";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const SectionWrapper = ({ children, bg }) => {
  return (
    <section className={`${bg} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* Banner */}
      <div className="relative">
        <Banner />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <SectionWrapper bg="bg-white">
        <Works />
      </SectionWrapper>

      <SectionWrapper bg="bg-gray-50">
        <BloodTypes />
      </SectionWrapper>

      <SectionWrapper bg="bg-white">
        <OurCommunityInitiatives />
      </SectionWrapper>

      <SectionWrapper bg="bg-gray-50">
        <SecurityCards />
      </SectionWrapper>

      <SectionWrapper bg="bg-red-50">
        <EmergencySupport />
      </SectionWrapper>

      <SectionWrapper bg="bg-white">
        <Contact />
      </SectionWrapper>

      <SectionWrapper bg="bg-gray-50">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-red-500"></div>
            </div>
          }
        >
          <Reviews reviewsPromise={reviewsPromise} />
        </Suspense>
      </SectionWrapper>

    </div>
  );
};

export default Home;