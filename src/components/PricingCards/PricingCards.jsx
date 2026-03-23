import React from 'react'
import { FiCheckCircle } from "react-icons/fi";
import Features from '../Features/Features';

const PricingCards = ({plans}) => {
  return (
    // <div className='gap-5 bg-gray-800/70 p-4 rounded-xl h-[500px]'>
    //        <cardHeader className='space-y-4'>
    //         <h4 className='text-4xl md:text-5xl font-bold text-center'>{plans.name}</h4>
    //         <div className="pb-3 flex justify-between items-center">
    //             <h2 className='text-2xl font-bold text-gray-500'>{plans.price + plans.currency}</h2>
    //             <p className='text-gray-500 py-3 rounded-md bg-red-600/50 px-2'>{plans.billing}</p>
    //         </div>
    //        </cardHeader>
    //        <cardBody>
    //         <p className='text-gray-500 text-sm'>{plans.description}</p>
    //         <ul className='flex flex-col space-y-1'>
    //             {plans.features.map(feature => <li key={feature}>{feature}</li>)}
    //         </ul>
    //        </cardBody>           
    // </div>

    <div className={`relative flex flex-col gap-5 p-6 rounded-2xl h-full transition-all duration-300 border
  ${plans.isPopular
    ? 'bg-indigo-600/70 border-0 shadow-xl shadow-indigo-500/30'
    : 'bg-gray-800/70 border-0 hover:border-gray-500'
  }`}>

  {plans.isPopular && (
    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
      <span className="bg-amber-400 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </span>
    </div>
  )}

  <cardHeader className='space-y-4 border-b border-white/10 pb-5'>
    <h4 className={`text-lg font-semibold uppercase tracking-widest
      ${plans.isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
      {plans.name}
    </h4>
    <div className="pb-3 flex items-end gap-1">
      <h2 className='text-5xl font-extrabold text-white'>${plans.price}</h2>
      <span className={`text-lg mb-2 ${plans.isPopular ? 'text-indigo-200' : 'text-gray-400'}`}>
        / {plans.billing}
      </span>
    </div>
  </cardHeader>

  <cardBody className='flex flex-col flex-1 gap-4 bg-white/10 p-4 rounded-xl'>
    <p className={`text-3xl font-bold leading-relaxed ${plans.isPopular ? 'text-indigo-100' : 'text-gray-400'}`}>
      {plans.description}
    </p>
    <Features plans={plans}/>
    <button className={`w-full mt-4 py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer
      ${plans.isPopular
        ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
        : 'bg-indigo-600/70 text-white hover:bg-indigo-500 border-0'
      }`}>
      {plans.cta}
    </button>
  </cardBody>

</div>
  )
}

export default PricingCards