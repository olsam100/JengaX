import React from "react";
import styled from "styled-components";

const PortfolioStyles = styled.article`
    width: 100%;
    /* margin: 0 auto; */
    padding: 60px 108px 100px 108px;
    height: 310px;
    display: grid;
    grid-template-columns: 170px 696px;
    grid-template-rows: 150px;
    grid-column-gap: 351px;
    justify-content: space-between;

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
        grid-column-gap: 32px;
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