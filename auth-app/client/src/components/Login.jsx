import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.msg || 'Server error'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden w-full max-w-sm border border-slate-700">
        {/* Header */}
        <div className="bg-cyan-400 px-6 py-4">
          <h2 className="text-center text-slate-800 text-lg font-bold tracking-wider">SIGN IN</h2>
        </div>

        {/* Form Container */}
        <div className="px-8 py-8">
          {/* Avatar Circle */}
          <div className="mx-auto h-20 w-20 bg-slate-600 rounded-full flex items-center justify-center mb-8 border-4 border-slate-500">
            <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="username"
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
                placeholder="password"
                required
                className="w-full bg-slate-700 text-white rounded-md py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent placeholder-slate-400 border border-slate-600"
              />
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex justify-between items-center text-xs text-slate-400">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-cyan-400 focus:ring-cyan-400 focus:ring-2"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="hover:text-cyan-400 transition-colors">Forgot your password?</a>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-slate-800 font-bold py-3 rounded-md transition duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Register Link */}
        <div className="px-8 pb-8">
          <p className="text-center text-sm text-slate-400">
            Don't have an account? <Link to="/register" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;