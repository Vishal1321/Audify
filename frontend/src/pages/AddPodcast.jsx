import React from 'react'
import { useSelector } from 'react-redux'
import InputPodCast from '../components/AddPodcast/InputPodCast'
import Errorpage from './Errorpage'

const AddPodcast = () => {
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)

  return (
    <div>
        {isLoggedIn?<InputPodCast/>:<Errorpage/>}
      
    </div>
  )
}

export default AddPodcast
