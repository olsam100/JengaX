import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Main from './Main';
import styled from 'styled-components';
import Header from './Header';

const container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    height: 2090px;
`;


function Layout({children}){
    return <div>
        <GlobalStyles />
        <Header />
        {children}
        <Main />
    </div>;
}

export default Layout;
