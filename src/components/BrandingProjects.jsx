import React from 'react'
import { brandingData } from '../data/data'

const BrandingProjects = () => {
  return (
    <section className='bg-black'>
        <div className='wrapper'>
            <ul className="branding-cards">
                {brandingData.map((item) => (
                    <li className="card" key={item.id}>
                        <img src={item.imgSrc} alt={`Image of ${item.name}`} />
                            <p className='mt-2 font-bold text-nav-color'>{item.name.toUpperCase()}</p>
                    </li>
                ))} 
            </ul>
        </div>
    </section>
  )
}

export default BrandingProjects