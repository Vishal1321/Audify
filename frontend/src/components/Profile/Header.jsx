import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [userData, setUserData] = useState();
  const dispatch=useDispatch();
 const navigate= useNavigate()
    useEffect(()=>{
        const fetchUserDetails=async()=>{
const res=await axios.get("http://localhost:1000/api/v1/user-details",{withCredentials:true});
setUserData(res.data.user);
        }
fetchUserDetails();
    },[]);
    const LogoutHandler=async()=>{
      const res=await axios.post("http://localhost:1000/api/v1/logout",{},
      {withCredentials:true}
      );
      dispatch(authActions.logout())
      navigate("/")
    }
  return (
    <>
{userData && <div className="bg-green-700  py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between px-4 lg:px-12">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
  <p className="text-zinc-400 text-sm">Profile</p>
  <h1 className="text-3xl md:text-4xl lg:text-5xl text-amber-50 font-bold">
    {userData.username}
  </h1>
  <p className="text-zinc-300 mt-1 text-sm">{userData.email}</p>
</div>

<div className="flex justify-center md:justify-start mt-4 md:mt-0">
  <button className="bg-white px-4 py-2 rounded text-zinc-800 font-semibold hover:shadow-2xl transition-all duration-300" onClick={LogoutHandler}>
    Logout
  </button>
</div>
</div>}
</>
  )
}

export default Header
