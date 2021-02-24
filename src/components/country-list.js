import React, { useEffect } from 'react';
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
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <StyledCountryList>
      <Country 
        flag='https://image.shutterstock.com/image-illustration/illustration-flag-colombia-260nw-124331698.jpg'
        name='Colombia'
        population={1545468}
        region='America'
        capital='Bogota'
      />
      <Country 
        flag='https://image.shutterstock.com/image-illustration/illustration-flag-colombia-260nw-124331698.jpg'
        name='Colombia'
        population={1545468}
        region='America'
        capital='Bogota'
      />
    </StyledCountryList>
  )
};

export default CountryList;