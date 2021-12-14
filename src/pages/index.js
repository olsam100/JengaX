import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const MainStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 2090px;
    /* margin: 0 108px; */
    /* padding-left: 108px; */
   
    @media (min-width: 320px) and (max-width: 480px){
        /* height: 3000px;  */
        /* height: auto; */
      }
`;

function HomePage(){
  return <MainStyles>
   
      <GlobalStyles />
      <Nav />
      <Header />
      <Main />
      <Footer />
    
  </MainStyles>
}

export default HomePage;

