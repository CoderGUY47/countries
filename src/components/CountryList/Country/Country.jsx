import React from 'react'
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country.name.common);
    //  console.log(country.flags.flags.png);
    // console.log(country);
    // console.log(handleVisitedCountries)

    const [visited, setVisited] = React.useState(false);
    const handleVisited = () =>{
        //setVisited(true);
        //first system : setVisited(visited ? flase : ture)
        //basic system
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        //third system:
        setVisited(!visited)
        handleVisitedCountries(country);
        // console.log("Visited")
    }
  return (
    <>
    <div className={`country ${visited && "country-visited"}`}>
        <img src={country.flags.flags.png} alt="" />
        {/* <img src="{country?.flatg?.flags?.png}" alt="country.flags.flags.png" /> */}
        <h3 className='text-xl font-bold'>Name: {country.name.common}</h3>
        <p>Population: {country.population.population}</p>
        <p>Region: {country.region.region}</p>
        <p>Capital: {country.capital.capital}</p>
        <p>Area: {country.area.area}
            {
                country.area.area > 300000 ? "Big Country" : "Small Country"
            }
        </p>
        <button onClick={handleVisited} className='bg-rose-700 p-2 text-white rounded-lg font-semibold'>
            {visited ? "Visited" : "Not Visited"}
        </button>
        <button onClick={handleVisitedFlags} className='ml-2 bg-red-700 p-2 rounded-lg font-semibold text-white'>Add visited flag</button>
    </div>
    </>
  )
}

export default Country