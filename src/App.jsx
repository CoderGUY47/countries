import { Suspense } from 'react'
import './App.css'
import CountryList from './components/CountryList/CountryList.jsx'
import DaisyNav from './components/CountryList/DaisyNav/DaisyNav.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PricingOptions from './components/PricingOptions/PricingOptions.jsx'
import ResultCharts from './components/ResultCharts/ResultCharts.jsx'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

const pricingPlansPromise = fetch("pricingPlans.json")
.then(res => res.json())

function App() {
  return (
    <>
      {/* <Suspense fallback={<p>Waiting for your message</p>}>
        <CountryList countriesPromise={countriesPromise}></CountryList>
      </Suspense> */}
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
       <Suspense fallback={<span className='loading loading-spinner loading-lg'></span>}>
          <PricingOptions pricingPlansPromise={pricingPlansPromise}></PricingOptions> 
       </Suspense>


       {/* jehetu json call korsi na, ty suspense use kora lgbe name */}
       <ResultCharts></ResultCharts>
      </main>
    </>
  )
}

export default App












  // suspanse er vitore j jinis thkbe, seta load howar adh pojonto kisu jinis dekhano.