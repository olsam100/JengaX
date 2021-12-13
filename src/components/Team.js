import React from "react";
import styled from "styled-components";

const TeamStyles = styled.aside`
    height: 766px;
    width: 100%;
    background-color: #F8FCFF;
    margin: 0 auto;

    .container{
        width: 100%;
        margin: 0 auto;
        height: 617px;
    }

    .group117{
        display: flex;
        flex-direction: column;
        height: 617px;
        /* margin-top: 75px; */
        padding-left: 228px;
        padding-right: 190px;
        /* padding-top: 75px; */
    }
    .meet-group{
        display: flex;
        flex-direction: column;
        text-align: center;
        height: 79px;
        padding-top: 75px;
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
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;
        padding-top: 40px;
        margin-top: 40px;
    }
    .card-labels{
        display: flex;
        flex-direction: column;
    }
    .cardbox{
        width: 274px;
        height: 363px;
        background-color: #4e4e4e;
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
`;

function Team(){
    return <TeamStyles>
        <div className="container">
            <div className="group117">
                <div className="meet-group">
                    <p className="meet-label">Meet the team</p>
                    <p className="we-need">We need to close the skills gap and improve access to</p>
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