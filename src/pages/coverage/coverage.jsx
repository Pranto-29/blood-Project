

// import React, { useRef } from 'react';
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import { useLoaderData } from 'react-router-dom';

// const Coverage = () => {
//   const servicesCenter = useLoaderData();
// //   console.log(servicesCenter);
// const mapRef = useRef(null)

//   const handleSerach = (e) => {
//     e.preventDefault();
//     const location = e.target.location.value;

//     const district = servicesCenter.find(c =>
//       c.district.toLowerCase().includes(location.toLowerCase())
//     );

//     if (district) {
//       const coord = [district.latitude, district.longitude];
//       console.log(district, coord);
//       //go to the location
//       mapRef.current.flyTo(coord, 14);
//     }
//   };

//   const position = [23.6850, 90.3563]; // Bangladesh center

//   return (
//     <div>
//       <h2 className="text-red-400">We are available in 64 districts</h2>
//       <form onSubmit={handleSerach} className="flex items-center gap-2">
//   <label className="input w-1/2 flex items-center">
//     <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//       <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
//         <circle cx="11" cy="11" r="8"></circle>
//         <path d="m21 21-4.3-4.3"></path>
//       </g>
//     </svg>

//     <input
//       name="location"
//       type="search"
//       className="grow"
//       placeholder="Search district..."
//     />
//   </label>

//   <button type="submit" className="btn btn-primary">
//     Search
//   </button>
// </form>


//       {/* Map */}
//       <div className="border h-[800px] mt-4">
//         <MapContainer
//           center={position}
//           zoom={8}
//           scrollWheelZoom={false}
//           className="h-[800px] w-full"
//           ref={mapRef}
//         >
//           <TileLayer
//             attribution='&copy; OpenStreetMap contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {servicesCenter.map((center, idx) => (
//             <Marker
//               key={idx}
//               position={[center.latitude, center.longitude]}
//             >
//               <Popup>
//                 {center.district} <br />
//                 Latitude: {center.latitude} <br />
//                 Longitude: {center.longitude}
//               </Popup>
//             </Marker>
//           ))}

//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default Coverage;

import React from 'react';

const coverage = () => {
  return (
    <div>
      helllo
    </div>
  );
};

export default coverage;