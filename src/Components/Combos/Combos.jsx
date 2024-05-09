import React from 'react'
import '../../../src/index.css'
import Button from '../Button/Button'

const Combos = () => {
  return (
    <main className='flex flex-col w-full pt-36 lg:flex-row'>
        <section data-aos="fade-right" data-aos-offset="900" className='bg-combo1 w-full h-96 m-0 flex flex-col pt-32 '>
          <div className='max-w-xl mx-auto'>
          <p className='text-xl text-white font-bold font-primary'>CONHEÇA NOSSO</p>
            <h1 className='text-4xl text-primary font-bold font-primary pb-4'>DIA DE NOIVA</h1>
            <p className='text-white pb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <Button className='z-10 bg-segundary py-3 px-6 font-primary text-black hover:text-white rounded ' childreen='Mais Informações »'/>
          </div>
        </section>
        <section data-aos="fade-left" data-aos-offset="900" className='bg-combo2 w-full h-96 m-0 flex flex-col pt-32 '>
          <div className='max-w-xl mx-auto'>
          <p className='text-xl text-white font-bold font-primary'>RELAXE NO</p>
            <h1 className='text-4xl text-primary font-bold font-primary pb-4'>SPA ZEN</h1>
            <p className='text-white pb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <Button className='z-10 bg-segundary py-3 px-6 font-primary text-black hover:text-white rounded ' childreen='Mais Informações »'/>
          </div>
        </section>
    </main>
  )
}

export default Combos