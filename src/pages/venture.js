import React from 'react';
import Header from '../components/Header';
import MainVenture from '../components/MainVenture';
// import Layout from '../components/Layout';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';


function Venture(){
    return <main>
    <GlobalStyles />
        <Header />
        <MainVenture />
        <Footer />
    </main>
  }
  
  export default Venture;