import React from 'react'
import { useSelector } from 'react-redux'
import Errorpage from './Errorpage'
import Header from '../components/Profile/Header'
import YourPodcast from '../components/Profile/YourPodcast'

const Profile = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  return (
    <div>
      {isLoggedIn?
      <><Header/>
      <YourPodcast/>
      </>:<Errorpage/>}
    </div>
  )
}

export default Profile
