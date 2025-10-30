import React from 'react'
import Video from '../components/home/Video'
import Homeherotext from '../components/home/Homeherotext';
import Bottomtext from '../components/home/Bottomtext';


const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <Homeherotext />
        <Bottomtext />
      </div>


    </div>

  
  )
}

export default Home