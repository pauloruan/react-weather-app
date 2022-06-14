import React, { useContext } from 'react';
import SearchContext from '../../context/GlobalContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card404 from '../../components/Card404';
import PageContainer from './style';

export default function NotFound(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);
  return (
    <PageContainer
      theme={theme}
    >
      <Header />
      <Card404 />
      <Footer />
    </PageContainer>
  );
}
