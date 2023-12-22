import React from 'react'
import Image from 'next/image'
import TeamMemberOne from '../Images/avatar/avatar-1.png'
import TeamMemberTwo from '../Images/avatar/avatar-2.png'
import TeamMemberThree from '../Images/avatar/brooklynsimmons-avatar.png'



const OurTeam = () => {
    return (
        //Team Section Start Here
        <section className="px-6  xl:px-40 py-48">
            {/* Team Content */}
            <div className="flex flex-col w-full">
                {/*  Team Heading  */}
                <h1 className=" text-5xl text-body font-bold text-center">Meet the heroes behind the magic</h1>
                {/* Team Heading */}
                {/* Team Boxes Content*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-32 gap-16">
                    {/* Team Boxes */}
                    {/* Teammate - 1  */}
                    <div className="flex flex-col gap-11 p-4 shadow-18 bg-white">
                        {/* Avatar */}
                        <div className="flex h-80">
                            <Image 
                                src={TeamMemberOne} 
                                style={{ objectFit: 'cover',}}
                                className='w-screen'
                                />
                        </div>
                        {/* Avatar 
                     Team Person Personal Information */}
                        <div className="flex flex-col gap-2">
                            {/*  Person Name */}
                            <h1 className="text-34 text-body font-bold break-words">Esther Howard</h1>
                            {/*  Person Name */}
                            {/*  Person Job Name */}
                            <h4 className="text-2xl font-medium opacity-50">Founder</h4>
                            {/* Person Job Name */}
                        </div>
                    </div>
                    {/*  Teammate - 1*/}

                    {/* Teammate - 2 */}
                    <div className="flex flex-col  gap-11 p-4 shadow-18 bg-white">
                        {/*  Avatar */}
                        <div className="flex h-80">
                        <Image 
                                src={TeamMemberTwo} 
                                style={{ objectFit: 'cover',}}
                                />
                        </div>
                        {/* Avatar */}
                        {/* Team Person Personal Information */}
                        <div className="flex flex-col gap-2">
                            {/*  Person Name */}
                            <h1 className="text-34 text-body font-bold break-words">Cody Fisher</h1>
                            {/*  Person Name -->*/}
                            {/*  Person Job Name */}
                            <h4 className="text-2xl font-medium opacity-50">Developer</h4>
                            {/*  Person Job Name */}
                        </div>
                    </div>
                    {/* Teammate - 2*/}

                    {/* Teammate - 3  */}
                    <div className="flex flex-col gap-11 p-4 shadow-18 bg-white">
                        {/* Avatar */}
                        <div className="flex h-80">
                        <Image 
                                src={TeamMemberThree} 
                                style={{ objectFit: 'cover',}}
                                />
                        </div>
                        {/* Avatar */}
                        {/* Team Person Personal Information   */}
                        <div className="flex flex-col gap-2">
                            {/* Person Name*/}
                            <h1 className="text-34 text-body font-bold break-words">
                                Brooklyn Simmons
                            </h1>
                            {/* Person Name*/}
                            {/* Person Job Name*/}
                            <h4 className="text-2xl font-medium opacity-50">Designer</h4>
                            {/* Person Job Name */}
                        </div>
                    </div>
                    {/*  Teammate - 3 */}
                </div>
                {/*Team Boxes  */}
            </div>
            {/*  Team Boxes Content */}
            {/*  Team Content */}

        </section>
        //Team Section End Here
    )
}

export default OurTeam
