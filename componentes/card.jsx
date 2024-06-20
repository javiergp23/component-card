import React from 'react';
import image1 from '../../iconos/recomendados/Londres.jpg';
import image2 from '../../iconos/recomendados/Madrid.jpg';
import image3 from '../../iconos/recomendados/Miami.jpg';
import image4 from '../../iconos/recomendados/Rio de Janeiro.webp';
import imgValijas from '../../iconos/valijas_gris.png';
import imgEstrella from '../../iconos/star.svg';
import iconoSol from '../../iconos/sun.png';
import iconoLuna from '../../iconos/moon_.svg';
import IconInfo from '../../iconos/info.png';


const Card = ({ image, title, price, days, night, calification}) => (
  <div className="w-[257.55px] h-[399px] rounded-[25.94px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] m-1 bg-[#EFEFEF] transform transition duration-300 hover:scale-105">
    <img className="h-[180px] w-[229px] rounded-[20px] m-3.5 mb-1 text-[20px]" src={image} alt={title} />
    <div className="flex flex-row place-content-between px-4 py-1">
      <div className=" font-bold text-xl text-left">
        {title}
        <p className='text-[10px]'>Descripcion del destino</p>
      </div>
      <div className='w-[60px] p-1'>
        <div className='flex flex-row text-[13px] rounded-[12px] border-[#FAE73E] border-2 px-2'>
          {calification}
          <img className='w-[10px] w-[10px] ml-[5px]' src={imgEstrella} alt="estrella" />
        </div>
      </div>
    </div>
    <div className="flex flex-row px-4 py-2">
      <div className="font-bold text-xl text-center">
        <div className='flex flex-row w-[80px] bg-[#FAF2AE] rounded-[37px]'>
          <div className='flex justify-center content-center w-[50px] h-[30px] bg-[#EAD40B] rounded-[37px] p-1 '>
            <img className="w-[18px] h-[18px]" src={iconoSol} alt="IconSun" />
          </div>
          <div className='w-[40px] rounded-r-[37px]'>
            <p>{days}</p>
          </div>
        </div>
        <div className='flex flex-row w-[80px] bg-[#1E0F5033] rounded-[37px] mt-1'>
          <div className='flex justify-center content-center w-[50px] h-[30px] bg-[#120250BD] rounded-[37px] p-1'>
            <img className='w-[15px] h-[15px] mt-1' src={iconoLuna} alt="IconMoon" />
          </div>
          <div className='w-[40px] rounded-r-[37px]'>
            <p>{night}</p>
          </div>
        </div>
      </div>
      <div className="ml-[50px]">
        <img className='h-[56px] w-[83px]' src={imgValijas} alt="star.svg" />
      </div>
    </div>
    <div className="flex flex-row items-center h-[58px] bg-[#FFFFFF] place-content-between">
      <div className="font-bold text-xl mb-[10px] text-center ml-[20px] h-[40px]">
        <p className='text-[6.5px]'>Precio final por persona</p>
        <div className='flex flex-row items-center'>
          <img className='h-[10px] w-[10px]' src={IconInfo} alt="" />
          <p className='text-xs items-center ml-[6px]'>{price}</p>
        </div>
      </div>
      <div className="flex flex-col items-center font-bold mr-[15px] items-center">
        <button className='flex items-center justify-center h-[24px] w-[76px] rounded-[14px] bg-[#FAE73E] text-[9px]'>
          Siguiente
        </button>
        <p className='flex items-center justify-center text-[6px]'>
          Stock disponible 89/100
        </p>
      </div>
    </div>
  </div>
);

const CardContainer = () => {
  const cards = [
    { image: image1, title: 'Londres', price: "$450", days: 6, night: 5, calification: "4.0"},
    { image: image2, title: 'Madrid', price: "$500", days: 5, night: 4, calification: "4.0" },
    { image: image3, title: 'Miami', price: "$650", days: 3, night: 2, calification: "4.0" },
    { image: image4, title: 'Rio de Janeiro', price: "$425", days: 6, night: 5, calification: "4.0" },
  ];

  return (
    <div className="flex flex-nowrap justify-around">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} price={card.price} days={card.days} night={card.night} calification={card.calification} />
      ))}
    </div>
  );
};

export default CardContainer;