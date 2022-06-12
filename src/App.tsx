import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import RoutesApp from './RoutesApp';
import { SearchProvider } from './context/GlobalContext';

export default function App(): React.FunctionComponentElement<{}> {
  return (
    <div>
      <SearchProvider>
        <GlobalStyles />
        <RoutesApp />
      </SearchProvider>
    </div>
  );
}
