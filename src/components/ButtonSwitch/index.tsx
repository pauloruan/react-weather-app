import React, { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import SearchContext from '../../context/GlobalContext';
import ButtonContainer from './style';
import light from '../../styles/themes/ligth';
import dark from '../../styles/themes/dark';

export default function ButtonSwitch(): React.FunctionComponentElement<{}> {
  const { theme, setTheme } = useContext(SearchContext);

  const toggleTheme = () => (theme.title === 'light' ? setTheme(dark) : setTheme(light));

  return (
    <div>
      <ButtonContainer
        theme={theme}
        type="button"
        onClick={() => toggleTheme()}
      >
        { theme.title === 'light' ? <MdDarkMode /> : <MdLightMode /> }
      </ButtonContainer>
    </div>
  );
}
