


import { useForm } from 'react-hook-form';
import useAuth from '../../../houk/useAuth';
import { Link } from 'react-router-dom';
import SocialLogin from '../../../pages/Auth/SocialLogin/ScoialLogin'; // corrected spelling
import axios from 'axios';
import useAxiosSecure from '../../../houk/useAxiosSecure';
import { useEffect, useState } from 'react';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const axiosSecure = useAxiosSecure();

  // State for districts & upazilas
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');

  // Load data
  useEffect(() => {
    axios.get('/upazilas.json')
      .then(res => {
        const data = res.data[2].data;
        console.log("Upazilas:", data);
        setUpazilas(data);
      });

    axios.get('/districts.json')
      .then(res => {
        const data = res.data[2].data;
        console.log("Districts:", data);
        setDistricts(data);
      });

  }, []);

  // Registration handler
  const handleRegistration = async (data) => {
    try {
      const profileImg = data.photo[0];

      // 1. Firebase user create
      await registerUser(data.email, data.password);

      // 2. Upload image
      const formData = new FormData();
      formData.append('image', profileImg);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
        formData
      );

      const photoURL = imgRes.data.data.url;

const districtName = districts.find(d => d.id === selectedDistrict)?.name || '';
const upazilaName = upazilas.find(u => u.id === selectedUpazila)?.name || '';

const userInfo = {
  name: data.name,
  email: data.email,
  photoURL: photoURL,
  bloodGroup: data.bloodGroup,
  district: districtName,  
  upazila: upazilaName   
};

await axiosSecure.post('/user', userInfo);


      // 4. Update firebase profile
      await updateUserProfile({
        displayName: data.name,
        photoURL
      });

      console.log('Registration successful');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white-100 px-4 bg-gradient-to-br from-pink-200 to-pink-300">

      {/* <h2 className="text-3xl font-bold text-center">Welcome to Blood Donation</h2> */}
      <p className="text-xl text-center font-semibold">Welcome to Blood Donation</p>

      <form
        className="bg-pink-200 p-8 rounded-2xl shadow-xl w-full max-w-sm mt-4"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <fieldset className="space-y-4">

          {/* Name */}
          <div>
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              className="input input-bordered w-full"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-pink-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="label font-semibold">Photo</label>
            <input
              type="file"
              {...register('photo', { required: true })}
              className="file-input w-full"
            />
            {errors.photo && (
              <p className="text-pink-500 text-sm mt-1">Photo is required</p>
            )}
          </div>

          {/* Blood Group */}
          <label className="label font-semibold">Choose Your Role</label>
          <select {...register('bloodGroup', { required: true })} defaultValue="" className='input w-full mb-4'>
            <option disabled value=''>Choose Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          {/* District */}
          <select
            value={selectedDistrict}
            onChange={e => {
              setSelectedDistrict(e.target.value);
              setSelectedUpazila(''); // reset upazila on district change
            }}
            className="select w-full mb-4"
          >
            <option value="">Select Your District</option>
            {districts.map(d => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            value={selectedUpazila}
            onChange={e => setSelectedUpazila(e.target.value)}
            className="select w-full mb-4"
          >
            <option value="">Select Your Upazila</option>
            {upazilas
              .filter(u => u.district_id === selectedDistrict)
              .map(u => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
          </select>

          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="input input-bordered w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-pink-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
              })}
              className="input input-bordered w-full"
              placeholder="Password"
            />
            {errors.password?.type === 'required' && (
              <p className="text-pink-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-red-400 text-sm mt-1">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className="text-blue-600 text-sm mt-1">
                Password must include uppercase, lowercase, number & special character
              </p>
            )}
          </div>

          <button className="btn btn-primary w-full mt-4 hover:bg-fuchsia-300">
            Register
          </button>
        </fieldset>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-red-500 underline" to="/auth/register">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
