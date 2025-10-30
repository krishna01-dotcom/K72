import React from 'react'
import Video from './Video'


const Homeherotext = () => {

  
  return (
    <div className=' font-[font1] pt-5 text-center'>
        <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>L'étincelle</div>

        <div className='text-[9vw] flex items-center justify-center uppercase leading-[8vw]'>qui 
            <div className='h-[7vw] w-[16vw] rounded-full overflow-hidden'> 
                <Video />
             </div>

        génère</div>

        <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default Homeherotext