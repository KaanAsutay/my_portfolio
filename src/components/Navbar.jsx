import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="flex h-screen bg-gray-100">
        {/* Hamburger Menü Butonu */}
        <button
          className="sm:hidden fixed top-4 left-4 p-2 bg-blue-500 text-white rounded"
          onClick={toggleMenu}
        >
          {isOpen ? 'Kapat' : 'Menü'}
        </button>
  
        {/* Sidebar */}
        <div className={`bg-gradient-to-b from-zinc-500 to-violet-500  p-4 w-64 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <div className="flex items-center justify-center mb-10 mt-12">
            <img
              className="w-36 h-36 rounded-full border-2 border-white"
              src="./images/avatar.jpeg"  // Profil fotoğrafınızın URL'sini ekleyin
              alt="Profil"
            />
          </div>
          <nav className="sm:block items-center">
            <ul className='flex flex-col gap-10 '>
              <li className="">
                <Link to="/" className="text-slate-200 hover:text-zinc-400 hover:underline text-3xl" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="/skills" className="text-slate-200 hover:text-zinc-400 hover:underline text-3xl" onClick={toggleMenu}>
                  Skills
                </Link>
              </li>
              <li className="">
                <Link to="/projects" className="text-slate-200 hover:text-zinc-400 hover:underline text-3xl" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li className="">
                <Link to="/about" className="text-slate-200 hover:text-zinc-400 hover:underline text-3xl" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="">
                <Link to="/contact" className="text-slate-200 hover:text-zinc-400 hover:underline text-3xl" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
              {/* Diğer sayfa linkleri buraya eklenebilir */}
            </ul>
          </nav>
        </div>
      </div>
      );
    };
    


export default Navbar