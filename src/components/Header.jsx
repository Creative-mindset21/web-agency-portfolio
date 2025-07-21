import { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className=' bg-bg-color text-black font-poppins fixed top-0 left-0 right-0'>
      <div className='flex py-5 lg:py-5 items-center justify-between wrapper'>
        <a href="" className="text-3xl">Creative</a>
        
        <nav className='hidden lg:flex gap-10 items-center'>
          <ul className='flex gap-4'>
            <li><a href="#" className='opacity-70 hover:opacity-100 transition-all'>Web Design</a></li>
            <li><a href="#" className='opacity-70 hover:opacity-100 transition-all'>Brand Design</a></li>
            <li><a href="#" className='opacity-70 hover:opacity-100 transition-all'>Logos</a></li>
            <li><a href="#" className='opacity-70 hover:opacity-100 transition-all'>Flyer Design</a></li>
          </ul>

          <a href="#" className='bg-yellow-300 text-nav-color py-1 px-4 rounded-full'>Hire Me</a>
        </nav>
    
        <nav className={`fixed top-0 ${menuOpen ? "left-0" : "left-[-1000%]"} bg-black text-nav-color w-[80%] shadow-2xl text-2xl md:text-4xl lg:hidden transition-all`} style={{transition: "all 1s ease-in-ou pt-5tlg:"}}>
          <ul className='flex flex-col py-15 px-8 gap-8 relative'>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Brand Design</a></li>
            <li><a href="#">Logos</a></li>
            <li><a href="#">Flyer Design</a></li>

            <button className='absolute top-5 left-[80%] text-close-color cursor-pointer' onClick={() => setMenuOpen(false)}>
              <IoMdClose size={35}/>
            </button>
          </ul>

          
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden'>
          <MdOutlineMenu size={30} />
        </button>

        
      </div>
    </header>
  )
}

export default Header

