import React from 'react';
import '../../index.css';
import Designer1 from '../../assets/ImagesProfissional/1.png';
import Designer2 from '../../assets/ImagesProfissional/2.png';
import Designer3 from '../../assets/ImagesProfissional/3.png';
import Designer4 from '../../assets/ImagesProfissional/4.png';
import Designer5 from '../../assets/ImagesProfissional/5.png';
import Instagram from '../../assets/ImagesProfissional/Instagram.png';
import Tiktok from '../../assets/ImagesProfissional/Tiktok.png';

const Designers = [
  {
    id: 1,
    img: Designer1,
    name: 'Elena Smith',
    profession: 'Interior Designer'
  },
  {
    id: 2,
    img: Designer2,
    name: 'Lucas Thompson',
    profession: 'Graphic Designer'
  },
  {
    id: 3,
    img: Designer3,
    name: 'Sophia Nguyen',
    profession: 'Fashion Designer'
  },
  {
    id: 4,
    img: Designer4,
    name: 'Oliver Martinez',
    profession: 'Industrial Designer'
  },
  {
    id: 5,
    img: Designer5,
    name: 'Isabella Lee',
    profession: 'Web Designer'
  }
];


const Profissional = () => {
  return (
    <div>
      <main data-aos="fade-right" className='flex'>
        <section className='bg-Profissional'>
          <div className='max-w-xs flex flex-col pt-44 ml-48'>
            <h1 className='font-primary font-bold text-white text-right'>NOSSOS</h1>
            <h1 className='font-primary font-bold text-4xl text-segundary pb-10'>PROFISSIONAIS</h1>
            <p className='font-inter text-white text-right'>Conheça todos nossos experts que br estão a sua disposição para cuidar do seu cabelo.</p>
          </div>
        </section>
        <section>
          <section>
            <h1 className='font-primary font-bold text-4xl text-segundary pb-10 text-center mt-32 lg:hidden'>NOSSOS PROFISSIONAIS</h1>
            <div className="flex flex-wrap justify-around items-center gap-16 pt-32 pl-8">
              {Designers.map((Design) => (
                <div key={Design.id} className="w-48 mb-8">
                  <img src={Design.img} alt={Design.name} className="w-full rounded" />
                  <p className="mt-2">{Design.name}</p>
                  <p className="text-gray-600 text-segundary border-b border-segundary pb-5">{Design.profession}</p>
                  <div className="flex justify-center mt-2 pt-3 lg:justify-start">
                    <img src={Instagram} alt="Instagram" className="w-6 h-6 mr-2" />
                    <img src={Tiktok} alt="Tiktok" className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Profissional;
