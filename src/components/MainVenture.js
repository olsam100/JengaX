import React from "react";
import styled from "styled-components";
// import Footer from "./Footer";
import Mission from "./Mission";
import Portfolio from "./Portfolio";
import Team from "./Team";

const MainVentureStyles = styled.main`
    width: 100%;
    height: 1700px;

`;

function MainVenture(){
    return <MainVentureStyles>
        <Mission />
        <Portfolio />
        <Team />
        {/* <Footer /> */}
    </MainVentureStyles>
}

export default MainVenture;