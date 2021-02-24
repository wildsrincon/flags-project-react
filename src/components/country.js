import React from 'react';
import styled from 'styled-components';

const StyledCountry = styled.div`
  width: 264px;    
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, .03);  
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  } 
  .details {
    padding: 1.5em;
  }
  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: .9em;
    margin-bottom: .5em;
  }
`;

const Country = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <StyledCountry>
      <img src={flag} alt="flag of colombia"/>
      <div className="details">
        <h2>{name}</h2>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Region: </strong>{region}</p>
        <p><strong>Capital: </strong>{capital}</p>
      </div>
    </StyledCountry>
  )
};

export default Country;