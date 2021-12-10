import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    width: 85%;
    margin: 0 auto;
    padding-bottom: 56px;
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
    }
    
    .footer-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 364px;
        justify-content: space-between;
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
    li{
        text-decoration: none;
        list-style: none;
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
        font-size: 48px;
        color: #03060B;
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
    }

    .build{
        font-size: 16px;
        font-weight: 400;
        font-family: 'Graphik';
        color: #445b78;
        display: flex;
        align-items: center;
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
    }
`;

function Footer(){
    return <FooterStyles>
        <div className="footer-container">
            <div className="left">
                <ul>
                    <li>
                        <Link to="/" className="brand-link">JengaX</Link>
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
                    <p className="build">Let’s build something amazing together 
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