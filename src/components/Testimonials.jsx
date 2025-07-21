import React from 'react'
import { testimonialData } from '../data/main'

const Testimonials = () => {
  return (
    <section>
        <div className="wrapper lg:text-center lg:py-15 py-10">
            <h2 className='text-5xl mb-8'>Real Clients Testimonials</h2>
            <h3>WRITE US A REVIEW</h3>

            <ul className="testimonial-cards">
                {testimonialData.map((item) => (
                    <li className='testimonial-card' key={item.id}>
                        <p>{item.message}</p>

                        <div className="flex flex-col gap-1 mt-2">
                            <h2 className='font-bold text-lg'>{item.name}</h2>
                            <h3>{item.occupation}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Testimonials