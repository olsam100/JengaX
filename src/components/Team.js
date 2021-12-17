import React from "react";
import styled from "styled-components";

const TeamStyles = styled.aside`
    height: 766px;
    width: 100%;
    background-color: #F8FCFF;
    @media (min-width: 481px) and (max-width: 768px){
        /* margin-top: 200px; */
        height: 600px;
    }

    .container{
        max-width: 1224px;
        margin: 0 auto;
        height: 617px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .container{
            height: 600px;
            width: 100%;
            margin-top: 200px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .container{
            height: 600px;
            width: 100%;
            margin-top: 200px;
        }
    }

    .group117{
        display: flex;
        flex-direction: column;
        height: 617px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .group117{
            height: auto;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .group117{
            height: auto;
        }
    }
    .meet-group{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 79px;
        padding-top: 75px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .meet-group{
            height: auto;
        }
    }
    .meet-label{
        font-size: 26px;
        font-weight: 600;
        font-style: normal;
        font-family: 'Graphik';
        letter-spacing: -4%;
        color: #000000;
    }
    .we-need{
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        font-family: 'Graphik';
        padding-top: 4px;
    }
    .cards-group{
        height: 498px;
        display: grid;
        grid-template-columns: repeat(3, 274px);
        grid-column-gap: 100px;
        padding-top: 40px;
        margin: 40px auto 0 auto;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .cards-group{
            margin: 0;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 200px);
            grid-column-gap: 40px;
            justify-content: center;
            align-items: center;
            /* justify-content: space-between; */
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .cards-group{
            display: grid;
            grid-template-columns: 200px;
            justify-content: space-between;

        }
        .card-labels{
            padding: 50px 0;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .cards-group{
            display: grid;
            grid-template-columns: 200px;
            justify-content: space-between;

        }
        .card-labels{
            padding: 50px 0;
        }
    }
    .card-labels{
        display: flex;
        flex-direction: column;
    }
    .cardbox{
        min-width: 200px;
        height: 363px;
        background-color: #4e4e4e;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .cardbox{
            min-width: 120px;
        }
    }

    .detailed-info{
        display: flex;
        flex-direction: column;
        padding-top: 21px;
        height: 114px;
    }
    .position{
        font-size: 12px;
        font-weight: 400;
        color: #43536A;
        font-style: normal;
        font-family: 'Graphik';
    }
    .firstlast{
        font-size: 18px;
        font-weight: 500;
        font-family: 'Graphik';
        color: #1f2354;
        padding-top: 8px;
    }

    .long-words{
        font-size: 14px;
        letter-spacing: -4%;
        font-weight: 400;
        font-style: normal;
        font-family: 'Graphik';
        width: 277px;
        /* height: 64px; */
        padding-top: 12px;
        line-height: 25px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .long-words{
            width: 200px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .long-words{
            width: 200px;
        }
    }
`;

function Team(){
    return <TeamStyles>
        <div className="container">
            <div className="group117">
                <div className="meet-group">
                    <p className="meet-label">Team</p>
                    {/* <p className="we-need">We need to close the skills gap and improve access to</p> */}
                </div>

                
                <div className="cards-group">

                    {/* one card starts here*/}
                    <div className="card-labels">
                        <div className="cardbox"></div>
                        <div className="detailed-info">
                            <p className="position">Position Description</p>
                            <p className="firstlast">First Last</p>
                            <p className="long-words">We need to close the skills gap and improve access to larger markets to create more successful African companies.</p>
                        </div>
                    </div>
                    {/* one card ends here */}
                    <div className="card-labels">
                        <div className="cardbox"></div>
                        <div className="detailed-info">
                            <p className="position">Position Description</p>
                            <p className="firstlast">First Last</p>
                            <p className="long-words">We need to close the skills gap and improve access to larger markets to create more successful African companies.</p>
                        </div>
                    </div>

                    <div className="card-labels">
                        <div className="cardbox"></div>
                        <div className="detailed-info">
                            <p className="position">Position Description</p>
                            <p className="firstlast">First Last</p>
                            <p className="long-words">We need to close the skills gap and improve access to larger markets to create more successful African companies.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </TeamStyles>
}
export default Team;