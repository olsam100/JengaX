import React from "react";
import styled from "styled-components";

const MissionStyles = styled.section`
    width: 85%;
    display: grid;
    grid-template-columns: 1221px;
    grid-template-rows: repeat(3, 120px);
    grid-row-gap: 60px;
    margin: 0 auto;
    

    .group2{
        width: 85%;
        display: grid;
        grid-template-columns: 247px 707px;
        grid-column-gap: 267px;
        align-items: center;
    }
    .group3{
        width: 85%;
        display: grid;
        grid-template-columns: 208px 707px;
        grid-column-gap: 306px;
        align-items: center;
    }
    .group4{
        width: 85%;
        display: grid;
        grid-template-columns: 410px 707px;
        grid-column-gap: 100px;
        align-items: center;
    }
    .group1{
        display: flex;
        align-items: center;
    }
    svg{
        width: 78.41px;
        height: 78.41px;
    }
    .inner-text{
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        font-family: 'Graphik';
        color: #03060B;
        padding-left: 15px;
    }
    .text-parag{
        color: #445B78;
        font-size: 22px;
        line-height: 40px;
        letter-spacing: -4%;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        justify-content: center;
        align-items: center;
        text-align: justify;
    }
    .empty{
        margin-top: 20px;
        width: 1224px;
        border: 1px solid #2F9BFF;
        opacity: 0.2;
    }
    /* .why{
        width: 302px;
    } */
`;

function Mission(){
    return <MissionStyles>
            <div className="group2">
                <div className="group1">
                    <svg width="80" height="82" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.842 79.8419C61.4954 79.8419 79.049 62.2883 79.049 40.6349C79.049 18.9815 61.4954 1.42792 39.842 1.42792C18.1886 1.42792 0.63501 18.9815 0.63501 40.6349C0.63501 62.2883 18.1886 79.8419 39.842 79.8419Z" stroke="#C4C4C4"/>
                        <path d="M37.3371 53.6508C43.9757 53.6508 49.3573 48.2692 49.3573 41.6306C49.3573 34.992 43.9757 29.6104 37.3371 29.6104C30.6985 29.6104 25.3169 34.992 25.3169 41.6306C25.3169 48.2692 30.6985 53.6508 37.3371 53.6508Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                        <path d="M34.6592 42.8998L45.9111 23.4108L57.1631 42.8998H34.6592Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                    </svg>
                    <p className="inner-text">Our mission</p>

                </div>
                <div><p className="text-parag">JengaX is a mission by builders and operators from Africa, backing builders from developing markets to build and scale in today's global economy.</p></div>
            </div>
            <div className="group3">
                <div className="group1">
                    <svg width="80" height="82" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.842 79.8419C61.4954 79.8419 79.049 62.2883 79.049 40.6349C79.049 18.9815 61.4954 1.42792 39.842 1.42792C18.1886 1.42792 0.63501 18.9815 0.63501 40.6349C0.63501 62.2883 18.1886 79.8419 39.842 79.8419Z" stroke="#C4C4C4"/>
                        <path d="M37.3371 53.6508C43.9757 53.6508 49.3573 48.2692 49.3573 41.6306C49.3573 34.992 43.9757 29.6104 37.3371 29.6104C30.6985 29.6104 25.3169 34.992 25.3169 41.6306C25.3169 48.2692 30.6985 53.6508 37.3371 53.6508Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                        <path d="M34.6592 42.8998L45.9111 23.4108L57.1631 42.8998H34.6592Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                    </svg>
                    <p className="inner-text">Our goal</p>

                </div>
                <div><p className="text-parag">Our primary goal in the first phase of this mission is to help Africa founders and startups develop the ideas, skills and access to succeed in global markets.</p></div>
            </div>
            <div className="group4">
                <div className="group1">
                        <svg width="80" height="82" viewBox="0 0 80 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.842 79.8419C61.4954 79.8419 79.049 62.2883 79.049 40.6349C79.049 18.9815 61.4954 1.42792 39.842 1.42792C18.1886 1.42792 0.63501 18.9815 0.63501 40.6349C0.63501 62.2883 18.1886 79.8419 39.842 79.8419Z" stroke="#C4C4C4"/>
                            <path d="M37.3371 53.6508C43.9757 53.6508 49.3573 48.2692 49.3573 41.6306C49.3573 34.992 43.9757 29.6104 37.3371 29.6104C30.6985 29.6104 25.3169 34.992 25.3169 41.6306C25.3169 48.2692 30.6985 53.6508 37.3371 53.6508Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                            <path d="M34.6592 42.8998L45.9111 23.4108L57.1631 42.8998H34.6592Z" fill="#F0F1F3" stroke="#252525" stroke-width="1.5"/>
                        </svg>
                        <p className="inner-text why">Why is it worth doing?</p>

                </div>
                <div><p className="text-parag">We need to close the skills gap and improve access to larger markets to create more successful African companies which in turn create more jobs and economic prosperity for Africans.</p></div>
            </div>
            <div className="empty"></div>
    </MissionStyles>
}

export default Mission;