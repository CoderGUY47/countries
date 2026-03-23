import React, { use, useState } from 'react'
import Country from './Country/Country';
import './CountryList.css';

const CountryList = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    // state er sathei event handle korle bejal ny
    const handleVisitedCountries=(country)=>{
        console.log("handle visited clicked", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlags = (flag) =>{
        const newVistedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVistedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    // console.log(countries)
  return (
    <>
    <div className=''>
        <h1 className='font-black text-3xl'>CountryList in total: {countries.length}</h1>
        <h3>Total country visited: {visitedCountries.length}</h3>
        <p>Flag visited: {visitedFlags.length}</p>
        <ol>
            {
                visitedCountries.map(country =>
                <li
                key={country.cca3.cca3}
                >
                    {country.name.common}
                </li>)
            }
        </ol>
        <div className="visited-flag-con flex flex-wrap">
            {
                visitedFlags.map((flag, index) =>  //key props error soranor jnne index dilye, key te assign krlei cole jbe
                <img key={index} src={flag} className='p-10 border-e-amber-100'
                >
                </img> )
            }
        </div>

    <div className='grid grid-cols-5 gap-5 countries bg-amber-600 w-full'>
    {
        countries.map(country  => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries ={handleVisitedCountries}
             handleVisitedFlags = {() => handleVisitedFlags(country.flags.flags.png)}
            >
            </Country>)
    }
    </div>
    </div>
    </>
  );
};

export default CountryList