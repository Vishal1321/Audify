import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PodcastCard from '../PodcastCard/PodcastCard';

const YourPodcast = () => {
  const [Podcasts, setPodcasts] = useState()
  useEffect(()=>{
const fetch=async()=>{
 const res= await axios.get("http://localhost:1000/api/v1/get-user-podcasts",{withCredentials:true})
 setPodcasts(res.data.data);
};
fetch();
  },[]);
  return (
    <div className='px-4 lg:12 my-4'>
        <div className="flex items-center justify-between gap-4">
            <h1 className='text-xl  max-sm:w-10 font-semibold md:font-bold'>Your Podcasts</h1>
            <Link
  to="/add-podcast"
  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-700 text-zinc-900 font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out"
>
  🎙️ Add Podcast
</Link>
        </div>
        <div className='w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {Podcasts && Podcasts.map((items,i)=>
        <div key={i}><PodcastCard items={items}/>{""}</div>
        )}
      
    </div>
    </div>
  )
}

export default YourPodcast
