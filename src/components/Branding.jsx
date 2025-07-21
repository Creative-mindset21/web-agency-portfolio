import React from 'react'
import { NavLink } from 'react-router-dom'

const Branding = () => {
  return (
    <section className='bg-black text-gray-50'>
        <div className='flex flex-col lg:flex-row items-start justify-between content-wrapper py-10 mt-10 lg:pt-20'>
            <div className='lg:max-w-[30rem] flex flex-col gap-10 md:gap-5'>
                <h2 className='text-5xl md:text-6xl tracking-tighter font-medium'>These Brands Are Gold.</h2>
                <p className='text-lg leading-snug md:text-[1.3rem]'>We Design Feelings, We prepare brands, and We do all that from scratch. We will practically make your customers adjust to your price with practical visual concepts.</p>

                <div className="flex gap-5">
                    <NavLink to="#"className="button rounded-lg hidden md:inline-block text-black">See All Projects</NavLink>
                    <NavLink to="#"className="button bg-white text-black rounded-lg w-full text-center md:w-auto">
                        I NEED A DESIGN
                    </NavLink>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:text-right mt-10 brand'>
                
                <div>
                    <h3>EXPERIENCE</h3>
                    <h4>Since 2012</h4>
                </div>

                <div>
                    <h3>COVERED</h3>
                    <h4>20+ Countries</h4>
                </div>

                <div>
                    <h3>PROJECTS</h3>
                    <h4>250+ Brands</h4>
                </div>

                <div>
                    <h3>LOGOS</h3>
                    <h4>800+ Logos</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Branding