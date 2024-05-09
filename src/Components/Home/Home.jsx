import React from 'react'
import backgound from '../../assets/imagesHome/background.png'
import modelo from '../../assets/imagesHome/Modelo.png'
import Button from '../../Components/Button/Button'

const Home = () => {
  return (
    <div className='mx-auto w-screen'>
        <div className='bg-primary flex items-center border-b-6 border-gray-800'>
            <img className=' ml-80 z-10' src={modelo} alt="modelo" />
            <div className=''>
            <h1 className='font-bold text-white  font-primary text-5xl max-w-3xl my-2'>SEUS CABELOS PRECISAM DOS CUIDADOS CERTOS.</h1>
                <p className='text-white font-primary max-w-xl p-5'>"Cuide bem dos seus cabelos" - uma breve lembrança da importância de cuidar dos seus fios com atenção e os produtos certos.</p>
                <Button className='bg-button py-3 px-6 ml-12 font-primary text-white hover:text-segundary rounded' childreen='SAIBA MAIS »' />
            </div>
        </div>
    </div>
  )
}

export default Home