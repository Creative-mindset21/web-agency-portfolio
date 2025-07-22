import { testimonialData } from "../data/main";

const Testimonials = () => {
  return (
    <section className="bg-black text-white">
      <div className="wrapper lg:text-center lg:py-15 py-10">
        <h2 className="text-5xl xl:text-7xl font-medium mb-8">
          Real Clients Testimonials
        </h2>
        <h3 className="xl:text-lg text-white">WRITE US A REVIEW</h3>

        <ul className="testimonial-cards">
          {testimonialData.map((item) => (
            <li className="testimonial-card" key={item.id}>
              <p>{item.message}</p>

              <div className="flex flex-col gap-1 mt-2">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <h3 className="text-white">{item.occupation}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
