import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";

const HeaderIdeaStyles = styled.header`
    /* height: 601px; */
    width: 100%;
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;

.header-items{
    display: flex;
    flex-direction: column;
    padding-top: 121px;
}
.group216{
    max-width: 578px;
    height: 227px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}
.informative{
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    color: #03060B;
    font-family: 'Graphik';
    line-height: 40px;
    text-align: center;
    margin: 0;
}
.subscribe{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: #445B78;
    font-family: 'Graphik';
    line-height: 30px;
    text-align: center;
    opacity: 90%;
    padding-top: 24px;
}
p{
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.group193{
    padding-top: 40px;
}
input{
    width: 420px;
    height: 56px;
    border-radius: 6px;
    border: 2px rgba(68, 91, 120, 0.05);
    background-color: #ffffff;
    font-size: 16px;
    color: #445B78;
    padding-left: 15px;
}
input::placeholder{
    color: #445B78;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    font-family: 'Graphik';
}
.btn{
    width: 147px;
    height: 56px;
    border-radius: 6px;
    background-color: #000000;
    margin-left: 11px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 600;
    font-style: normal;
    font-family: 'Graphik';
}

`;

function HeaderIdea(){
    return <HeaderIdeaStyles>
                <GlobalStyles />
                <Nav />
                <div className="header-items">
                    <div className="group216">
                        <p className="informative">Informative ideas to scale your process, team and products</p>
                        <p className="subscribe">Subscribe to our newsletter to get new content as they drop</p>
                        <div className="group193">
                            <input type="email" placeholder="Enter your email"/>
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>
                </div>

    </HeaderIdeaStyles>
}
export default HeaderIdea;