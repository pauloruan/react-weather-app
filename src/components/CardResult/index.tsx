import React, { useContext } from 'react';
import SearchContext from '../../context/GlobalContext';
import Container from './style';

export default function CardResult(): React.FunctionComponentElement<{}> {
  const {
    name,
    tempCelsius,
    region,
    country,
  } = useContext(SearchContext);

  return (
    <Container>
      <h1>{`${tempCelsius} °C`}</h1>
      <h2>{name}</h2>
      <h3>{`${region}, ${country}`}</h3>
    </Container>
  );
}
