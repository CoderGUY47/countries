import React, { use } from 'react'
import PricingCards from '../PricingCards/PricingCards'


const PricingOptions = ({pricingPlansPromise}) => {

    const pricingData = use(pricingPlansPromise)
    console.log(pricingData)
  return (
    <div className='w-[90%] mx-auto mt-10'>
        <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tight text-center mb-6'>Best Price For You</h2>
        <hr className='text-indigo-500/80 h-px w-[90%] mb-10 mx-auto'/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-5 space-y-4">
                {pricingData.map(plans =>
                    <PricingCards
                    key={plans.id} 
                    plans={plans}
                    ></PricingCards>
                )}
        </div>   
    </div>
  )
}

export default PricingOptions