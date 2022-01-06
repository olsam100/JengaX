import React from "react";
import HeaderLaunch from '../components/HeaderLaunch';
// import styled from 'styled-components';
import Footer from '../components/Footer';
import ImageContainer from "../components/ImageContainer";
import QuoteContainer from "../components/QuoteContainer";
import Content from "../components/Content";
import SectionInfo from "../components/SectionInfo";
import OtherResources from "../components/OtherResources";


function Launch(){
    return (
        
            <div className="container">
                <HeaderLaunch />
                <ImageContainer />
                <QuoteContainer />
                <Content />
                <SectionInfo />
                <OtherResources />
                <Footer />

            </div>
        
    );
}

export default Launch;


