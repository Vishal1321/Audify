import React from 'react'


import { Link } from 'react-router-dom';

const Errorpage = () => {
return (
<div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-400 to-blue-100 p-6">
<div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center animate-fade-in">
<h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
<h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
<p className="text-gray-600 mb-6">The page you are looking for might have been removed or is temporarily unavailable.</p>
<Link to="/" className="inline-block px-6 py-3 bg-green-700 text-white rounded-full shadow hover:bg-blue-800 transition duration-300">
Go Back Home
</Link>
</div>
</div>
);
};

export default Errorpage;