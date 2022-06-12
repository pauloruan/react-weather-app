import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card404 from '../../components/Card404';
import PageContainer from './style';

export default function NotFound(): React.FunctionComponentElement<{}> {
  return (
    <PageContainer>
      <Header />
      <Card404 />
      <Footer />
    </PageContainer>
  );
}
