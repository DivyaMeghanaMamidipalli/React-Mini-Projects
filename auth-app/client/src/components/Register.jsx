import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', dob: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Registration failed: ' + (err.response?.data?.msg || 'Server error'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden w-full max-w-md border border-slate-700">
        {/* Header */}
        <div className="bg-cyan-400 px-6 py-4">
          <h2 className="text-center text-slate-800 text-lg font-bold tracking-wider">SIGN UP</h2>
        </div>

        {/* Form Container */}
        <div className="px-8 py-8">
          {/* Avatar Circle */}
          <div className="mx-auto h-20 w-20 bg-slate-600 rounded-full flex items-center justify-center mb-8 border-4 border-slate-500">
            <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Full Name"
                required
                className="w-full bg-slate-700 text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-slate-400 border border-slate-600"
              />
            </div>

            {/* Date of Birth Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={onChange}
                required
                className="w-full bg-slate-700 text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-slate-400 border border-slate-600"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Email Address"
                required
                className="w-full bg-slate-700 text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-slate-400 border border-slate-600"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                placeholder="Password (min 6 characters)"
                required
                minLength="6"
                className="w-full bg-slate-700 text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-slate-400 border border-slate-600"
              />
            </div>

            {/* Register Button */}
            <button 
              type="submit" 
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-800 font-bold py-3 rounded-md transition duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              REGISTER
            </button>
          </form>
        </div>

        {/* Login Link */}
        <div className="px-8 pb-8">
          <p className="text-center text-sm text-slate-400">
            Already have an account? <Link to="/login" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;