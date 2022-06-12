import React, { useContext } from 'react';
import SearchContext from '../../context/GlobalContext';
import getAPI from '../../utils/getAPI';
import Container from './style';

export default function SearchBar(): React.FunctionComponentElement<{}> {
  const {
    search,
    setSearch,
    setTempCelsius,
    setRegion,
    setCountry,
    setName,
  } = useContext(SearchContext);

  const handleChange = (): void => {
    getAPI(search)
      .then((response) => {
        setTempCelsius(response.data.current.temp_c);
        setRegion(response.data.location.region);
        setCountry(response.data.location.country);
        setName(response.data.location.name);
      });
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Enter your city here..."
        onChange={(event): void => setSearch(event.target.value)}
      />
      <button
        type="button"
        onClick={() => handleChange()}
      >
        Search
      </button>
    </Container>
  );
}
