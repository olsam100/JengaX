import React from "react";
import styled from "styled-components";

const PortfolioStyles = styled.article`
    max-width: 1333px;
    margin: 0 auto;
    padding-top: 60px;
    height: 310px;
    display: grid;
    grid-template-rows: 150px;
    justify-content: space-between;
    grid-template-columns: 35% 65%;

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