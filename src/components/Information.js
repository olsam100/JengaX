import React from "react";
import styled from "styled-components";
import { Image } from 'react-bootstrap';
import imageBadge from '/Users/ola/jenga-x/src/images/image22.svg';
import VectorStroke from '/Users/ola/jenga-x/src/images/vectorStroke.svg';
import '/Users/ola/jenga-x/src/components/custom.css';


const MainStyles = styled.main`
    padding-top: 60px;
    width: 67%;
    margin: 0 auto;
    height: 1440px;

    .group217{
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(5, 199px);
        grid-row-gap: 82px;
    }

    .detailedGroup{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .groups{
        height: 163px;
        display: flex;
    }
    .line{
        border: 1px solid #445B78;
        opacity: 12%;
    }

    .offline{
        display: flex;
        flex-direction: column;
        margin-left: 37px;
        justify-content: space-between;
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
    .four{
        height: 49px;
        width: 650px;
    }
    .Africa{
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
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
    i{
        padding-left: 8px;
        margin-bottom: 0px;
    }
    
`;

function Information(){
    return <MainStyles>
        <div className="group217">
            <div className="detailedGroup">
                <div className="groups">
                    <div>
                        <Image src={imageBadge} fluid alt="image badge"/>
                        {/* <img src={imageBadge} alt="image badge"/> */}
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
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            <div className="detailedGroup">
                <div className="groups">
                    <div>
                        <Image src={imageBadge} fluid alt="image badge"/>
                        {/* <img src={imageBadge} alt="image badge"/> */}
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
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            <div className="detailedGroup">
                <div className="groups">
                    <div>
                        <Image src={imageBadge} fluid alt="image badge"/>
                        {/* <img src={imageBadge} alt="image badge"/> */}
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
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            <div className="detailedGroup">
                <div className="groups">
                    <div>
                        <Image src={imageBadge} fluid alt="image badge"/>
                        {/* <img src={imageBadge} alt="image badge"/> */}
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
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
            <div className="detailedGroup">
                <div className="groups">
                    <div>
                        <Image src={imageBadge} fluid alt="image badge"/>
                        {/* <img src={imageBadge} alt="image badge"/> */}
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
                            <p className="Africa">Africa has a diverse population of 1.2bn people. According to GSMA, Africa has a diverse population of 1.2bn people. <button type="button" className="read-more">Read more <i><Image src={VectorStroke} fluid /></i></button></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        </div>
    </MainStyles>
}

export default Information;