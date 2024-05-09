import React from 'react';
import aspas from '../../assets/ImagesDepoiments/aspas.svg';
import sarahImg from '../../assets/ImagesDepoiments/sarah.png';
import jessikaImg from '../../assets/ImagesDepoiments/Jessika.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const depoiments = [
    {
        nome: "Sarah Nimbus",
        depoiment: "Adorei o serviço no cabeleireiro! O profissionalismo da equipe e a atenção aos detalhes me deixaram muito satisfeita. Com certeza voltarei!",
        img: sarahImg,
        profissao: "Publicitária"
    },
    {
        nome: "Jéssika Silva",
        depoiment: "Excelente atendimento no salão de beleza! A qualidade dos cortes e dos produtos utilizados é incrível. Recomendo a todos!",
        img: jessikaImg,
        profissao: "Advogada"
    },
    {
        nome: "Mayara Batista",
        depoiment: "Fiquei muito feliz com o resultado no cabeleireiro! O profissional foi super atencioso e conseguiu entender exatamente o que eu queria. Voltarei com certeza!",
        img: sarahImg,
        profissao: "Desenvolvedora Back-end"
    },
    {
        nome: "Juliana Freitas",
        depoiment: "Ótimo serviço no salão de beleza! A equipe foi muito gentil e o resultado final do meu cabelo ficou maravilhoso. Com certeza recomendo!",
        img: jessikaImg,
        profissao: "Contadora"
    },
    {
        nome: "Mirelli Souza",
        depoiment: "Amei a experiência no cabeleireiro! O ambiente era acolhedor e o profissionalismo da equipe foi excepcional. Com certeza voltarei mais vezes!",
        img: sarahImg,
        profissao: "Analista de Sistemas"
    }
]


const Depoiments = () => {

    return (
        <div className='bg-depoiments pb-40'>
            <h1 className='text-segundary font-primary text-4xl text-center font-bold py-10'>DEPOIMENTOS</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {depoiments.map((depoimento, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-evenly px-20'>
                            <div key={index} className='bg-depoimentstwo p-14 rounded max-w-lg mt-16'>
                                <div className='flex items-center mb-8'>
                                    <img className='' src={aspas} alt="" />
                                    <p className='font-segundary ml-4 max-w-xs'>{depoimento.depoiment}</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={depoimento.img} alt={depoimento.nome} className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">{depoimento.nome}</p>
                                        <p className='text-segundary'>{depoimento.profissao}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Depoiments;