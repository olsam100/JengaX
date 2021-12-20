import React, {useState} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../components/custom.css';
import { FaBars } from 'react-icons/fa';



const NavStyles = styled.nav`
@media (min-width: 320px) and (max-width: 480px){
        .nav-top{
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            flex-flow: column nowrap;
            background: transparent;
            /* position: fixed;  */
            top: 0;
            right: 0;
            /* height: 500px; */
            padding-top: 30px;
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
       
    }
@media (min-width: 769px) and (max-width: 1024px){
    .nav-top{
        margin: 0 auto;
        width: 86%;
    }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .nav-top{
        max-width: 80%;
        margin: 0 auto;
    }
}
.nav-top{
    max-width: 1224px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 30px;
}


 
    
    
    @media (max-width: 320px){
        .nav-top{

        }
    }
    
    
    .menu{
        /* display: flex; */
        /* align-items: center; */

        display: none;
    }
    .showItem{            
            display: flex;
    }
    @media (min-width: 480px){

        .menu{            
            display: flex;
            align-items: center;
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
    .hamburger{
        display: block;
        height: 48px;
        /* width: 48px; */
        width: 30%;
    }
    .logo-container{
            width: 100%;
            height: 100%;
            display: flex;
        }
    @media (min-width: 480px){
        .hamburger{
            display: none;
        }
       
    }
    @media (max-width: 480px){
        .brandlogo{
            /* margin-left: 30px; */
            width: 70%;
            margin: 0 auto;
        }
    }
    .brandlogo{
        font-size: 48px;
        color: #000000;
        font-family: 'BC Kakao';
        font-weight: 900;
        font-style: normal;
        /* padding-left: 30px; */
    }
  
         
`;





function Nav(){
const [showItem, setShowItem] = React.useState(false)
const toggleItem = () => setShowItem(!showItem)
    return (
     <NavStyles>

        <div className="nav-top" >

                <div className="logo-container">
                    <div className='hamburger' onClick={toggleItem}>{<FaBars style={{width: '100%', height: '100%'}}/>}</div>
                    
                    <Link to="/" className="brandlogo">JengaX</Link>
                </div>
                <div className='nav-links'>
                    
                    <div className={`menu ${showItem ? "showItem" : ''}`}>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/ideas" className="link">Ideas</Link>
                            </li>
                            <li>
                                <Link to="/venture" className="link" >Venture</Link>
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

        </div>
            
            
            
            
    </NavStyles>
    );
}

export default Nav;