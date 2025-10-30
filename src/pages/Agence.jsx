import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
  ]


  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        markers: false,
        //markers:true,
        start: "top 26%",
        end:"top -80%",
        //scrub:true,
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:function(elem){

          let imageIndex;

           if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
           }else{
            imageIndex = imageArray.length - 1
           }

          imageRef.current.src = imageArray[imageIndex]
        }

      }
    })
  })

  return (
    <div>
       <div className='section1 relative py-1'>
      <div ref={imageDivRef} className='h-[20vw] w-[15vw] rounded-3xl overflow-hidden absolute top-50 left-[32vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src="img1.jpg" />
      </div>

      <div className='font-[font2] relative'>
        <div className='mt-[60vh]'>
        <h1 className='text-[19vw] text-center uppercase leading-[15vw]'>Soixan7e</h1>
        <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>Douze</h1>
      </div>

      <div className='pl-[40%] mt-20'>
        <p className='text-5xl'> &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
      </div>
    </div>
      
    </div>
  )
}

export default Agence