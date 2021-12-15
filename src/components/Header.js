import React from "react";
import styled from "styled-components";
// import Nav from "./Nav";
import {Image} from 'react-bootstrap';
import backgroundImage from '../images/image1.svg';


const HeaderStyles = styled.header`
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;
    position: relative;

.header-items{
    max-width: 1224px;
    display: grid;
    grid-template-columns: 442px 890px;
    padding-top: 64px;
    padding-bottom: 18px;
    margin: 0 auto;
}
@media (min-width: 320px) and (max-width: 480px){
    .header-items{
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    }
}
@media (min-width) and (max-width: 480px){
    .wordwrapper{
        width: 480px;
        height: 150px;
        display: flex;
    }
}
.capital{
    font-size: 87px;
    color: #03060B;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
    line-height: 100px;
    letter-spacing: -4%;
    opacity: 100%;
    /* padding-top: 104px; */
    display: block;
    position: absolute;
    max-width: 660px;
}
.imagebox{
    max-width: 922px;
}
@media (min-width: 320px) and (max-width: 480px){
    .capital{
        font-size: 36px;
        line-height: 54px;
        padding: 0 50px;
        width: 480px;
        text-align: center;
        left: 0;
    }
    img{
        max-width: 100%;
        padding-top: 50px;
    }
}

`;

function Header(){
    return <HeaderStyles>
                {/* <Nav /> */}
                
                <div className="header-items">
                    <div className="wordwrapper">
                        <p className="capital">We're a capital firm designed for a new era.</p>
                    </div>
                    <div className="imagebox">
                         <Image src={backgroundImage} fluid alt="JengaX brand logo"/>
                    </div>
                </div>
                    
    </HeaderStyles>
}
export default Header;