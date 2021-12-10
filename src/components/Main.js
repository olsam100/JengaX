import React from "react";
import styled from "styled-components";

const MainStyles = styled.main`
    width: 100%;
    /* height: 1374px; */
    height: 1300px;
    padding-top: 29px;
    @media (min-width: 320px) and (max-width: 480px){
        padding-top: 0px;
    }
    section{
        display: grid;
        width: 86%;
        height: 380px;
        margin: 0 107.15px 0 96px;
        grid-template-columns: 347px auto;
        grid-gap: 72.15px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        section{
            width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            /* height: 700px; */
            height: auto;
        }   
    }
    .share-collection{
        display: grid;
        grid-template-rows: repeat(2, 165px);
        grid-row-gap: 50px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-collection{
            display: flex;
            flex-direction: column;
        }
    }
    
    .idea-text{
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Graphik';
        font-weight: 400;
        padding-left: 108px;
        line-height: 100px;
        color: #445b78;
    }
@media (min-width: 320px) and (max-width: 480px){
    .idea-text{
        padding-left: 30px;
        line-height: 50px;
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
    .buttonwrapper{
        width: 228.12px;
        height: 33px;
        border-radius: 100px;
        margin-top: 32px;
    }
    button{
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
    span{
        padding-left: 8px;
        padding-top: 2px;
    }
    .group{
        display: grid;
        grid-template-columns: repeat(3, 241.85px);
        justify-content: space-between;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }   
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
    aside{
        width: 819.25px;
        height: 231px;
        margin: 60px 107px 0 515px;
        background-color: #5974AA;
    }
    @media (min-width: 320px) and (max-width: 480px){
        aside{
            width: 90%;
            margin: 0 auto;
        }
    }

    .group215{
        width: 743px;
        height: 152px;
        padding: 47px 30px 32px 30px;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group215{
            width: 100%;
            padding: 20px 30px;
        }   
    }
    .supporting{
        font-size: 16px;
        line-height: 30px;
        font-style: normal;
        font-weight: 400;
        color: #ffffff;
        text-transform: none;
        font-family: 'Graphik';
        padding-left: 0px;
        padding-right: 85.02px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .supporting{
            padding-right: 0;
        }
    }
    .group211{
        display: flex;
        flex-direction: column;
    }
    .email-navigation{
        width: 743px;
        display: flex;
        justify-content: space-between;
        margin-top: 52px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .email-navigation{
            width: 100%
        };
    }
    .emailAddress{
        font-size: 24px;
        line-height: 26.4px;
        font-style: normal;
        font-weight: 500;
        color: #ffffff;
        text-transform: none;
        font-family: 'Graphik';
        padding-left: 0px;
    }
    .line2{
        width: 740.1px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        margin-top: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .line2{
            width: 100%;
        }
    }
    .testimonial{
        width: 86%;
        margin: 0 108px 0 96px;
        display: grid;
        grid-template-columns: 347px 804px;
        grid-column-gap: 73px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .testimonial{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }   
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-idea{
            padding: 0 30px;
        }
        
    }
    .text-venture{
        padding-top: 80px;
        padding-left: 96px;
        color: #445B78;
        font-size: 26px;
        text-transform: uppercase;
        font-family: 'Graphik';
        font-weight: 500;
        line-height: 100px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .text-venture{
            width: 100%;
            padding: 0;
            /* line-height: 30px; */
            margin-top: 30px;
        }   
    }
    .group214{
        display: grid;
        grid-template-columns: repeat(4, 150px);
        grid-template-rows: 150px;
        justify-content: space-between;
        grid-column-gap: 68px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group214{
            grid-template-rows: repeat(2, 150px);
            grid-template-columns: repeat(2, 150px);
            grid-row-gap: 34px;
            grid-column-gap: 20px;
            justify-content: space-evenly;
            /* margin: 0 auto; */
        }   
    }
    .rectangle{
        background-color: #C4C4C4;
    }
`;

