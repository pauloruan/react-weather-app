import React, { createContext, useMemo, useState } from 'react';

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
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const DEFALUT_VALUE = {
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
  theme: 'light',
  setTheme: () => {},
};

const SearchContext = createContext<PropsSearchContext>(DEFALUT_VALUE);

export function SearchProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [search, setSearch] = useState(DEFALUT_VALUE.search);
  const [name, setName] = useState(DEFALUT_VALUE.name);
  const [region, setRegion] = useState(DEFALUT_VALUE.region);
  const [country, setCountry] = useState(DEFALUT_VALUE.country);
  const [tempCelsius, setTempCelsius] = useState(DEFALUT_VALUE.tempCelsius);
  const [theme, setTheme] = useState(DEFALUT_VALUE.theme);

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
