import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [mobileNav, setMobileNav] = useState(false);
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "All podcasts", path: "/all-podcasts" },
    ];

    return (
        <nav className='px-4 md:px-4 lg:px-2 lg:py-0.5 py-2 relative bg-purple-100'>
            <div className='flex items-center justify-between'>
                {/* Logo Section */}
                <div className="logo brand-name w-2/6 flex items-center gap-2">
                    <img src="./mic.png" className='w-12' alt="Microphone" />
                    <Link
                        to="/"
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 tracking-wide text-center animate-fade-in-up drop-shadow-lg flex items-center justify-center"
                    >
                        Audify
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center justify-center w-2/6">
                    {navLinks.map((item, i) => (
                        <Link key={i} to={item.path} className="ms-4 hover:font-semibold transition-all duration-300">
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Authentication Buttons */}
                <div className="hidden lg:flex items-center justify-end gap-4 pr-4 w-2/6">
                    {!isLoggedIn ? (
                        <>
                            <Link
                                to="/login"
                                className="px-6 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 hover:scale-105 transition-all duration-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300"
                            >
                                SignUp
                            </Link>
                        </>
                    ) : (
                        <Link
                            to="/profile"
                            className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300"
                        >
                            Profile
                        </Link>
                    )}
                </div>

                {/* Mobile Navigation Toggle Button */}
                <div className="lg:hidden w-4/6 flex items-center justify-end z-50">
                    <button onClick={() => setMobileNav(!mobileNav)} className="text-3xl bg-black text-amber-50">
                        {mobileNav ? <RxCross2 /> : <IoReorderThreeOutline />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`fixed w-full h-screen top-0 left-0 bg-blue-200 ${mobileNav ? "translate-y-0" : "translate-y-[-100%]"} transition-all duration-500 z-30`}>
                <div className='h-[100vh] flex flex-col items-center justify-center'>
                    {navLinks.map((item, i) => (
                        <Link key={i} to={item.path} className="mb-8 text-2xl hover:font-semibold transition-all duration-300">
                            {item.name}
                        </Link>
                    ))}
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="mb-8 text-2xl hover:font-semibold transition-all duration-300">
                                Login
                            </Link>
                            <Link to="/signup" className="mb-8 text-2xl hover:font-semibold transition-all duration-300">
                                SignUp
                            </Link>
                        </>
                    ) : (
                        <Link to="/profile" className="mb-8 text-2xl hover:font-semibold transition-all duration-300">
                            Profile
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
