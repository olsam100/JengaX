import React from 'react';
import HeaderIdea from '../components/HeaderIdea';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ButtonGroup from '../components/ButtonGroup';
import Information from '../components/Information';
import Nav from '../components/Nav';


const MainStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 1939px;
    max-width: 1440px;
    margin: 0 auto;

    /* width: 100%;
    height: 1300px; */
    
`;

const FooterStyles = {
    marginTop: '100px'
}

function Ideas(){
    return <MainStyles>
    <Nav />
    <HeaderIdea />
    <ButtonGroup />
    <Information />
    <Footer style={{FooterStyles}}/>
    </MainStyles>
  }
  
  export default Ideas;