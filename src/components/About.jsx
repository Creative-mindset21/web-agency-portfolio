import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section className='content-wrapper py-10 lg:pt-20'>
        <div className='flex flex-col justify-center items-center md:flex-row md:items-start md:justify-between'>
            <div className='lg:max-w-[35rem] flex flex-col gap-10 md:gap-5 font-montserrat'>
                <h2 className='text-5xl md:text-7xl font-medium '>Not Just A Website.</h2>
                <p className='text-lg leading-snug lg:text-[1.3rem]'>We Build Website that Touches all Emotion.<br/> We specialize in making Brands Stand out <br/>from the rest of its competition, significantly.</p>

                <div className="flex gap-5 text-xs font-medium">
                    <NavLink to="#"className="button rounded-full hidden md:inline-block">See All Projects</NavLink>
                    <NavLink to="#"className="button bg-black text-white rounded-full w-full text-center md:w-auto">I NEED A WEBSITE</NavLink>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 lg:text-right mt-10'>
                
                <div>
                    <h3>EXPERIENCE</h3>
                    <h4>Since 2015</h4>
                </div>

                <div>
                    <h3>COVERED</h3>
                    <h4>12+ Countries</h4>
                </div>

                <div>
                    <h3>PROJECTS</h3>
                    <h4>40+ Websites</h4>
                </div>

                <div>
                    <h3>TEAM</h3>
                    <h4>5 Members</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About