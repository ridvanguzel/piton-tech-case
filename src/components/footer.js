import React from 'react'
import Image from 'next/image'
import contactPic from '../Images/contact-image.png'



const Footer = () => {
  return (
    // <!-- Footer Start Here-->
    <footer className='px-6 lg:px-100 py-24 lg:py-52'>
      {/* Footer Container  */}
      <div className="flex flex-col">
        {/* <!-- Footer Content --> */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-24 lg:gap-48">
          {/* <!-- Contact Left Sıde Content --> */}
          <div className="w-full bg-pink-600">
            <div className="bg-contact-image flex justify-center items-start py-12 lg:p-36 h-full">
             <Image src={contactPic}  alt="Contact Picture" />
            </div>
          </div>
          {/* <!-- Footer Left Sıde Content --> */}
          {/* <!-- Footer Right Sıde Content --> */}
          <div className="flex flex-col gap-12">
            <h3 className="text-5xl font-bold text-body  text-right">
              We'd love to hear<br />
              from you</h3>
            {/* <!--Contact Form Area --> */}
            <form action="get" className="flex flex-col gap-8">
              <input type="text" placeholder="Name" required
                className="text-28 font-medium border-solid border  border-body border-opacity-60 px-12 py-6 outline-none" />
              <input type="email" placeholder="Email" required
                className="text-28 font-medium border-solid border  border-body border-opacity-60 px-12 py-6 outline-none" />
              <input type="url" placeholder="Website URL" required
                className="text-28 font-medium border-solid border  border-body border-opacity-60 px-12 py-6 outline-none" />
              <textarea name="project-details" id="project-details" placeholder="Project Details"
                rows="4"
                className="text-28 font-medium border-solid border  border-body border-opacity-60 px-12 py-6 outline-none"></textarea>
              <button type="button"
                className="bg-body text-28 font-medium text-white py-5 hover:bg-zinc-900 duration-500">Send
                Proposal</button>
            </form>
            {/* <!--Footer Form Area --> */}
          </div>
          {/* <!-- Footer Right Sıde Content --> */}

        </div>
        {/* Footer Content */}
      </div>
      {/* Footer Container  */}
    </footer>
    // <!-- Footer End Here-->
  )
}

export default Footer
