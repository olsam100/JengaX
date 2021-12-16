import React from "react";
import styled from "styled-components";
import Collections from "./Collections";
import Signup from "./Signup";
import Testimonial from "./Testimonial";

const MainStyles = styled.main`
    width: 100%;
    max-width: 1224px;
    margin: 0 auto;
    /* height: 1383px; */
    @media (max-width: 768px){
        max-width: 678px;
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 480px){
        padding-top: 0px;
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
        line-height: 50px;
        text-align: center;
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
    @media (max-width: 768px){
        .text-venture{
            padding-top: 40px;
        }
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