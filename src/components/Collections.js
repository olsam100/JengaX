import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

const CollectionsStyles = styled.div`
    @media (min-width: 769px) and (max-width: 1024px){
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 560px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 650px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        display: flex;
        flex-direction: column;
        /* height: 650px; */
    }
    section{
        width: 100%;
        display: grid;
        height: 380px;
        grid-template-columns: 347px 803.85px;
        justify-content: space-between;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        section{
            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        section{
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        section{
            height: auto;
            display: flex;
            flex-direction: column;
        }   
    }
    @media (max-width: 1024px){
        .share-idea{
            margin: 0 auto;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-idea{
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;
            align-items: center;
            justify-content: center;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        /* .buttonwrapper{
            display: flex;
            justify-content: center;
            width: 100%;
        } */
    }
    .share-collection{
        display: grid;
        grid-template-rows: repeat(2, 165px);
        grid-row-gap: 50px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        .share-collection{
            display: flex;
            flex-direction: column;
            padding-top: 50px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-collection{
            /* max-width: 100%; */
            padding-top: 50px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .share-paraph{
        font-size: 36px;
        letter-spacing: -4%;
        font-weight: 600;
        font-family: 'Graphik';
        text-transform: none;
        padding-left: 0;
        line-height: 50px;
        color: #03060B;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-paraph{
            font-size: 24px;
            line-height: 36px;
        }   
    }
    .group{
        display: grid;
        grid-template-columns: repeat(3, 241.85px);
        grid-column-gap: 40px;
        /* justify-content: space-between; */
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .group{
            text-align: justify;
            margin: 0 auto;
            padding-top: 50px;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .group{
            display: flex;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group{
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            /* justify-content: center; */
            height: 580px;
            justify-content: space-between;
        }   
    }
    @media (min-width: 320px) and (max-width: 480px){
       
    }
    .heading1{
        height: 30px;
        width: 77px;
        border: 2px solid #439EAB;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        color: #439EAB;
    }
    .heading2{
        height: 30px;
        width: 72px;
        border: 2px solid #EF766E;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        color: #EF766E;
    }
    .heading3{
        height: 30px;
        width: 49px;
        border: 2px solid #707AED;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        color: #707AED;
    }
    .heading4{
        height: 30px;
        width: 72px;
        border: 2px solid #439EAB;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        color: #439EAB;
    }
    .heading5{
        height: 30px;
        width: 49px;
        border: 2px solid #EF766E;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        color: #EF766E;
    }
    .heading-text{
        margin-top: 24px;
    }
    h3{
        font-size: 20px;
        color: #03060B;
        font-weight: 600;
        font-family: 'Graphik';
    }
    .text{
        font-size: 16px;
        font-weight: 400;
        font-family: 'Graphik';
        text-transform: none;
        padding-left: 0;
        line-height: 24px;
        color: #445B78;
        padding-top: 12px;
    }
    .buttonwrapper{
        width: 228.12px;
        height: 33px;
        border-radius: 100px;
        margin-top: 32px;
    }
    button,
    a.secondary{
        width: auto;
        display: flex;
        align-items: center;
        border-color: #ffffff;
        border-image: none;
        background-color: #ffffff;
        color: #5974AA;
        font-size: 18px;
        justify-content: center;
        font-family: 'Graphik';
        font-weight: 600;
        border-width: 0px;
        border-style: unset;
    }
    @media (min-width: 320px) and (max-width: 480px){
        button{
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        a.secondary{
            font-size: 14px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .secondary{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .group201,
        .group202,
        .group203{
            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .heading1{

        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group201,
        .group202,
        .group203{
            display: flex;
            /* align-items: center; */
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
        }
    }
`;

function Collections(){
    return <CollectionsStyles>
        <section>
            <div className="share-idea">
                <p className="share-paraph">
                    Our ideas help founders and their teams scale their execution 
                </p>
                <div className="buttonwrapper">
                    <button className="secondary">
                        <Link to="/ideas" className="secondary">Learn more of our ideas
                            <span>
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.50001L0 2.20712L1.41421 0.792908L6.12132 5.50001L1.41421 10.2071L0 8.79291L3.29289 5.50001Z" fill="#5974AA"/>
                                </svg>
                            </span>
                        </Link>
                    </button>
                </div>
            </div>

            <div className="share-collection">
                <div className="group group-206">
                    <div className="group201">
                        <div className="heading1">Launch</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
                        </div>
                    </div>
                    <div className="group202">
                        <div className="heading2">Create</div>
                            <div className="heading-text">
                                <h3>Building lessons</h3>
                                <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing...</p>
                        </div>
                    </div>
                    <div className="group203">
                        <div className="heading3">Sell</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and managing</p>
                        </div>
                    </div>
                </div>
                <div className="group group-207">
                    <div className="group201">
                        <div className="heading1">Launch</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
                        </div>
                    </div>
                    <div className="group202">
                        <div className="heading4">Create</div>
                        <div className="heading-text">
                            <h3>Building lessons</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing...</p>
                        </div>
                    </div>
                    <div className="group203">
                        <div className="heading5">Sell</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and managing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </CollectionsStyles>
    
}

export default Collections;