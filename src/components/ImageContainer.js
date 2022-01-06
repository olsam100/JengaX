import React from "react";
import { Image } from "react-bootstrap";
import picture from '../images/RichImage.svg';
import styled from "styled-components";

const ImageStyle = styled.div`
@media (min-width: 1025px) and (max-width: 1200px){
    width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 25px; 
}
@media (min-width: 1201px){
    width: 720px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
}
@media (min-width: 1025px) and (max-width: 1200px){
    p{
        align-self: flex-start;
        font-size: 14px;
        font-weight: 400;
        font-family: "Graphik";
        color: #667085;
        padding-top: 16px;
    } 
}
@media (min-width: 1201px){
    p{
        align-self: flex-start;
        font-size: 14px;
        font-weight: 400;
        font-family: "Graphik";
        color: #667085;
        padding-top: 16px;
    }

}
`;


function ImageContainer(){
    return (
        <ImageStyle>
            <div className="imagebox">
            </div>
            <Image src={picture} alt="rich text image"/>
            <p>Image courtesy of Laura Davidson via Unsplash</p>
        </ImageStyle>
    )
}

export default ImageContainer;