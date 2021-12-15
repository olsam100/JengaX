import React from "react";
import styled from "styled-components";
import Collections from "./Collections";
import Signup from "./Signup";
import Testimonial from "./Testimonial";

const MainStyles = styled.main`
width: 100%;
    max-width: 1224px;
    margin: 0 auto;
    height: 1383px;
    @media (min-width: 320px) and (max-width: 480px){
        padding-top: 0px;
        height: 5500px;
    }
    
    .idea-text{
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Graphik';
        font-weight: 400;
        line-height: 100px;
        color: #445b78;
    }
@media (min-width: 320px) and (max-width: 480px){
    .idea-text{
        padding-left: 30px;
        line-height: 50px;
    }
}
    
    span{
        padding-left: 8px;
        padding-top: 2px;
    }
    
    .text-venture{
        padding-top: 80px;
        color: #445B78;
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Graphik';
        line-height: 100px;
        font-weight: 400;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .text-venture{
            width: 100%;
            padding: 0;
            /* line-height: 30px; */
            margin-top: 30px;
        }   
    }
    
`;

function Main(){
    return <MainStyles>
        <p className="idea-text">Ideas</p>
        <Collections />
        <Signup />

        <p className="text-venture">Venture</p>
        <Testimonial />
        
                
    </MainStyles>
}

export default Main;