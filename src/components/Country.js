import React from 'react';
import styled from 'styled-components';

const StyledCountry = styled.div`
    width: 264px;
    border: 1px solid #ccc;
    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
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
            <h2>{name}</h2>
            <img src={flag} alt="flag of colombia"/>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Region: </strong>{region}</p>
            <p><strong>Capital: </strong>{capital}</p>
        </StyledCountry>
    )
};

export default Country;