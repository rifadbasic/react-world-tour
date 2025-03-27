import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {

  const { name, population, flags , independent } = country;


  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    // if(visited === true){
    //   setVisited(false);
    // }else{
    //   setVisited(true);
    // }
    setVisited(!visited);
  }

  return (
    <div className={`country ${visited && 'visited'}`}>

      <h2>{name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Independent: {independent ? 'free' : 'not free'} </p>
      <button className={`${visited && 'visit-btn'}`} onClick={handelVisited}>{visited ? 'visited' : 'not visited'}</button>
      
    </div>
  );
};

export default Country;