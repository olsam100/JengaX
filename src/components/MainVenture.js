import React from "react";
import styled from "styled-components";
import Mission from "./Mission";
import Portfolio from "./Portfolio";
import Team from "./Team";

const MainVentureStyles = styled.main`
    width: 100%;
    padding-top: 50px;
    /* height: 1908px; */
    @media (min-width: 481px) and (max-width: 768px){
        /* display: flex; */
        /* flex-direction: column; */
    }
`;

const styleMission = {
    paddingTop: 120
}

function MainVenture(){
    return <MainVentureStyles>
        <Mission style={styleMission}/>
        <Portfolio />
        <Team />
    </MainVentureStyles>
}

export default MainVenture;