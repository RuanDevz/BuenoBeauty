import React from 'react'
import '../../../src/index.css'
import Button from '../Button/Button'
const Newsletter = () => {
  return (
    <div>
        <div className='bg-Newsletter flex  items-center flex-col pt-12'>
            <p className='text-text font-primary font-bold text-2xl'>ASSINE NOSSA</p>
            <h1 className='font-primary font-bold text-white text-4xl'>NEWSLETTER</h1>
            <p className='text-white font-segundary font-light pt-10'>Cadastre-se para receber gratuitamente nossas promoções diretamente em seu e-mail.</p>
            <div className='flex pt-12 '>
                <input className='font-segundary pl-4 text-2xl w-96 h-14 rounded focus:outline-0' type="text" placeholder='  Informe seu e-email' />
                <Button className='bg-black h-14 py-3 px-6 ml-12 font-primary text-white hover:text-segundary rounded' childreen='Assinar Newsletter »'/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter