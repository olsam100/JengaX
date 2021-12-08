import React from 'react';
import HeaderIdea from '../components/HeaderIdea';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ButtonGroup from '/Users/ola/jenga-x/src/components/ButtonGroup.js'
import Information from '../components/Information';


const MainStyles = styled.main`
    width: 100%;
    height: 2600px;
    
`;

function Ideas(){
    return <main>
    <HeaderIdea />
    <ButtonGroup />
    <Information />
    <Footer />
    </main>
  }
  
  export default Ideas;