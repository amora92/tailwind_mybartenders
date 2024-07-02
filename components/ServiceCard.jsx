// components/ServiceCard.jsx
import React from 'react'

const ServiceCard = ({ title, description, price, features }) => {
  return (
    <div className='service-card'>
      <h3>{title}</h3>
      <p className='description'>{description}</p>
      <p className='price'>Price: {price}</p>
      <ul className='features'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard
