import React from 'react';
import Container from './style';

export default function Footer(): React.FunctionComponentElement<{}> {
  return (
    <Container>
      <p>&copy; Copyright 2022 pr.</p>
      <p>Developed with React a lot of heat.</p>
    </Container>
  );
}
