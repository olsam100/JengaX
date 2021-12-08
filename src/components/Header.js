import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import backgroundImage from '/Users/ola/jenga-x/src/images/image1.svg';
import {Image} from 'react-bootstrap';


const HeaderStyles = styled.header`
    height: 716px;
    width: 100%;
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;
    position: relative;

.header-items{
    display: flex;
    padding-top: 66px;
}
.wordwrapper{
    width: 660px;
    height: 278px;
}
.capital{
    font-size: 87px;
    color: #03060B;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
    line-height: 100px;
    letter-spacing: -4%;
    padding-left: 108px;
    width: 660px;
    opacity: 100%;
    position: absolute;
    z-index: 0.5;
}

`;

function Header(){
    return <HeaderStyles>
                <Nav />
                <div className="header-items">
                    <div className="wordwrapper"><p className="capital">We're a capital firm designed for a new era.</p></div>
                    <div className="imagebox">
                    <Image src={backgroundImage} fluid alt="JengaX brand logo"/>
                    </div>
                </div>
           
        
       

    </HeaderStyles>
}
export default Header;