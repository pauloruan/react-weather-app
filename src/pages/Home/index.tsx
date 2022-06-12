import React, { useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardResult from '../../components/CardResult';
import SearchBar from '../../components/SearchBar';
import SearchContext from '../../context/GlobalContext';
import PageContainer from './style';

export default function Home(): React.FunctionComponentElement<{}> {
  const { country, name } = useContext(SearchContext);
  return (
    <div>
      <PageContainer>
        <Header />
        <SearchBar />
        {
          country && name ? <CardResult /> : null
        }
        <Footer />
      </PageContainer>
    </div>
  );
}
