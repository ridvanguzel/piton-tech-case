import React from 'react'
import Image from 'next/image'
import HandsOne from '../Images/hands/hand1.png'
import HandsTwo from '../Images/hands/hand2.png'
import HandsThree from '../Images/hands/hand3.png'
import HandsFour from '../Images/hands/hand4.png'
import HandsFive from '../Images/hands/hand5.png'
import HandsSix from '../Images/hands/hand6.png'

const HeroSection = () => {
  return (
    //Hero Section Start Here
    <section className="px-6 lg:px-100 bg-hero h-dvh  relative pt-80 lg:pt-80 xl:pt-40 ">
      {/*  Hero Container  */}
      <div className="flex flex-col items-center justify-center">
        {/*  Hero Slogan  */}
        <h1 className="text-6xl md:text-100 font-bold  md:leading-slogan text-center">Let’s create something
          great together.</h1>
        {/* Hero Slogan  */}
        {/*  Hero Image */}
      
          <div className="flex lg:flex absolute bottom-0 w-14 md:w-32 lg:w-40 xl:w-full justify-center">
            <Image src={HandsOne} alt="" />
            <Image src={HandsTwo} alt="" />
            <Image src={HandsThree} alt="" />
            <Image src={HandsFour} alt="" />
            <Image src={HandsFive} alt="" />
            <Image src={HandsSix} alt="" />
          </div>
          
        {/* Hero Image  */}
      </div>
      {/*  Hero Container  */}
    </section>
    // Footer End Here
  )
}

export default HeroSection
