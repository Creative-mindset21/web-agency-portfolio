import React from 'react'
import { brandingData } from '../data/main.js'

const BrandingProjects = () => {
  return (
    <section className='bg-black'>
        <div className='content-wrapper'>
            <ul className="branding-cards">
                {brandingData.map((item) => (
                    <li className="card">
                        <img src={item.imgSrc} alt={`Image of ${item.name}`} />
                        <p className='mt-2 font-bold text-nav-color'>
                            {item.name.toUpperCase()}
                        </p>
                    </li>
                ))} 
            </ul>
        </div>
    </section>
  )
}

export default BrandingProjects