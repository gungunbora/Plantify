import React from 'react'


const AboutPlantCard = ({image,title,description}) => {
  return (
    <div className='bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition'>
      
      <img src={image} alt={title} className='w-32 h-32 mx-auto object-contain' />

      <h3 className='mt-4 text-xl font-semibold text-[#3f6b4f]'>{title}</h3>

      <p className='mt-2 text-sm text-[#4b5f52]'>{description}</p>
     

    </div>
  );
};

export default AboutPlantCard
