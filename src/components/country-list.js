import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Country from './country'

const StyledCountryList = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    background: var(--background);
    justify-content: center;
    padding: 4em 2em;
`;

const CountryList = () => {
  const [CountryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCountryList(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <StyledCountryList>
    {
      CountryList.map(({ flag, name, population, region, capital }) => {
        return (
          <Country 
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        )
      })
    }      
    </StyledCountryList>
  )
};

export default CountryList;