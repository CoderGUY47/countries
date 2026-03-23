import React from 'react'
import { FiCheckCircle } from "react-icons/fi";

const Features = ({plans}) => {
  return (
    <div className='flex-1'>
        <ul className='flex flex-col gap-3 flex-1'>
          {plans.features.map((feature, index) => (
            <li key={index} className={`flex items-center gap-2 font-semibold text-xl
              ${plans.isPopular ? 'text-indigo-100' : 'text-gray-300'}`}>
              <FiCheckCircle className={`w-5 h-5 rounded-full flex-shrink-0
                ${plans.isPopular ? 'text-white' : 'text-indigo-400'}`} />
              {feature}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Features