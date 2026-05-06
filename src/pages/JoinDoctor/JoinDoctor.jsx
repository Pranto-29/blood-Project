// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const JoinDoctor = () => {
//   const [districts, setDistricts] = useState([]);
//   const [upazilas, setUpazilas] = useState([]);
//   const [selectedDistrict, setSelectedDistrict] = useState("");
//   const [selectedUpazila, setSelectedUpazila] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     specialization: "",
//     password: "",
//     photo: null,
//   });
//   const [showModal, setShowModal] = useState(false);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     axios.get("/districts.json").then(res => setDistricts(res.data[2].data));
//     axios.get("/upazilas.json").then(res => setUpazilas(res.data[2].data));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "photo") {
//       setFormData({ ...formData, photo: files[0] });
//       setPreview(URL.createObjectURL(files[0]));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = new FormData();
//       for (const key in formData) data.append(key, formData[key]);
//       data.append("district", districts.find(d => d.id === selectedDistrict)?.name || "");
//       data.append("upazila", upazilas.find(u => u.id === selectedUpazila)?.name || "");

//       const res = await axios.post("/api/doctors", data);
//       if (res.data.success) {
//         setShowModal(true);
//         setFormData({ name: "", email: "", phone: "", specialization: "", password: "", photo: null });
//         setSelectedDistrict("");
//         setSelectedUpazila("");
//         setPreview(null);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Registration failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Join as a Doctor</h2>

//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
//         <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full p-2 border rounded" />
//         <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization / Department" required className="w-full p-2 border rounded" />
//         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full p-2 border rounded" />

//         <input type="file" name="photo" onChange={handleChange} required className="w-full" />
//         {preview && <img src={preview} alt="Preview" className="w-24 h-24 mt-2 rounded-full object-cover" />}

//         <select value={selectedDistrict} onChange={e => { setSelectedDistrict(e.target.value); setSelectedUpazila(""); }} className="w-full p-2 border rounded">
//           <option value="">Select District</option>
//           {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
//         </select>

//         <select value={selectedUpazila} onChange={e => setSelectedUpazila(e.target.value)} className="w-full p-2 border rounded">
//           <option value="">Select Upazila</option>
//           {upazilas.filter(u => u.district_id === selectedDistrict).map(u => (
//             <option key={u.id} value={u.id}>{u.name}</option>
//           ))}
//         </select>

//         <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//           Register
//         </button>
//       </form>

//       {/* Success Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-xl shadow-2xl w-96 text-center">
//             <h3 className="text-2xl font-bold text-green-600 mb-4">Registered!</h3>
//             <p className="text-gray-700 mb-6">Doctor registered successfully.</p>
//             <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JoinDoctor;




import React, { useState } from "react";

// Sample districts & upazilas
const districtsData = [
  { id: 1, name: "Dhaka", upazilas: ["Dhanmondi", "Gulshan", "Mirpur"] },
  { id: 2, name: "Chattogram", upazilas: ["Pahartali", "Kotwali", "Chandgaon"] },
  {id:3, name: "Moulvibazar", upazilas: ["kulaura", "Juri", "Komolgonj"]},
];

// 7 fake doctors
const fakeDoctors = [
  { name: "Dr. A", email: "a@example.com", phone: "01711111111", specialization: "Cardiology", district: "Dhaka", upazila: "Dhanmondi", photo: "https://i.pravatar.cc/150?img=1" },
  { name: "Dr. B", email: "b@example.com", phone: "01722222222", specialization: "Neurology", district: "Dhaka", upazila: "Gulshan", photo: "https://i.pravatar.cc/150?img=2" },
  { name: "Dr. C", email: "c@example.com", phone: "01733333333", specialization: "Pediatrics", district: "Dhaka", upazila: "Mirpur", photo: "https://i.pravatar.cc/150?img=3" },
  { name: "Dr. D", email: "d@example.com", phone: "01744444444", specialization: "Orthopedic", district: "Chattogram", upazila: "Pahartali", photo: "https://i.pravatar.cc/150?img=4" },
  { name: "Dr. E", email: "e@example.com", phone: "01755555555", specialization: "Dermatology", district: "Chattogram", upazila: "Kotwali", photo: "https://i.pravatar.cc/150?img=5" },
  { name: "Dr. F", email: "f@example.com", phone: "01766666666", specialization: "ENT", district: "Chattogram", upazila: "Chandgaon", photo: "https://i.pravatar.cc/150?img=6" },
  { name: "Dr. G", email: "g@example.com", phone: "01777777777", specialization: "Gynecology", district: "Dhaka", upazila: "Gulshan", photo: "https://i.pravatar.cc/150?img=7" },
];

const JoinDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    password: "",
    district: "",
    upazila: "",
    photo: null,
  });
  const [preview, setPreview] = useState(null);
  const [doctors, setDoctors] = useState(fakeDoctors);
  const [searchDistrict, setSearchDistrict] = useState("");
  const [searchUpazila, setSearchUpazila] = useState("");
  const [showModal, setShowModal] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoctor = {
      ...formData,
      photo: preview || "https://i.pravatar.cc/150?img=99",
    };
    setDoctors([newDoctor, ...doctors]); // add new doctor to top
    setShowModal(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      specialization: "",
      password: "",
      district: "",
      upazila: "",
      photo: null,
    });
    setPreview(null);
  };

  // filtered doctors
  const filteredDoctors = doctors.filter((doc) => {
    return (
      (!searchDistrict || doc.district === searchDistrict) &&
      (!searchUpazila || doc.upazila === searchUpazila)
    );
  });

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      {/* Registration Form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Join as a Doctor
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full p-2 border rounded" />
          <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization" required className="w-full p-2 border rounded" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full p-2 border rounded" />
          <input type="file" name="photo" onChange={handleChange} className="w-full" />
          {preview && <img src={preview} alt="Preview" className="w-24 h-24 mt-2 rounded-full object-cover" />}
          <select name="district" value={formData.district} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select District</option>
            {districtsData.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
          </select>
          <select name="upazila" value={formData.upazila} onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Upazila</option>
            {districtsData.find(d => d.name === formData.district)?.upazilas.map((u,i) => <option key={i} value={u}>{u}</option>)}
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Register</button>
        </form>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mt-6 flex gap-2">
        <select value={searchDistrict} onChange={(e)=>{setSearchDistrict(e.target.value); setSearchUpazila("");}} className="p-2 border rounded w-1/2">
          <option value="">All Districts</option>
          {districtsData.map(d=> <option key={d.id} value={d.name}>{d.name}</option>)}
        </select>
        <select value={searchUpazila} onChange={e=>setSearchUpazila(e.target.value)} className="p-2 border rounded w-1/2">
          <option value="">All Upazilas</option>
          {districtsData.find(d=>d.name===searchDistrict)?.upazilas.map((u,i)=><option key={i} value={u}>{u}</option>)}
        </select>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
        {filteredDoctors.map((doc, idx)=>(
          <div key={idx} className="bg-white shadow-lg rounded-xl p-4 flex gap-4 items-center">
            <img src={doc.photo} alt={doc.name} className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-lg">{doc.name}</h3>
              <p className="text-blue-600">{doc.specialization}</p>
              <p className="text-gray-500">{doc.upazila}, {doc.district}</p>
              <p className="text-gray-400 text-sm">{doc.email}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-96 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Registered!</h3>
            <p className="text-gray-700 mb-6">Doctor registered successfully.</p>
            <button onClick={()=>setShowModal(false)} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinDoctor;