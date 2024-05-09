import React from 'react';
import Telefone from '../../assets/ImagesHeader/Telefone.png';
import Whatsapp from '../../assets/ImagesHeader/Whatsapp.png';
import Email from '../../assets/ImagesHeader/Email.png';
import Input from '../Input/Input';
import Button from '../Button/Button';
import '../../index.css'

const ContactUs = () => {
  return (
    <div>
      <main  data-aos="fade-down" data-aos-offset="900" className='max-w-screen-xl mx-auto pt-36 flex items-center  flex-col text-center lg:flex-row justify-between'>
        <section >
          <p className='font-primary text-2xl lg:text-left'>Ficou alguma dúvida?</p>
          <h1 className='text-segundary font-primary font-bold text-4xl lg:text-left'>FALE CONOSCO</h1>
          <p className='font-segundary py-10 max-w-lg lg:text-left'>Não perca mais tempo e entre agora em contato com nossa equipe de especialistas. Teremos o maior prazer em ajudar você.</p>
          <div className='flex flex-col gap-6 items-center lg:items-start'>
            <div className='flex items-center gap-5 bg-segundary p-2 rounded-md w-44 '>
              <img src={Telefone} alt="Telefone" />
              <p className='text-white'>(00) 0000-0000</p>
            </div>
            <div className='flex items-center gap-5 bg-segundary p-2 rounded-md  w-44'>
              <img className='w-6 h-6 max-w-full' src={Whatsapp} alt="Whatsapp" />
              <p className='text-white'>(00) 0000-0000</p>
            </div>
            <div className='flex items-center gap-5 mb-16 bg-segundary p-2 rounded-md  w-72'>
              <img className='w-6 h-6 max-w-full' src={Email} alt="Email" />
              <p className='text-white'>contato@buenobeauty.com.br</p>
            </div>
          </div>
        </section>
        <section className='border-2 inputborder p-10 w-custom-width-570 lg:w-custom-width-570'>
          <div className='max-w-xl max-auto '>
            <h1 className='font-primary font-bold text-segundary text-2xl pb-10 text-center lg: text-2xl'>FORMULÁRIO DE CONTATO</h1>
            <div>
            <Input className='custom-width-226 lg:w-full' placeholder='Nome Completo' type='text' />
            </div>
            <div className='flex flex-col gap-5 mt-5 lg:flex-row'>
  <Input className='custom-width-226' placeholder='Celular/WhatsApp' type='number' />
  <Input className='custom-width-226' placeholder='E-mail' type='email' />
</div>
            <div className='pt-5'>
                <textarea name="Mensagem" id="Mensagem" placeholder='Mensagem' className='p-4 border-2 inputborder custom-width-226 focus:outline-none lg:w-full'></textarea>
                <Button childreen='Enviar Mensagem »' className='bg-segundary  py-5 font-primary text-white hover:text-button rounded custom-width-226 mt-10  '/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUs;
