import React from 'react';
import HeaderIdea from '../components/HeaderIdea';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ButtonGroup from '../components/ButtonGroup';
import Information from '../components/Information';


const MainStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin: 0 auto;
`;

const FooterStyles = {
    marginTop: '100px'
}

function Ideas(props){
    return <MainStyles>
    <HeaderIdea />
    <ButtonGroup />
    <Information />
    <Footer style={{FooterStyles}}/>
    </MainStyles>
  }
  
  export default Ideas;

