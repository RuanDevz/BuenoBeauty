import React from 'react'
import logo from '../../assets/ImagesFooter/Logo.svg'
import Telefone from '../../assets/ImagesHeader/Telefone.png'
import WhatsApp from '../../assets/ImagesHeader/Whatsapp.png'

const Footer = () => {
  return (
    <div>
      <main className='bg-black flex  flex-col mt-32'>
        <section className='flex justify-around items-center text-center gap-48 py-24 '>
          <article className='flex flex-col max-w-lg'>
            <img className='w-72'  src={logo} alt="logo" />
            <p className='text-white pt-10 font-segundary text-left'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </article>
          <article>
            <h1 className='text-segundary font-primary text-xl text-left pb-6'>Empresa</h1>
            <nav>
              <ul>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Sobre nós</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Serviços</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Profissionais</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Trabalhe conosco</li>
              </ul>
            </nav>
          </article>
          <article>
            <h1 className='text-segundary font-primary text-xl text-left pb-6'>Serviços</h1>
            <nav>
              <ul>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Lavada Especial</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Corte Feminino</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Escova</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Luzes</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Mais Serviços</li>
              </ul>
            </nav>
          </article>
          <article>
            <h1 className='text-segundary font-primary text-xl text-left pb-6'>Contato</h1>
            <nav>
              <ul>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Fale Conosco</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2'>Agendar Horário</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2 flex gap-3'>
                 <img className='w-5' src={Telefone} alt="Telefone" />(00) 0000-0000</li>
                <li className='text-white text-left cursor-pointer hover:text-primary my-2 flex gap-3'>
                <img className='w-5' src={WhatsApp} alt="WhatsApp" /> Trabalhe conosco</li>
              </ul>
            </nav>
          </article>
        </section>
        <section className='bg-footer py-10 flex justify-around text-white'>
          <p>Bueno Beauty © Todos Direitos Reservados </p>
          <p>Conheça nossos <span className='text-segundary'>Termos de Uso</span> e <span className='text-segundary'>Política de Privacidade</span>.</p>
          <p>Desenvolvido por <span className='text-segundary font-bold hover:underline cursor-pointer'>RuanDevz</span></p>
        </section>
      </main>
    </div>
  )
}

export default Footer
