import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeaderStyles = styled.header`
    height: 716px;
    width: 100%;
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;

.header-items{
    display: flex;
    padding-top: 66px;
}
.wordwrapper{
    width: 660px;
    height: 278px;
}
p{
    font-size: 87px;
    color: #03060B;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
    line-height: 100px;
    letter-spacing: -4%;
    padding-left: 108px;
}

`;

function Header(){
    return <HeaderStyles>
                <Nav />
                <div className="header-items">
                    <div className="wordwrapper"><p>We're a capital firm designed for a new era.</p></div>
                    <div className="imagebox">
                    <img src="" alt="image"/>
                    </div>
                </div>
           
        
       

    </HeaderStyles>
}
export default Header;