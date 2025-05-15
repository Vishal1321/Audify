import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Description = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await axios.get(`http://localhost:1000/api/v1/get-podcast/${id}`, {
          withCredentials: true,
        });
        setPodcast(res.data.data);
      } catch (err) {
        console.error("Error fetching podcast:", err);
      }
    };

    fetchPodcast();
  }, [id]);

  return (
    <div className="px-4 lg:px-12 py-6 min-h-screen bg-white">
      {podcast ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Image Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={`http://localhost:1000/${podcast.frontImage}`}
              alt={podcast.title}
              className="rounded-lg object-left-top w-full h-64 md:h-[50vh] shadow-md"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full md:w-2/3 flex flex-col justify-start gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-800">{podcast.title}</h1>
            <p className="text-md md:text-lg text-gray-700">{podcast.description}</p>

            <div className="mt-2 inline-block text-sm md:text-md font-medium px-4 py-1 bg-orange-100 text-orange-800 border border-orange-300 rounded-full shadow-sm">
              🎧 {podcast.category.categoryName}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">Loading podcast...</div>
      )}
    </div>
  );
};

export default Description;
