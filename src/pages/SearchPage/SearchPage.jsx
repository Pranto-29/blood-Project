

import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../houk/useAxiosSecure";
import Swal from "sweetalert2";

const SearchPage = () => {
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

  const [results, setResults] = useState([]);

  const axiosSecure = useAxiosSecure();

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const selectedDistrictName =
    districts.find((d) => String(d.id) === String(selectedDistrict))?.name || "";

  useEffect(() => {
    axios.get("/districts.json").then((res) => {
      setDistricts(res.data[2].data);
    });

    axios.get("/upazilas.json").then((res) => {
      setUpazilas(res.data[2].data);
    });
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosSecure.get(
        `/search-requests?bloodGroup=${selectedBloodGroup}&district=${selectedDistrictName}&upazila=${selectedUpazila}`
      );

      const data = res.data || [];

      if (data.length === 0) {
        Swal.fire({
          icon: "info",
          title: "No Data Found",
          text: "এই search এর জন্য কোনো donor পাওয়া যায়নি 😢",
        });

        setResults([]);
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Search Complete",
        text: `${data.length} জন donor পাওয়া গেছে 🎉`,
      });

      setResults(data);
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Search করতে সমস্যা হয়েছে 😢",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 flex flex-col items-center">

      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md grid gap-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Search Donors
        </h2>

        {/* Blood Group */}
        <select
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        {/* District */}
        <select
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedUpazila("");
          }}
          className="border p-3 rounded-lg"
        >
          <option value="">Select District</option>
          {districts.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="">Select Upazila</option>
          {upazilas
            .filter(
              (u) => String(u.district_id) === String(selectedDistrict)
            )
            .map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
        </select>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
        >
          Search
        </button>
      </form>

      {/* RESULTS */}
      <div className="w-full max-w-6xl mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((donnar) => (
          <div
            key={donnar._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              {donnar.recipient_name}
            </h2>

            <p>🩸 Blood: {donnar.blood_group}</p>
            <p>📍 District: {donnar.recipient_district}</p>
            <p>📌 Upazila: {donnar.recipient_upazila}</p>
            <p>🏥 Hospital: {donnar.hospital_name}</p>

            <p className="text-sm text-gray-500 mt-2">
              ⏰ {new Date(donnar.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;