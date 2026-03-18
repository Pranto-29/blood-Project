import React, { useState, useEffect } from "react";
import axios from "axios";

const JoinDoctor = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    password: "",
    photo: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axios.get("/districts.json").then(res => setDistricts(res.data[2].data));
    axios.get("/upazilas.json").then(res => setUpazilas(res.data[2].data));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) data.append(key, formData[key]);
      data.append("district", districts.find(d => d.id === selectedDistrict)?.name || "");
      data.append("upazila", upazilas.find(u => u.id === selectedUpazila)?.name || "");

      const res = await axios.post("/api/doctors", data);
      if (res.data.success) {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", specialization: "", password: "", photo: null });
        setSelectedDistrict("");
        setSelectedUpazila("");
        setPreview(null);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Join as a Doctor</h2>

        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full p-2 border rounded" />
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} placeholder="Specialization / Department" required className="w-full p-2 border rounded" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full p-2 border rounded" />

        <input type="file" name="photo" onChange={handleChange} required className="w-full" />
        {preview && <img src={preview} alt="Preview" className="w-24 h-24 mt-2 rounded-full object-cover" />}

        <select value={selectedDistrict} onChange={e => { setSelectedDistrict(e.target.value); setSelectedUpazila(""); }} className="w-full p-2 border rounded">
          <option value="">Select District</option>
          {districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>

        <select value={selectedUpazila} onChange={e => setSelectedUpazila(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Select Upazila</option>
          {upazilas.filter(u => u.district_id === selectedDistrict).map(u => (
            <option key={u.id} value={u.id}>{u.name}</option>
          ))}
        </select>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl w-96 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Registered!</h3>
            <p className="text-gray-700 mb-6">Doctor registered successfully.</p>
            <button onClick={() => setShowModal(false)} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinDoctor;