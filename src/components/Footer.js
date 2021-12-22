import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {Image} from 'react-bootstrap';
import logo from '../images/jengaxLogo.svg';

const FooterStyles = styled.footer`
    margin: 0 auto;
    padding-bottom: 36px;
    width: 100%;
    max-width: 1224px;
    padding-top: 60px;
    align-items: center;
    @media (max-width: 1024px){
        width: 100%;
        /* margin: 0 auto; */
    }
    @media (min-width: 481px) and (max-width: 768px){
        /* width: 90%; */
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
    }
    
    .footer-container{
        display: flex;
        justify-content: space-between;
        max-width: 1224px;
        margin: 0 auto;
    }
    .left,
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .footer-container{
            flex-direction: column;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .footer-container{
            width: 86%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .footer-container{
            display: flex;
            flex-direction: column;
        }
    }
    .left,
    .right{
        display: flex;
        align-items: center;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .left,
        .right{
            width: 90%;
            margin: 0 auto;
            justify-content: space-between;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .right{
            width: 100%;
            display: flex;
        }
        .one{
            width: 50%;
        }
        .build{
            width: 50%;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        
        .right{
            width: 90%;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }
        .left{
            width: 320px;
            margin: 0 auto;
        }
        li{
            padding-left: 0px;
        }
    }
    ul{
    /* width: 320px; */
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    }
    li{
        text-decoration: none;
        list-style: none;
        display: flex;
        align-items: center;
    }
    .idea-text{
        padding-left: 60px;
        display: flex;
        align-self: center;
    }
    .venture-text{
        padding-left: 33px;
        display: flex;
        align-self: center;
    }
    .brand-link{
        font-family: 'BC Kakao';
        font-weight: 900;
        font-style: normal;
        font-size: 36px;
        /* font-size: 48px; */
        color: #03060B;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .brand-link{
            font-size: 24px;
        }
        .idea-text{
            padding-left: 30px;
        }
        .venture-text{
            padding-left: 20px;
        }
    }
    .ideas-link,
    .venture-link{
        font-size: 18px;
        font-family: 'Graphik';
        font-weight: 500;
        color: #03060B;
        text-align: center;
    }
    .one{
        display: flex;
        align-items: center;
        padding-right: 20px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        
       
    }
    @media (min-width: 320px) and (max-width: 480px){
       .one{
           padding-right: 0;
       } 
       
    }

    .build{
        font-size: 16px;
        font-weight: 400;
        font-family: 'Graphik';
        color: #445b78;
        display: flex;
        align-items: center;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .right{
            width: 80%;
            /* margin-top: 20px; */
            margin: 0 auto;
            padding-top: 20px;
        }
        .build,
        .contact-mail{
            font-size: 12px;
            text-align: center;
        }
        .two{
            margin-top: 20px;
        }
    }
    span{
        padding-left: 5px;
        padding-top: 3px;
    }
    .contact-mail{
        font-size: 16px;
        font-family: 'Graphik';
        font-weight: 500;
        color: #03060B;
        padding-left: 15px;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        ul{
            width: 80%;
            margin: 0 auto;
            display: flex;
        }
        .one{
            margin: 0 auto;
            text-align: center;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        ul{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
    @media (min-width: 769px) and (max-width: 1024px){
        ul{
            width: 100%;
            display: flex;
            margin: 0 auto;
            justify-content: space-between;
            padding-bottom: 30px;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        .logo{
            width: 100%;
            height: 100%;
        }
    }

    @media (min-width: 1024px){
        .logo{
            height: 100%;
            width: 80px;
        }
    }
    img{
        margin-top: 12px;
    }
`;

function Footer(){
    return <FooterStyles>
        <div className="footer-container">
            <div className="left">
                <ul>
                    <li>
                        <Link to="/" className="brand-link">
                            <Image src={logo} fluid alt="JengaX logo" className='logo'/>
                        </Link>
                    </li>
                    <li className="idea-text">
                        <Link to="/ideas" className="ideas-link">Ideas</Link>
                    </li>
                    <li className="venture-text">
                        <Link to="/venture" className="venture-link">Venture</Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="one">
                    <p className="build">Let’s build together 
                        <span>&#9758;</span>
                    </p>
                </div>
                <div className="two">
                    <p className="contact-mail">pitch@jengax.world</p>
                </div>
                
            </div>
        </div>
        </FooterStyles>;
}

export default Footer;