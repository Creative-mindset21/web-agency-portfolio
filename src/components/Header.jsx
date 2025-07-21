import { useRef, useState, useEffect } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='border-neutral-700/80 bg-transparent backdrop-blur-3xl text-black font-poppins fixed top-0 left-0 right-0 z-50 p-1'>
      <div className='flex py-5 lg:py-5 items-center justify-between '>
        <a href="" className="text-3xl">Creative</a>

        <div className='flex justify-center items-center gap-10'>
          <a href="#" className='bg-yellow-300 border-2 border-black text-nav-color py-3 px-4 rounded-full mr-8 hidden md:block font-montserrat font-medium'>Hire Me</a>

          {/* 👇 Wrap menu button and nav with menuRef */}
          <div className='relative' ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} className='absolute z-50 top-[-26px] right-0.5 border-black border-2 bg-white p-2 rounded-full cursor-pointer'>
              {menuOpen ? 
              <IoMdClose size={30} /> : <MdOutlineMenu size={30} />   
            }
              
            </button>
            {/* ${menuOpen ? "right-0" : "right-[-1000%]"} */}
            <nav
              className={`fixed top-0 ${menuOpen ? "right-1 md:right-1 top-2 opacity-100" : "right-[-1000%] opacity-0"}  bg-black text-nav-color md:w-[30%] w-[80%] shadow-2xl text-md md:text-4xl transition-all duration-500 ease-in-out pt-5 rounded-3xl`}
            >
              <ul className='flex flex-col py-15 px-8 gap-8 relative font-montserrat'>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Brand Design</a></li>
                <li><a href="#">Logos</a></li>
                <li><a href="#">Flyer Design</a></li>
              </ul>

              {/* <button
                className='absolute top-5 left-[80%] text-close-color cursor-pointer'
                onClick={() => setMenuOpen(false)}
                aria-label='Close menu'
              >
                
              </button> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
