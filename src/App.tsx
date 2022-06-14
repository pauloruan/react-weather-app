import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import SearchContext, { SearchProvider } from './context/GlobalContext';
import GlobalStyles from './styles/GlobalStyles';
import RoutesApp from './routes';
import light from './styles/themes/ligth';
import dark from './styles/themes/dark';

export default function App(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);

  return (
    <div>
      <SearchProvider>
        <ThemeProvider theme={theme.title === 'light' ? light : dark}>
          <GlobalStyles />
          <RoutesApp />
        </ThemeProvider>
      </SearchProvider>
    </div>
  );
}
