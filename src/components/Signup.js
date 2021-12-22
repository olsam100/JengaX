import React from "react";
import styled from "styled-components";

const SignupStyles = styled.div`
padding-top: 60px;
padding-left: 420px;
@media (max-width: 1024px){
    padding-left: 110px;
    margin: 0 auto;
}
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
    padding-left: 0;
    padding-top: 30px;
}
@media (min-width: 320px) and (max-width: 480px){
    width: 100%;
    padding-left: 0;
    margin: 0 auto;
}
aside{
    height: 231px;
    width: 803px;
    background-color: #5974AA;
}
@media (min-width: 481px) and (max-width: 768px){
    aside{
        max-width: 100%;
    }
}
@media (min-width: 320px) and (max-width: 480px){
    aside{
        width: 100%;
        margin: 0 auto;
    }
}
    .group215{
        height: 152px;
        padding: 47px 30px 32px 30px;
        display: flex;
        flex-direction: column;
        width: 100%;
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
        display: flex;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .supporting{
            padding-right: 0;
            font-size: 12px;
        }
    }
    .group211{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .emailwrapper{
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .email-navigation{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 52px;
        padding-bottom: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .email-navigation{
            width: 100%;
            padding-bottom: 10px;
        }
    }
    i{
        display: flex;
        justify-content: space-between;
        width: 743px;
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
    @media (min-width: 320px) and (max-width: 480px){
        .line2{
            width: 100%;
        }
    }
    input{
        border: 0;
        outline: 0;
        background-color: unset;
        width: 100%;
        font-size: 24px;
        color: #ffffff;
    }
    @media (min-width: 320px) and (max-width: 480px){
        input{
            font-size: 16px;
        }
    }

    input::placeholder{
        color: rgba(255, 255, 255, 0.43);
        font-size: 24px;
        font-family: 'Graphik';
        font-weight: 500;
        margin-top: 20px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        input::placeholder{
            font-size: 16px;
        }
    }
    
`;

function Signup(){
    return <SignupStyles>
        <aside>
            <div className="group215">
                <p className="supporting">Sign up for the JengaX Ideas for insights to create, sell, manage and scale your startup</p>
                <div className="group211">
                    <div className="emailwrapper">
                        <div className="email-navigation">
                                <input type="email" placeholder="Email address" />   
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
                    </div>
                    
                </div>
            </div>
        </aside>
    </SignupStyles>
}

export default Signup;