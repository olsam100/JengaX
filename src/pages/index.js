import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';

const MainStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 2090px;
`;

function HomePage(){
  return <MainStyles>
    <GlobalStyles />
    <Header />
    <Main />
    <Footer />
  </MainStyles>
}

export default HomePage;

