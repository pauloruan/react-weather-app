import React, { createContext, useMemo, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import light from '../styles/themes/ligth';

type PropsSearchContext = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  tempCelsius: number;
  setTempCelsius: React.Dispatch<React.SetStateAction<number>>;
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
};

const DEFAULT_VALUE = {
  search: '',
  setSearch: () => {},
  name: '',
  setName: () => {},
  region: '',
  setRegion: () => {},
  country: '',
  setCountry: () => {},
  tempCelsius: 0,
  setTempCelsius: () => {},
  theme: light,
  setTheme: () => {},
};

const SearchContext = createContext<PropsSearchContext>(DEFAULT_VALUE);

export function SearchProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [search, setSearch] = useState(DEFAULT_VALUE.search);
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [region, setRegion] = useState(DEFAULT_VALUE.region);
  const [country, setCountry] = useState(DEFAULT_VALUE.country);
  const [tempCelsius, setTempCelsius] = useState(DEFAULT_VALUE.tempCelsius);
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme);

  const memo = {
    search,
    setSearch,
    name,
    setName,
    region,
    setRegion,
    country,
    setCountry,
    tempCelsius,
    setTempCelsius,
    theme,
    setTheme,
  };

  const value = useMemo(() => memo, [memo]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
