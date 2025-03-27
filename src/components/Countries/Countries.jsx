import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {

  const countries = use(countriesPromise);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className='countries'>
        {
          countries.map(country => <Country country={country}></Country>)
        }
      </div>
    </div>
  );
};

export default Countries;