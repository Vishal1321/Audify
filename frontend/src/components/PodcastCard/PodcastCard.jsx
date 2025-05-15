import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { playerActions } from '../../store/player';

const PodcastCard = ({ items }) => {
  const dispatch= useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handlePlay = (e) => {
if(isLoggedIn){
  e.preventDefault();

  dispatch(playerActions.setDiv());
  dispatch(playerActions.changeImage(`http://localhost:1000/${items.frontImage}`));
  dispatch(playerActions.changeSong(`http://localhost:1000/${items.audioFile}`));
}

  };

  return (
    <div className="w-full border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-[420px] bg-white flex flex-col justify-between">
      {/* Outer link wrapping only image and content, not button */}
      <Link to={`/description/${items._id}`} className="block">
        <div className="w-full h-[200px] overflow-hidden rounded-md">
          <img
            src={`http://localhost:1000/${items.frontImage}`}
            alt={items.title}
            className="w-full h-full object-left-top"
          />
        </div>
        <div className="mt-3 text-lg font-bold truncate">{items.title.slice(0, 30)}</div>
        <div className="mt-1 text-sm text-gray-600 line-clamp-2">
          {items.description.slice(0, 60)}
        </div>
        <div className="mt-4 text-xs border border-orange-700 bg-orange-100 rounded-full px-3 py-1 inline-block text-orange-800 font-medium">
          {items.category.categoryName}
        </div>
      </Link>

      {/* Separate Play Now button */}
      <div className="mt-1">
        <Link
          to={isLoggedIn ? "#" : "/signup"}  
          className="block text-center bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition-all duration-300"
          onClick={handlePlay}  >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default PodcastCard;
