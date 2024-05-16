import React from 'react';
import Button from '../Button/Button';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Lavada Especial',
            description: 'Lavanda para cabelos especiais',
            price: 150
        },
        {
            id: 2,
            title: 'Corte Feminino',
            description: 'Corte Feminino para cabelos especiais',
            price: 70
        },
        {
            id: 3,
            title: 'Escova',
            description: 'Escova para cabelos especiais',
            price: 80
        },
        {
            id: 4,
            title: 'Luzes',
            description: 'Luzes para cabelos especiais',
            price: 120
        },
        {
            id: 5,
            title: 'Entrelace',
            description: 'Entrelace para cabelos especiais',
            price: 150
        },
        {
            id: 6,
            title: 'Coloração',
            description: 'Coloração para cabelos especiais ',
            price: 200
        },
        {
            id: 7,
            title: 'Penteado Festa',
            description: 'Selagem para cabelos especiais',
            price: 250
        },
        {
            id: 8,
            title: 'Selagem',
            description: 'Selagem para cabelos especiais',
            price: 300
        }
    ];

    return (
        <div>
            <section data-aos="fade-right"  className='flex justify-center items-center flex-col pt-56 pb-32'>
                <p className='text-button font-primary font-bold text-3xl'>Nossos</p>
                <h1 className='text-primary font-primary font-bold text-6xl'>Serviços</h1>
            </section>
            <section data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     className='flex justify-around flex-wrap items-center max-w-screen-2xl mx-auto'>
                {services.map(service => (
                    <div key={service.id} className='text-center p-12 my-5 border border-1 border-solid borderdiv rounded-md	'>
                        <h1 className='text-primary text-2xl font-bold font-primary pb-2'>{service.title}</h1>
                        <p>{service.description}</p>
                        <p className='font-bold font-segundary'>R$ {service.price},00</p>
                        <div className='flex justify-center mr-10 pt-3'>
                            <Button childreen='Agendar Horário »' className='bg-segundary py-3 px-6 ml-12 font-primary text-white hover:text-button rounded'></Button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Services;
