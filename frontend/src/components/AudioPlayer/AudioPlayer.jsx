import React, { useEffect, useRef, useState } from 'react';
import { IoPlayBackSharp, IoPlayForward } from "react-icons/io5";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { playerActions } from '../../store/player';

const AudioPlayer = () => {
  const [isSongPlaying, setisSongPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch();
  const PlayerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);
  const audioref = useRef();

  const formatTime = (time) => {
    if (isNaN(time) || time == null) return "0:00";
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();
    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(""));
    if (audioref.current) {
      audioref.current.pause();
      audioref.current.currentTime = 0;
    }
    setisSongPlaying(false);
  };

  const handlePodCast = () => {
    if (!audioref.current) return;
    if (isSongPlaying) {
      audioref.current.pause();
    } else {
      audioref.current.play();
    }
    setisSongPlaying(!isSongPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioref.current) {
      setCurrentTime(audioref.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioref.current) {
      setDuration(audioref.current.duration);
    }
  };

  // Skip backward by 10 seconds
  const handleBackward = () => {
    if (audioref.current) {
      let newTime = audioref.current.currentTime - 10;
      if (newTime < 0) newTime = 0;
      audioref.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Skip forward by 10 seconds
  const handleForward = () => {
    if (audioref.current) {
      let newTime = audioref.current.currentTime + 10;
      if (newTime > duration) newTime = duration;
      audioref.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  useEffect(() => {
    const currentAudio = audioref.current;
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);
      currentAudio.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (currentAudio) {
        currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
        currentAudio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [songPath]);

  return (
    <div className={`${PlayerDivState ? "fixed bottom-0" : "hidden"} w-full bg-zinc-900 text-zinc-300 p-4 z-50 rounded flex items-center gap-4`}>
      <div className="hidden md:block w-1/3">
        <img src={img} alt="img" className="w-14 h-14 rounded-full object-left-top" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-4 text-xl">
          <button onClick={handleBackward}><IoPlayBackSharp /></button>
          <button onClick={handlePodCast}>
            {isSongPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
          </button>
          <button onClick={handleForward}><IoPlayForward /></button>
        </div>
        <div className="w-full flex items-center justify-center mt-3">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const time = Number(e.target.value);
              audioref.current.currentTime = time;
              setCurrentTime(time);
            }}
            className='w-full hover:cursor-pointer'
          />
        </div>
        <div className="w-full flex items-center justify-between text-sm mt-1 px-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-end">
        <audio ref={audioref} src={songPath} />
        <button onClick={closeAudioPlayerDiv}><ImCross /></button>
      </div>
    </div>
  );
};

export default AudioPlayer;
