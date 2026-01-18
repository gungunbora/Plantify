import React from 'react'
import AboutPlantCard from './AboutPlantCard'
import { Link } from 'react-router-dom'
 
import bonsai from "../assets/images/bonsai.png";
import monstera from "../assets/images/Monstera_deliciosa.png";
import anthurium from "../assets/images/Pink_Anthurium.png";

 const plantsData =[
  {
    id:1,
    image:bonsai,
    title: "Bonsai",
    description: "A living art form that brings peace and balance.",
  },
   {
      id: 2,
      image: monstera,
      title: "Monstera",
      description: "Tropical plant with bold leaves for modern homes.",
    },
    {
      id: 3,
      image: anthurium,
      title: "Anthurium",
      description: "Elegant plant with vibrant flowers and glossy leaves.",
    },
    {
    id: 4,
    image: monstera,
    title: "snake plant",
    description: "Low maintenance plant with air-purifying qualities.",
  },
 ];

const AboutPlants = ({ full = false }) => {
const visiblePlants = full ? plantsData : plantsData.slice(0,3);
  return (
    <section className='bg-[#eef6ec] py-24 px-20'>

    <div className='text-center max-w-2xl mx-auto mb-16'>
      <h2 className='text-4xl font-bold text-[#3f6b4f] mb-4'>
        About Plants
      </h2>
      <p className='text-[#4b5f52]'>
         Plants are essential for a healthy lifestyle and a greener planet.
          Plantify helps you learn and care for plants easily.
      </p>
    </div>

    {
      full && (
        <div className='max-w-md mx-auto mb-12'>
          <input type="text" 
          placeholder='Search plants...' 
          className='w-full px-5 py-3 rounded-full border focus:ring-2 focus:ring-green-300' />
        </div>
      )
    }

    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
      {visiblePlants.map((plant)=>(
        <AboutPlantCard 
        key={plant.id}
        image={plant.image}
        title={plant.title}
        description={plant.description}/>
      ))
      }
    </div>

      {
        !full && (
          <div className='mt-16 text-center'>
          <Link to="/about" 
          className='inline-block px-8 py-3 rounded-full bg-[#355c44] text-white hover:bg-[#2f4f3b] transition'>
          View more
          </Link>
          </div>
        )
      }
    </section>
  )
}

export default AboutPlants
