import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    .nav-top{
        padding-top: 66px;
        display: flex;
        width: 85%;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
    }
    .brandlogo{
        font-size: 48px;
        color: #000000;
        font-family: 'BC Kakao';
        font-weight: 900;
        font-style: normal;
    }
    .menu{
        display: flex;
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
    }
    span{
        padding-left: 8px;
        padding-top: 2px;
    }
    
`;



function Nav(){
    return <NavStyles>
        <div className="nav-top">
            <div className="brandlogo">JengaX</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/venture">Venture</Link>
                    </li>
                    <li>
                        <Link to="/ideas">Ideas</Link>
                    </li>
                    <li>
                        <button type="button">Get in touch
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