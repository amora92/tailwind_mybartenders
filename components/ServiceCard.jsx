// components/ServiceCard.jsx

import React from 'react'

const ServiceCard = ({ title, description, price, features, image }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 mb-4'>{description}</p>
      <p className='price'>Price:{price}</p>
      {features && Array.isArray(features) && features.length > 0 && (
        <ul className='features'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      <div className='flex justify-between items-center mt-4'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'>
          Book Now
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
