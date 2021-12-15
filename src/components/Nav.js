import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../components/custom.css';

const NavStyles = styled.nav`
    background-color: #B2D9FB;
    .nav-top{
        max-width: 1224px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding-top: 57px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .nav-top{
            padding-top: 30px;
            flex-direction: column;
            width: 100%;
            align-items: center;
        }
    }
    .brandlogo{
        font-size: 48px;
        color: #000000;
        font-family: 'BC Kakao';
        font-weight: 900;
        font-style: normal;
        /* padding-left: 108px */
    }
    
    .menu{
        display: flex;
        /* padding-right: 109px; */
    }
    @media (min-width: 320px) and (max-width: 480px){
        menu{
            width: 100%;
            /* justify-content: space-between; */
        }
    }
    
    ul{
        display: flex;
        align-items: center;
    }
    li{
        list-style: none;
        margin-left: 30px;
    }
    
    a{
        text-decoration: none;
        display: inline-block;
        font-family: 'Graphik';
        font-weight: 500;
        font-style: normal;
        font-size: 15px;
        padding-bottom: 8px;
        color: #03060B;
        border-bottom: 3px solid transparent;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        letter-spacing: 1%;
        font-style: 600;
        font-family: 'Graphik';
        color: #ffffff;
        border-width: 0px;
        border-style: unset;
    }
    span{
        padding-left: 8px;
        padding-top: 2px;
    }
    .myButton{
        border-radius: 100px;
        width: 142px;
        height: 33px;
        background-color: #11253E;
        color: #ffffff;
        font-size: 15px;
        font-weight: 600;
        font-family: 'Graphik';
        border-color: #11253e;
        border-image: none;
        cursor: pointer;
    }

    
`;

const activeStyle = {
    borderBottom: '3px solid #03060B',
}



function Nav(){
    return <NavStyles>
        <div className="nav-top">
            <div className="brandlogo">JengaX</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/" activeStyle={activeStyle} >Home</Link>
                    </li>
                    <li>
                        <Link to="/venture" className="link" activeStyle={activeStyle}>Venture</Link>
                    </li>
                    <li>
                        <Link to="/ideas" className="link" activeStyle={activeStyle}>Ideas</Link>
                    </li>
                    <li>
                        <button type="button" className="myButton">Get in touch
                        <span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <   path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.49995L0 2.20706L1.41421 0.792847L6.12132 5.49995L1.41421 10.2071L0 8.79285L3.29289 5.49995Z" fill="white"/>
                            </svg>

                        </span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
            
            
            
            
    </NavStyles>;
}

export default Nav;