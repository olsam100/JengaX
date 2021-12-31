import React from "react";
import styled from "styled-components";
// import { Image } from 'react-bootstrap';
import VectorStroke from '../images/vectorStroke.svg';
import '../components/custom.css';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';


const MainStyles = styled.main`
   
    /* height: 1155px; */
    /* padding-left: 266px; */
    
    
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        height: auto;
        display: flex;
    }
    @media (min-width: 481px) and (max-width: 768px){
        width: 100%;
        height: auto;
        display: flex;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        width: 100%;
    }
    @media (min-width: 1024px){
        padding-top: 60px;
        max-width: 907.44px;
        margin: 0 auto;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group217{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
        }
    }
    
    @media (min-width: 481px) and (max-width: 768px){
        .group217{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 80%;
            margin: 0 auto;
        }
    }
    @media (min-width: 769px) {
        .group217{
            width: 86%;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: repeat(5, 199px);
            grid-row-gap: 40px;
        }
    }

    @media (min-width: 1024px) {
        .group217{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            grid-row-gap: 40px; 
        }
    }

    .group217{
 
    }
        .detailedGroup{
            width: 100%;
        }
@media (max-width: 480px){
    .detailedGroup{
        margin-top: 30px;
    }
}
    @media (max-width: 768px){
    .detailedGroup{
        width: 100%;
    }
}
@media (min-width: 769px) {
   .detailedGroup{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
   }
}

    .groups{
        height: 163px;
        display: flex;
        margin-top: 20px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .groups{
            width: 100%;   
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .groups{
            display: flex;
            flex-direction: column;
            /* height: 300px; */
            justify-content: space-between;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .groups{
            display: flex;
            flex-direction: column;
            height: 320px;
            justify-content: space-between;
            margin-top: 30px;
        }
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .image-card{
            width: 30%;
        }   
        .image-holder{
            max-width: 100%;
            height: 100%;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        .image-holder{
            max-width: 100%;
            height: 100%;
        }
    }
    .image-card{
        max-width: 100%;
        /* height: 100%; */
        width: 208px;
        height: 157px;
        background-color: #000000;
        border-radius: 10px;
        margin: 0 auto;
    }
    
    .line{
        border: 1px solid #445B78;
        opacity: 12%;
        margin-top: 42px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        .line{
            margin-top: 30px;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        .line{
            display: none;
        }
    }
    

    .offline{
        display: flex;
        flex-direction: column;
        margin-left: 37px;
        justify-content: space-between;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .offline{
            width: 70%;
        }   
    }
    @media (min-width: 481px) and (max-width: 768px){
        .offline{
            margin-left: 0;
            height: 220px;
            padding-top: 30px;
        }   
    }
    
    @media (min-width: 320px) and (max-width: 480px){
       .offline{
            margin-left: 0;
            /* height: 320px; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }   
    }
    
    .one{
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        color: #7D809F;
        font-family: 'Graphik';
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    @media (min-width: 320px) and (max-width: 480px){
       .one{
           padding: 5px 0;
           text-align: center;
        }   
    }
    
    .secondary{
    border-radius: 100px;
    border:  1px solid #7D809F;
    color: #7D809F;
    text-transform: uppercase;
    width: 99px;
    height: 20px;
    background-color: #ffffff;
    font-size: 10px;
    font-weight: 400;
    font-family: 'Graphik';
    border-color: unset;
    border-image: none;
    cursor: pointer;
    }
    .making{
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        font-family: 'Graphik';
        color: #03060B;
        line-height: 30px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .making{
            font-size: 18px;
        }   
    }
    @media (min-width: 320px) and (max-width: 480px){
        .making{
            font-size: 14px;
            text-align: center;
        }   
    }
    .four{
        height: 49px;
        width: 650px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .four{
            width: 100%;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .four{
            width: 100%;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        .four{
            width: 100%;
        }
    }
    
    .Africa{
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .Africa{
            font-size: 14px;
            height: 80px;
            width: 100%;
        }   
    }
    @media (min-width: 481px) and (max-width: 768px){
        .Africa{
            font-size: 12px;
            line-height: 18px;
            height: 80px;
            width: 100%;
        }   
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        .Africa{
            font-size: 12px;
            line-height: 18px;
            width: 100%;
            text-align: center;
        }  
    }
    

    .read-more{
        width: 134.63px;
        height: 33px;
        border-radius: 100px;
        border-width: 0;
        border-style: unset;
        color: #000000;
        background-color: unset;
        font-size: 16px;
        font-weight: 600;
        font-family: 'Graphik';
        border-color: unset;
        border-image: none;
        cursor: pointer;
        line-height: 21.12px;
        align-items: center;
    }
    @media (min-width: 481px) and (max-width: 768px){
        .read-more{
            font-size: 12px;
            display: flex;
            align-items: center;
            text-align: center;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .read-more{
            font-size: 12px;
            display: flex;
            justify-self: center;
            align-items: center;
            text-align: center;
        }
        button{
            align-items: center;
            display: flex;
            width: 100%;
            justify-content: center;
            margin: 0 auto;
        }
    }
    /* 
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        height: auto;
        display: flex;
    }
     */
    i{
        padding-left: 8px;
        margin-bottom: 0px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        
    }
    @media (min-width: 320px) and (max-width: 480px){
        i{
            max-width: 100%;
            padding-top: 4px;
        }
        .img-fluid{
            padding-top: 0px;
            margin-top: 0px;
        }
        img{
            /* padding-top: 5px; */
        }
        .stroke{
            margin-bottom: 0;
        }
    }


    .img-book{
        max-width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`;

