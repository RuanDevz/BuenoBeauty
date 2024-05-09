import React from 'react';
import background from '../../assets/imagesHome/background.png';
import modelo from '../../assets/imagesHome/Modelo.png';
import Button from '../../Components/Button/Button';

const Home = () => {
  return (
    <div className='lg:mx-auto w-screen'>
      <div className='bg-primary lg:bg-primary flex flex-col lg:flex-row justify-evenly items-center border-b-6 border-gray-800'>
        <div className=' flex justify-center items-center'>
          <img className=' ' src={modelo} alt="modelo" />
        </div>
        <div className='text-center flex justify-center flex-col py-10'>
          <h1 className=' lg:font-bold text-white font-primary text-5xl max-w-3xl my-2'>SEUS CABELOS PRECISAM DOS CUIDADOS CERTOS.</h1>
          <p className='text-white  text-left mx-auto lg:text-white font-primary max-w-xl p-5'>"Cuide bem dos seus cabelos" - uma breve lembrança da importância de cuidar dos seus fios com atenção e os produtos certos.</p>
          <Button className='bg-button mr-10 mx-auto lg:bg-button py-3 px-6 font-primary text-white hover:text-segundary rounded' childreen='SAIBA MAIS »' />
        </div>
      </div>
    </div>
  );
}

export default Home;
