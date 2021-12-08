import React from 'react';
import HeaderIdea from '../components/HeaderIdea';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ButtonGroup from '/Users/ola/jenga-x/src/components/ButtonGroup.js'
import Information from '../components/Information';


const MainStyles = styled.main`
    width: 100%;
    height: 1300px;
    
`;

function Ideas(){
    return <MainStyles>
    <HeaderIdea />
    <ButtonGroup />
    <Information />
    <Footer />
    </MainStyles>
  }
  
  export default Ideas;