import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-green-300   px-4 sm:px-8 md:px-12 h-screen flex flex-col items-center justify-center'>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="w-full lg:w-4/6 max-md:text-center">
          <h1 className="  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-wide animate-fade-in-up drop-shadow-lg">
            Create & Listen the <br />
            <p className='flex items-center mt-2 justify-center md:justify-start'>
              <span className='flex max-sm:text-3xl items-center'>
                <span className="">P</span>
                <img src="/headphone.png" alt="Headphone" className='h-10 w-10 sm:h-12 sm:w-12 xl:h-20 xl:w-20 rounded-full object-fill mt-1 sm:mt-2.5' />
                <span className="ml-1">dcast</span>
              </span>
            </p>
          </h1>
        </div>

        <div className="lg:block absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="max-md:hidden py-2 px-4 bg-slate-700 text-white border font-semibold rounded-full text-center -rotate-90">
            Scroll Down
          </div>
        </div>
      </div>

      <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
          <p>Listen to the Most Popular Podcasts on Just One Platform - <b>AUDIFY</b></p>
          <button
            className="bg-indigo-700 text-white border px-4 py-3 text-base sm:text-lg md:text-xl mt-6 rounded-full shadow-md hover:bg-green-900 hover:shadow-fuchsia-600 transition duration-300 font-semibold relative overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("animate-[lightning_1.5s_infinite]");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("animate-[lightning_1.5s_infinite]");
            }}
          >
            <Link to="/login">🔗 Login to Listen</Link>
          </button>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm sm:text-base md:text-xl font-semibold text-slate-700 tracking-wide bg-white/30 px-4 py-2 rounded-xl shadow-md backdrop-blur-sm border border-white/20 w-fit mx-auto md:mx-0 mt-4">
            Our App has More than <span className="text-red-600">1000 Podcasts</span> for You
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
