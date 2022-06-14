import React, { useContext } from 'react';
import SearchContext from '../../context/GlobalContext';
import Container from './style';

export default function Footer(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);
  return (
    <Container
      theme={theme}
    >
      <p>&copy; Copyright 2022 pr. | Developed with React a lot of heat.</p>
    </Container>
  );
}
