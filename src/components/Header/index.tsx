import React, { useContext } from 'react';
import ButtonSwitch from '../ButtonSwitch';
import SearchContext from '../../context/GlobalContext';
import Container from './style';

export default function Header(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);
  return (
    <Container
      theme={theme}
    >
      <h1>Weather App</h1>
      <nav>
        <ButtonSwitch />
        <a href="/contact">Contacts</a>
      </nav>
    </Container>
  );
}
