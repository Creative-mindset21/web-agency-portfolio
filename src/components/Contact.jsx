import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

function getDate() {
  const today = new Date();
  const year = today.getFullYear();
  return year;
}

const Contact = () => {
  const [currentYear, setCurrentYear] = useState(getDate());
  return (
    <footer className="footer">
      <div className="wrapper flex items-center gap-10 flex-col lg:flex-row w-full lg:w-auto">
        <a href="mailto:creativestudios210@gmail.com" className="contact">
          Send us a Message
          <MdArrowOutward size={20} />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=447988537395&text=Hello%2C+%2ACreativeStudios%2A+I+am+Coming+From+Your+Website%2C+I+Need+A+Design.+&type=phone_number&app_absent=0"
          className="contact"
          target="_blank"
        >
          WhatsApp Chat
          <MdArrowOutward size={20} />
        </a>

        <a href="#" className="contact">
          Home
          <MdArrowOutward size={20} />
        </a>
      </div>

      <div className="wrapper  flex gap-20 items-center">
        <div>
          <h3>VERSION</h3>
          <p className="text-lg">{currentYear}&copy;Version</p>
        </div>

        <div>
          <h3>DESIGNED BY</h3>
          <p className="text-lg">Creative Studios</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
