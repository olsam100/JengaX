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




@media (min-width: 320px) and (max-width: 480px){
    .header-items{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        height: auto;
        justify-content: space-between;
        margin-top: 30px;
    }
}
@media (min-width: 481px) and (max-width: 768px){
    .header-items{
        width: 100%;
        grid-template-columns: 30% 70%;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    .header-items{
        width: 100%;
        grid-template-columns: 30% 70%;
    }
}
@media (min-width: 1024px){
    .header-items{
    max-width: 1224px;
    display: grid;
    grid-template-columns: 442px 890px;
    padding-top: 64px;
    padding-bottom: 18px;
    margin: 0 auto;
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
    font-size: 87px;
    color: #03060B;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
    line-height: 100px;
    letter-spacing: -4%;
    opacity: 100%;
    padding-top: 104px;
    display: block;
    position: absolute;
    max-width: 660px;
}
@media (min-width: 769px) and (max-width: 1024px){
    .capital{
        max-width: 520px;
        padding-left: 100px;
        font-size: 60px;
        padding-top: 50px;
        line-height: 70px;
    }
}
@media (min-width: 481px) and (max-width: 768px){
    .capital{
        font-size: 48px;
        line-height: 54px;
        max-width: 400px;
        padding-top: 50px;
        padding-left: 50px;
    }
}
@media (min-width: 320px) and (max-width: 480px){
    .capital{
        font-size: 24px;
        line-height: 36px;
        max-width: 100%;
        padding: 0 20px;
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


@media (min-width: 320px) and (max-width: 480px){
    .capital{
        font-size: 36px;
        line-height: 54px;
        /* padding: 0 50px; */
        width: 480px;
        text-align: center;
        left: 0;
    }
    img{
        max-width: 100%;
        /* padding-top: 50px; */
        /* margin-top: 50px; */
    }
}
@media (min-width: 481px) and (max-width: 768px){
    img{
        max-width: 100%;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    img{

        max-width: 100%;
    }
}

`;

function Header(){
    return <HeaderStyles>
                <Nav />
                
                <div className="header-items">
                    <div className="wordwrapper">
                        <p className="capital">We are Builders backing Builders</p>
                    </div>
                    <div className="imagebox">
                         <Image src={backgroundImage} fluid alt="JengaX brand logo"/>
                    </div>
                </div>
                    
    </HeaderStyles>
}
export default Header;