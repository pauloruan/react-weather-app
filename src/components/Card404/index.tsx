import React from 'react';
import GIF from '../../assets/little-rain-tornado-rainstorm.gif';
import Container from './style';

export default function Card404(): React.FunctionComponentElement<{}> {
  return (
    <Container>
      <h1>We can&apos;t find the page you&apos;re looking for.</h1>
      <img src={GIF} alt="Gif-Not-Found" />
    </Container>
  );
}
