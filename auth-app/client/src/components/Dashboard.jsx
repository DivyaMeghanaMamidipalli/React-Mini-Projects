import React from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
    { id: 1, name: 'Michael Holz', avatar: 'https://i.pravatar.cc/150?img=1', date: '04/10/2013', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Paula Wilson', avatar: 'https://i.pravatar.cc/150?img=2', date: '05/08/2014', role: 'Publisher', status: 'Active' },
    { id: 3, name: 'Antonio Moreno', avatar: 'https://i.pravatar.cc/150?img=3', date: '11/05/2015', role: 'Publisher', status: 'Suspended' },
    { id: 4, name: 'Mary Saveley', avatar: 'https://i.pravatar.cc/150?img=4', date: '06/09/2016', role: 'Reviewer', status: 'Active' },
    { id: 5, name: 'Martin Sommer', avatar: 'https://i.pravatar.cc/150?img=5', date: '12/08/2017', role: 'Moderator', status: 'Inactive' },
];

const statusColor = {
    Active: 'bg-green-100 text-green-800',
    Suspended: 'bg-red-100 text-red-800',
    Inactive: 'bg-yellow-100 text-yellow-800',
};

const Dashboard = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-700">
                {/* Header */}
                <div className="bg-cyan-400 px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <h1 className="text-xl font-bold text-slate-800 tracking-wider mb-2 sm:mb-0">
                            DASHBOARD - Welcome, {loggedInUser?.name || 'User'}!
                        </h1>
                        <button 
                            onClick={handleLogout} 
                            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 transform hover:scale-[1.02] shadow-lg"
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>

                {/* Table Container */}
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <div className="bg-white rounded-lg border border-white overflow-hidden">
                            <table className="w-full text-sm text-left text-black">
                                <thead className="text-xs text-black uppercase bg-white border-b border-slate-500">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">#</th>
                                        <th className="px-6 py-4 font-bold">Name</th>
                                        <th className="px-6 py-4 font-bold">Date Created</th>
                                        <th className="px-6 py-4 font-bold">Role</th>
                                        <th className="px-6 py-4 font-bold">Status</th>
                                        <th className="px-6 py-4 font-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr 
                                            key={user.id} 
                                            className={`border-b border-white hover:bg-slate-50 transition-colors ${
                                                index % 2 === 0 ? 'bg-white' : 'bg-white'
                                            }`}
                                        >
                                            <td className="px-6 py-4 font-medium text-black">{user.id}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <img 
                                                        src={user.avatar} 
                                                        alt="avatar" 
                                                        className="w-10 h-10 rounded-full border-2 border-white shadow-lg" 
                                                    />
                                                    <span className="font-medium text-md text-black">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-black">{user.date}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1  text-black rounded-full text-md font-medium ">
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 font-semibold leading-tight rounded-full text-md text-black ${statusColor[user.status]} bg-white shadow-sm`}>
                                                    ● {user.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <button className="p-2 text-black hover:text-cyan-400 hover:bg-slate-600 rounded-full transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                    <button className="p-2 text-black hover:text-red-400 hover:bg-slate-600 rounded-full transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;