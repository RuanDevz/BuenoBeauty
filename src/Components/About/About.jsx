import React from 'react'
import Beauty from '../../assets/ImagesAbout/Beauty.png'
import salon from '../../assets/ImagesAbout/salon.svg'
import cutting from '../../assets/ImagesAbout/cutting.svg'
import shampoo from '../../assets/ImagesAbout/shampoo.svg'
import toiletries from '../../assets/ImagesAbout/toiletries.svg'
import isolated from '../../assets/ImagesAbout/isolated.png'

const About = () => {
  return (
    <div className='flex justify-between mx-auto'>
        <div className='font-primary max-w-lg mx-auto pt-20'>
            <h1 className='text-button font-bold'>SOBRE A</h1>
            <h2 className='text-primary text-4xl font-medium pb-6'>BUENO BEAUTY</h2>
            <p>Na Bueno Beauty, acreditamos que cada cliente merece atenção especial e cuidado individualizado. Nossa missão é criar looks deslumbrantes que não apenas realcem a beleza natural de nossos clientes, mas também aumentem sua confiança e autoestima. Do corte de cabelo perfeito ao tratamento de cor impecável, estamos aqui para superar suas expectativas e deixá-lo(a) sentindo-se incrível.</p>
            <div className='grid grid-cols-2'>
    <div className='py-8 flex items-center'>
        <img src={salon} alt="salon" className="mr-4" />
        <div>
            <h3 className='font-bold'> Preparação</h3>
            <p>Preparação inicial para melhor cuidado e resultado final do seu cabelo. </p>
        </div>
    </div>
    <div className='py-8 flex items-center'>
        <img src={cutting} alt="cutting" className="mr-4" />
        <div>
            <h3 className='font-bold'>Aparação</h3>
            <p>Corte com eficácia, aparação feita com todo o cuidado</p>
        </div>
    </div>
    <div className='py-8 flex items-center'>
        <img src={shampoo} alt="shampoo" className="mr-4" />
        <div>
            <h3 className='font-bold'>Lavagem capilar</h3>
            <p>Lavagem completa no seu cabelo para remoção de impurezas</p>
        </div>
    </div>
    <div className='py-8 flex items-center'>
        <img src={toiletries} alt="toiletries" className="mr-4" />
        <div>
            <h3 className='font-bold'>Produtos essenciais</h3>
            <p>Melhores produtos para a beleza do seu cabelo</p>
        </div>
    </div>
</div>

        </div>
        <div>
            <img src={Beauty} alt="Beauty" />
        </div>
        <div>
            <img className='absolute left-0 translate-y-3/4' src={isolated} alt="isolated" />
        </div>
    </div>
  )
}

export default About