import React, { useState } from 'react';
import axios from 'axios';

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = ["Dhaka", "Chittagong", "Khulna"]; // example
const upazilas = ["Dhanmondi", "Mirpur", "Gulshan"]; // example

const DonorSearch = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [district, setDistrict] = useState('');
  const [upazila, setUpazila] = useState('');
  const [donors, setDonors] = useState([]);

  const handleSearch = async () => {
    try {
      const query = `?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`;
      const res = await axios.get(`/api/donors${query}`);
      setDonors(res.data);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search Donors</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select className="input input-bordered w-full" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
        </select>

        <select className="input input-bordered w-full" value={district} onChange={e => setDistrict(e.target.value)}>
          <option value="">Select District</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select className="input input-bordered w-full" value={upazila} onChange={e => setUpazila(e.target.value)}>
          <option value="">Select Upazila</option>
          {upazilas.map(u => <option key={u} value={u}>{u}</option>)}
        </select>

        <button onClick={handleSearch} className="btn btn-primary w-full">Search</button>
      </div>

      <div>
        {donors.length === 0 ? (
          <p className="text-gray-500">No donors found. Fill the form and click search.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {donors.map(donor => (
              <div key={donor._id} className="p-4 border rounded shadow">
                <h3 className="font-semibold">{donor.name}</h3>
                <p>Blood Group: {donor.bloodGroup}</p>
                <p>District: {donor.district}</p>
                <p>Upazila: {donor.upazila}</p>
                <p>Phone: {donor.phone}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorSearch;
