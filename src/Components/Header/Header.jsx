import React from 'react';
import Email from '../../assets/ImagesHeader/Email.png';
import Facebook from '../../assets/ImagesHeader/Facebook.png';
import Instagram from '../../assets/ImagesHeader/Instagram.png';
import Telefone from '../../assets/ImagesHeader/Telefone.png';
import Tiktok from '../../assets/ImagesHeader/Tiktok.png';
import Whatsapp from '../../assets/ImagesHeader/Whatsapp.png';
import Youtube from '../../assets/ImagesHeader/Youtube.png';
import Logo from '../../assets/ImagesHeader/Logo.svg';
import Button from '../../Components/Button/Button';

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className='bg-primary py-2'>
        <div className='flex justify-evenly mx-10 '>
            <div className='flex items-center  gap-3'>
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
      <div className=' flex justify-around bg-white py-7'>
          <img className='cursor-pointer' src={Logo} alt="Logo" />
          <div>
            <ul className=' py-7 flex justify-around items-center gap-6'>
              <li className='hover:text-segundary cursor-pointer lett tracking-widest'>HOME</li>
              <li className='hover:text-segundary cursor-pointer lett tracking-widest'>SOBRE NÓS</li>
              <li className='hover:text-segundary cursor-pointer lett tracking-widest'>SERVIÇOS</li>
              <li className='hover:text-segundary cursor-pointer lett tracking-widest'>PROFFISIONAIS</li>
              <li className='hover:text-segundary cursor-pointer lett tracking-widest'>CONTATO</li>
              <Button className='bg-button py-3 px-6 ml-12 font-primary text-white hover:text-segundary rounded' childreen='AGENDAR HORÁRIO' />
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header;