// const Information = ({data}) => {

// }
function Information(data){
    const query = useStaticQuery(graphql`
        {
            allSanityCategory {
                edges {
                    node {
                        _id
                        _type
                        name
                        slug {
                        current
                        }
                        image {
                        asset {
                            gatsbyImageData
                        }
                        }
                    }
                }
            }
        }
    `);
    
    return <MainStyles>
        <div className="group217">
            <ul>
                {data.allSanityCategory.edges.map(({node: project}) => {
                    <div className="offline" key={project.slug.current}>
                        <button>{project.name}</button>
                    </div>
                })}

            </ul>
                            {/* <div className="detailedgroup">
                    <div className="groups">
                        


                    </div>
                </div> */}
            {/* <div className="detailedGroup">
                <div className="groups">
                    <div className="image-card">

                    </div>
                    <div className="offline">
                        <div className="one"><p>October 21, 2021</p></div>
                        <div className="two">
                            <button type="button" className="secondary">Marketing</button>
                        </div>
                        <div className="three">
                            <p className="making">Making Mobile offline data</p>
                        </div>
                        <div className="four">
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid className="stroke"/></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div> */}
            {/* <div className="detailedGroup">
                <div className="groups">
                    <div className="image-card">

                    </div>
                    <div className="offline">
                        <div className="one"><p>October 21, 2021</p></div>
                        <div className="two">
                            <button type="button" className="secondary">Marketing</button>
                        </div>
                        <div className="three">
                            <p className="making">Making Mobile offline data</p>
                        </div>
                        <div className="four">
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid className="stroke"/></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div> */}
            {/* <div className="detailedGroup">
                <div className="groups">
                    <div className="image-card">

                    </div>
                    <div className="offline">
                        <div className="one"><p>October 21, 2021</p></div>
                        <div className="two">
                            <button type="button" className="secondary">Marketing</button>
                        </div>
                        <div className="three">
                            <p className="making">Making Mobile offline data</p>
                        </div>
                        <div className="four">
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid className="stroke"/></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div> */}
            {/* <div className="detailedGroup">
                <div className="groups">
                    <div className="image-card">

                    </div>
                    <div className="offline">
                        <div className="one"><p>October 21, 2021</p></div>
                        <div className="two">
                            <button type="button" className="secondary">Marketing</button>
                        </div>
                        <div className="three">
                            <p className="making">Making Mobile offline data</p>
                        </div>
                        <div className="four">
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid className="stroke"/></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div> */}
            {/* <div className="detailedGroup">
                <div className="groups">
                    <div className="image-card">

                    </div>
                    <div className="offline">
                        <div className="one"><p>October 21, 2021</p></div>
                        <div className="two">
                            <button type="button" className="secondary">Marketing</button>
                        </div>
                        <div className="three">
                            <p className="making">Making Mobile offline data</p>
                        </div>
                        <div className="four">
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid className="stroke" /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div> */}

            
        </div>
    </MainStyles>
}

export default Information;