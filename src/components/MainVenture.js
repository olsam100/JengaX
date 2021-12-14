import React from "react";
import styled from "styled-components";
import Mission from "./Mission";
import Portfolio from "./Portfolio";
import Team from "./Team";

const MainVentureStyles = styled.main`
    padding-top: 50px;
    height: 1908px;
    /* margin: 0 auto; */
    /* max-width: 1224px; */

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