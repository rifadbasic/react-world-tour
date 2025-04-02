import React, { use , useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const countries = use(countriesPromise);

  

  const handelVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
        }
      </ol>
      <div className='countries'>
        {
          countries.map(country => 
          <Country 
          key={country.cca3}
          handelVisitedCountry={handelVisitedCountry} 
          country={country}>

          </Country>)
        }
      </div>
    </div>
  );
};

export default Countries;