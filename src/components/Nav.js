import React, {useState} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../components/custom.css';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';

import Hamburger from './Hamburger';


const NavStyles = styled.nav`
    .nav-top{
        max-width: 1224px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding-top: 57px;
    }
    .hamburger{
        display: none;
    }
    @media (min-width: 1025px) and (max-width: 1200px){
        .nav-top{
            max-width: 80%;
            margin: 0 auto;
        }
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .nav-top{
            /* max-width: 824px; */
            margin: 0 auto;
            width: 86%;
        }
        .hamburger{
            display: none;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .nav-top{
            width: 86%;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* max-width: 678px; */
            margin: 0 auto;
        }
        .hamburger{
            display: none;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .nav-top{
            padding-top: 30px;
            flex-direction: column;
            width: 100%;
            align-items: center;
            flex-flow: column nowrap;
            background: transparent;
            /* position: fixed;  */
            top: 0;
            right: 0;
            /* height: 500px; */
        }
        .hamburger{
            display: flex;
            padding-top: 50px;
            padding-left: 50px;
            
        }
        /* svg{
            width: 5rem;
            height: 5rem;
            top: rem;
            right: 5rem;
        } */
    }
    @media (max-width: 320px){
        .nav-top{

        }
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
        align-items: center;
    }
    @media (min-width: 320px) and (max-width: 480px){
        menu{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0 auto;
            /* justify-content: space-between; */
        }
    }
    
    ul{
        display: flex;
        align-items: center;
    }
    @media (min-width: 320px) and (max-width: 480px){
        ul{
            display: flex;
            height: 120px;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            margin: 0 auto;
        }
    }
    li{
        list-style: none;
        margin-left: 30px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        li{
            margin-left: 0;
        }
    }
    
    a{
        text-decoration: none;
        display: inline-block;
        font-family: 'Graphik';
        font-weight: 500;
        font-style: normal;
        font-size: 15px;
        /* padding-bottom: 8px; */
        color: #03060B;
        /* border-bottom: 3px solid transparent; */

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
    @media (min-width: 320px) and (max-width: 480px){
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
    // const [bar, setBar ] = useState(false);
    // const showSidebar =  () => setBar(!bar) 
    return (
     <NavStyles>
        {/* <Hamburger /> */}
        {/* className={bar ? 'bars-menu active' : 'bars-menu '} */}
        {/* <div className='hamburger'><FaIcons.FaBars onClick={showSidebar} /></div> */}
        <div className="nav-top" >
            {/* <Link to="#" ><AiIcons.AiOutlineClose /></Link> */}
            <div className="brandlogo">
                <Link to="/" className="brandlogo">JengaX</Link>
                
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/" activeStyle={activeStyle} >Home</Link>
                    </li>
                    <li>
                        <Link to="/ideas" className="link" activeStyle={activeStyle}>Ideas</Link>
                    </li>
                    <li>
                        <Link to="/venture" className="link" activeStyle={activeStyle}>Venture</Link>
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
            
            
            
            
    </NavStyles>
    );
}

export default Nav;