import React from 'react';
import MainVenture from '../components/MainVenture';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import styled from 'styled-components';
import HeaderVenture from '../components/HeaderVenture';


const VentureStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin: 0 auto;
    @media (min-width: 481px) and (max-width: 768px){
    }
`;

function Venture(){
    return <VentureStyles>
    <GlobalStyles />
        {/* <Header /> */}
        <HeaderVenture />
        <MainVenture />
        <Footer />
    </VentureStyles>
  }
  
  export default Venture;