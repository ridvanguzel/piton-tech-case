import React from 'react'
import Image from 'next/image'
import midslider from '../Images/mid-image.png'

const MidImage = () => {
  return (
  
    // Mid Image Start Here -->
    <section className="px-6 md:px-100">
        <div className="flex">
            <Image 
                src={midslider}  
                alt="Contact Picture" 
                className='w-screen'
            />
        </div>
    </section>
    // Mid Image End Here -->
  )
}

export default MidImage
