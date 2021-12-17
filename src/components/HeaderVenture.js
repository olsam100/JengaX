import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import {Image} from 'react-bootstrap';
import backgroundImage from '../images/image1.svg';


const HeaderStyles = styled.header`
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 1024px){
        width: 100%;
    }

.header-items{
    max-width: 1224px;
    display: grid;
    grid-template-columns: 442px 890px;
    padding-top: 64px;
    padding-bottom: 18px;
    margin: 0 auto;
}
@media (min-width: 769px) and (max-width: 1024px){
    .header-items{
        width: 100%;
        grid-template-columns: 30% 70%;
    }
}
@media (min-width: 481px) and (max-width: 768px){
    .header-items{
        height: 540px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 0;
        /* grid-template-columns: 30% 70%; */
    }
}
@media (min-width: 320px) and (max-width: 480px){
    .header-items{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    }
}
@media (min-width: 320px) and (max-width: 480px){
    .wordwrapper{
        width: 100%;
        height: 150px;
        display: flex;
    }
}
.capital{
    font-size: 50px;
    color: #03060B;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
    line-height: 75px;
    letter-spacing: -4%;
    opacity: 100%;
    padding-top: 104px;
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    max-width: 660px;
}
@media (min-width: 769px) and (max-width: 1024px){
    .capital{
        max-width: 400px;
        padding-left: 60px;
        font-size: 24px;
        padding-top: 50px;
        line-height: 40px;
    }
}
@media (min-width: 481px) and (max-width: 768px){
    .capital{
        font-size: 18px;
        line-height: 54px;
        /* max-width: 400px; */
        padding-top: 50px;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
}
@media (min-width: 320px) and (max-width: 480px){
    .capital{
        font-size: 16px;
        line-height: 36px;
        max-width: 100%;
        padding: 0 20px;
        text-align: center;
    }
}
.imagebox{
    max-width: 922px;
}
@media (min-width: 769px) and (max-width: 1024px){
    .imagebox{
        width: 100%;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    img{

        max-width: 100%;
    }
}
@media (min-width: 481px) and (max-width: 768px){
    img{
        max-width: 100%;
    }
}
@media (min-width: 320px) and (max-width: 480px){
    img{
        max-width: 100%;
    }
}

`;

function HeaderVenture(){
    return <HeaderStyles>
                <Nav />
                
                <div className="header-items">
                    <div className="wordwrapper">
                        <p className="capital">
                            We are Builders backing Builders from developing markets to scale in today's global economy
                        </p>
                    </div>
                    <div className="imagebox">
                         <Image src={backgroundImage} fluid alt="JengaX brand logo"/>
                    </div>
                </div>
                    
    </HeaderStyles>
}
export default HeaderVenture;