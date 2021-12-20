import React from "react";
import styled from "styled-components";

const PortfolioStyles = styled.article`
    max-width: 1224px;
    margin: 0 auto;
    padding-top: 60px;
    /* height: 310px; */
    display: grid;
    grid-template-rows: 150px;
    justify-content: space-between;
    grid-template-columns: 35% 65%;
@media (min-width: 769px) and (max-width: 1024px){
    width: 96%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 40px;
    /* height: auto; */
}
@media (min-width: 481px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    /* height: 200px; */
    margin-top: 400px;
}
@media (min-width: 320px) and (max-width: 480px){
    display: flex;
    flex-direction: column;
    margin-top: 400px;
}
    .left{
        display: flex;
        align-self: center;
    }
    .folio-text{
        font-size: 26px;
        line-height: 100px;
        font-style: normal;
        letter-spacing: -4%;
        font-weight: 600;
        font-family: 'Graphik';
        align-self: center;
    }

    .boxes{
        display: grid;
        grid-template-columns: repeat(4, 150px);
        justify-content: space-between;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .boxes{
            grid-template-columns: repeat(4, 120px);
            grid-template-rows: 120px;
            grid-column-gap: 20px;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .boxes{
            width: 84%;
            margin: 0 auto;
            grid-template-columns: repeat(2, 150px);
            grid-template-rows: repeat(2, 150px);
            grid-row-gap: 50px;
            grid-column-gap: 50px;
            justify-content: space-between;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .boxes{
            margin: 0 auto;
            grid-template-columns: repeat(2, 120px);
            grid-template-rows: repeat(2, 120px);
            grid-gap: 20px;
            /* grid-row-gap: 20px; */
            /* grid-column-gap: 50px; */
            /* justify-content: space-between; */
            /* grid-column-gap: 20px; */
        }
    }

    .rectangle{
        background-color: #C4C4C4;
    }
`;

function Portfolio(){
    return <PortfolioStyles>
        <div className="left"><p className="folio-text">Our portfolio</p></div>
        <div className="boxes">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
        </div>
    </PortfolioStyles>
}
export default Portfolio;