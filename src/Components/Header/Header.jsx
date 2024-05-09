import React, { useState, useEffect } from 'react';
import Email from '../../assets/ImagesHeader/Email.png';
import Telefone from '../../assets/ImagesHeader/Telefone.png';
import Whatsapp from '../../assets/ImagesHeader/Whatsapp.png';
import Logo from '../../assets/ImagesHeader/Logo.svg';
import Button from '../../Components/Button/Button';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Transition } from '@headlessui/react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false); 

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }, []); 

  const toggleMenu = () => {
    setShowMenu(prevMenuState => !prevMenuState); 
  };

  return (
    <div>
      <header data-aos="fade-right" className='bg-primary py-2 hidden lg:block'>
        <div className='flex justify-evenly mx-10 '>
          <div className='flex items-center gap-3'>
            <img className='header-icon' src={Email} alt="Email" />
            <p className='text-white'>contato@buenobeauty.com.br</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='header-icon' src={Telefone} alt="Telefone" />
            <p className='text-white'>(00) 00000-0000</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='header-icon' src={Whatsapp} alt="Whatsapp" />
            <p className='text-white'>(00) 00000-0000</p>
          </div>
          <div className='flex items-center gap-5'>
            <p className='text-white'>Siga-nos:</p>
            <FaYoutube id='fa-youtube' className='icon text-white cursor-pointer text-xl' />
            <FaInstagram id='fa-instagram' className='icon text-white cursor-pointer text-xl' />
            <FaTiktok id='fa-tiktok' className='icon text-white cursor-pointer text-xl' />
            <FaFacebook id='fa-facebook' className='icon text-white cursor-pointer text-xl' />
          </div>
        </div>
      </header>
      <div data-aos="fade-right" className='flex justify-around flex-col bg-white py-7 lg:flex-row'>
        <div className='flex items-center justify-around'>
          <img className='cursor-pointer w-60 lg:w-full' src={Logo} alt="Logo" />
          <IoMdMenu onClick={toggleMenu} className='text-2xl text-primary cursor-pointer lg:hidden' />
        </div>
        <Transition
          show={showMenu}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div ref={ref}>
              <ul className='py-7 flex flex-col justify-around items-center gap-6 text-black lg:flex-row bg-white'>
                <li className='hover:text-black cursor-pointer lett tracking-widest lg:hover:text-segundary'>HOME</li>
                <li className='hover:text-black cursor-pointer lett tracking-widest lg:hover:text-segundary'>SOBRE NÓS</li>
                <li className='hover:text-black cursor-pointer lett tracking-widest lg:hover:text-segundary'>SERVIÇOS</li>
                <li className='hover:text-black cursor-pointer lett tracking-widest lg:hover:text-segundary'>PROFISSIONAIS</li>
                <li className='hover:text-black cursor-pointer lett tracking-widest lg:hover:text-segundary'>CONTATO</li>
                <Button className='bg-button py-3 px-6 ml-12 font-primary text-white hover:text-segundary rounded hidden lg:flex' childreen='AGENDAR HORÁRIO' />
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </div>
  )
}

export default Header;
