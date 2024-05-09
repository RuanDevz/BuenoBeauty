import React from 'react';
import logo from '../../assets/ImagesFooter/Logo.svg';
import Telefone from '../../assets/ImagesHeader/Telefone.png';
import WhatsApp from '../../assets/ImagesHeader/Whatsapp.png';

const Footer = () => {
  return (
    <div>
      <main className='bg-black flex flex-col mt-32'>
        <section className='text-center flex flex-col gap-48 py-24 lg:flex-row justify-around items-center'>
          <article className='flex flex-col items-center max-w-lg text'>
            <img className='w-72' src={logo} alt="logo" />
            <p className='text-white pt-10 font-segundary text-left pb-20 lg:pb-0'>BuenoBeauty é mais do que um salão de beleza, é um espaço onde a beleza encontra o seu significado mais profundo. Nossa missão é proporcionar experiências de beleza excepcionais, que vão além da estética, elevando a autoestima e a confiança de nossos clientes.</p>
          </article>
          <article className='flex flex-col items-center max-w-lg'>
            <h1 className='text-segundary font-primary text-2xl text-left py-6'>Empresa</h1>
            <nav>
              <ul className="text-white">
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Sobre nós</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Serviços</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Profissionais</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Trabalhe conosco</li>
              </ul>
            </nav>
          </article>
          <article className='flex flex-col items-center max-w-lg'>
            <h1 className='text-segundary font-primary text-2xl text-left py-6'>Serviços</h1>
            <nav>
              <ul className="text-white">
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Lavada Especial</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Corte Feminino</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Escova</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Luzes</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Mais Serviços</li>
              </ul>
            </nav>
          </article>
          <article className='flex flex-col items-center max-w-lg'>
            <h1 className='text-segundary font-primary text-2xl text-left py-6'>Contato</h1>
            <nav>
              <ul className="text-white">
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Fale Conosco</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Agendar Horário</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left flex items-center gap-3'>
                 <img className='w-5' src={Telefone} alt="Telefone" />(00) 0000-0000</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left flex items-center gap-3'>
                <img className='w-5' src={WhatsApp} alt="WhatsApp" /> (00) 0000-0000</li>
                <li className='cursor-pointer hover:text-primary my-2 lg:text-left'>Trabalhe conosco</li>
              </ul>
            </nav>
          </article>
        </section>
        <section className='bg-footer py-10 flex justify-around text-white'>
          <p className='hidden lg:flex'>Bueno Beauty © Todos Direitos Reservados </p>
          <p className='hidden lg:flex'>
            Conheça nossos <span className='text-segundary cursor-pointer hover:underline'>Termos de Uso &nbsp;</span> e&nbsp;<span className='text-segundary cursor-pointer hover:underline'>Política de Privacidade</span>.
          </p>
          <p>Desenvolvido por <span className='text-segundary font-bold hover:underline cursor-pointer'>RuanDevz</span></p>
        </section>
      </main>
    </div>
  )
}

export default Footer;
