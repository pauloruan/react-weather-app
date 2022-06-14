import React, { useContext } from 'react';
import SearchContext from '../../context/GlobalContext';
import GIF from '../../assets/little-rain-tornado-rainstorm.gif';
import Container from './style';

export default function Card404(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);
  return (
    <Container
      theme={theme}
    >
      <h1>We can&apos;t find the page you&apos;re looking for.</h1>
      <img src={GIF} alt="Gif-Not-Found" />
    </Container>
  );
}
