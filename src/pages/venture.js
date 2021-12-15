import React from 'react';
import Header from '../components/Header';
import MainVenture from '../components/MainVenture';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import styled from 'styled-components';


const VentureStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 2615px;
    /* max-width: 1440px; */
    margin: 0 auto;
`;

function Venture(){
    return <VentureStyles>
    <GlobalStyles />
        <Header />
        <MainVenture />
        <Footer />
    </VentureStyles>
  }
  
  export default Venture;