function Main(){
    return <MainStyles>
        <p className="idea-text">Ideas</p>
        <section>
            <div className="share-idea">
                <p className="share-paraph">
                    We share ideas to help you scale your business
                </p>
                <div className="buttonwrapper">
                    <button className="secondary">See more of our ideas
                        <span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.50001L0 2.20712L1.41421 0.792908L6.12132 5.50001L1.41421 10.2071L0 8.79291L3.29289 5.50001Z" fill="#5974AA"/>
                            </svg>
                        </span>
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
                                <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
                        </div>
                    </div>
                    <div className="group203">
                        <div className="heading3">Sell</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
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
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
                        </div>
                    </div>
                    <div className="group203">
                        <div className="heading5">Sell</div>
                        <div className="heading-text">
                            <h3>Building your API</h3>
                            <p className="text">The rise of RESFUL APIs has been met by a rise in tools for reating, testing, and mana...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <aside>
            <div className="group215">
                <p className="supporting">Sign up for the JengaX ideas, a monthly digest of what we're thinking, learning and looking to do next</p>
                <div className="group211">
                    <div className="email-navigation">
                        <p className="emailAddress">Email address</p>
                        <span className="navigation">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.4" clip-path="url(#clip0_262_1355)">
                                <path d="M0.811523 12C0.811523 14.3734 1.49152 16.6935 2.76551 18.6668C4.03951 20.6402 5.85029 22.1783 7.96886 23.0866C10.0874 23.9948 12.4187 24.2324 14.6677 23.7694C16.9168 23.3064 18.9827 22.1635 20.6042 20.4853C22.2257 18.8071 23.3299 16.6689 23.7773 14.3411C24.2247 12.0133 23.9951 9.60051 23.1175 7.4078C22.24 5.21509 20.7539 3.34094 18.8472 2.02236C16.9406 0.703788 14.6989 0 12.4058 0C9.33191 0.00370522 6.38494 1.26918 4.21136 3.51881C2.03779 5.76845 0.815103 8.81854 0.811523 12H0.811523ZM14.0551 6.791L18.4029 11.291C18.5841 11.4785 18.6858 11.7328 18.6858 11.998C18.6858 12.2632 18.5841 12.5175 18.4029 12.705L14.0551 17.205C13.8729 17.3872 13.6288 17.488 13.3755 17.4857C13.1221 17.4834 12.8798 17.3782 12.7007 17.1928C12.5215 17.0074 12.4199 16.7566 12.4177 16.4944C12.4155 16.2322 12.5129 15.9796 12.6889 15.791L14.9749 13.424C15.0078 13.3889 15.03 13.3446 15.0388 13.2965C15.0476 13.2485 15.0426 13.1988 15.0244 13.1537C15.0062 13.1086 14.9756 13.0699 14.9364 13.0426C14.8972 13.0153 14.8511 13.0005 14.8039 13H6.60866C6.35241 13 6.10666 12.8946 5.92546 12.7071C5.74427 12.5196 5.64247 12.2652 5.64247 12C5.64247 11.7348 5.74427 11.4804 5.92546 11.2929C6.10666 11.1054 6.35241 11 6.60866 11H14.8039C14.8517 11.0001 14.8985 10.9855 14.9383 10.958C14.9781 10.9305 15.0091 10.8915 15.0275 10.8457C15.0458 10.8 15.0506 10.7497 15.0412 10.7011C15.0318 10.6525 15.0088 10.608 14.9749 10.573L12.6889 8.205C12.5129 8.0164 12.4155 7.7638 12.4177 7.5016C12.4199 7.2394 12.5215 6.98859 12.7007 6.80318C12.8798 6.61777 13.1221 6.5126 13.3755 6.51033C13.6288 6.50805 13.8729 6.60884 14.0551 6.791Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_262_1355">
                                <rect width="23.1886" height="24" fill="white" transform="translate(0.811523)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    <div className="line2"></div>
                </div>
            </div>
        </aside>

        <p className="text-venture">Venture</p>

        <div className="testimonial">
            <div className="share-idea">
                <p className="share-paraph">
                We invest in you to help you scale your business
                </p>
                <div className="buttonwrapper">
                    <button className="secondary">Read about our venture
                        <span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.50001L0 2.20712L1.41421 0.792908L6.12132 5.50001L1.41421 10.2071L0 8.79291L3.29289 5.50001Z" fill="#5974AA"/>
                            </svg>
                        </span>
                    </button>
                </div>
                
            </div>
            <div className="group214">
                <div className="rectangle"></div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
                <div className="rectangle"></div>
            </div>
        </div>
                
    </MainStyles>
}

export default Main;