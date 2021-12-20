import React from "react";
import styled from "styled-components";
import { Link } from 'gatsby';

const TestimonialStyles = styled.div`
    .testimonial{
        display: grid;
        grid-template-columns: 347px 804px;
        /* grid-column-gap: 73px; */
        justify-content: space-between;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .testimonial{
            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .testimonial{
            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .testimonial{
            display: flex;
            flex-direction: column;
            margin: 0 auto;
        }   
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .share-idea{
            margin: 0 auto;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-idea{
        }
        
    }
    .buttonwrapper{
        width: 228.12px;
        height: 33px;
        border-radius: 100px;
        margin-top: 32px;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .buttonwrapper{
            justify-content: center;
        }
    }
    button,
    a.secondary-link,
    a{
        width: 300px;
        display: flex;
        align-items: center;
        border-color: #ffffff;
        border-image: none;
        background-color: #ffffff;
        color: #5974AA;
        font-size: 18px;
        font-family: 'Graphik';
        font-weight: 600;
        border-width: 0px;
        border-style: unset;
    }
    @media (min-width: 320px) and (max-width: 480px){
        button{
            font-size: 14px;
        }
    }
    
    @media (min-width: 320px) and (max-width: 480px){
        a{
            font-size: 14px;

        }
    }
    .group214{
        display: grid;
        grid-template-columns: repeat(4, 150px);
        grid-template-rows: 150px;
        /* justify-content: space-between; */
        grid-column-gap: 68px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        .group214{
            margin: 0 auto;
            padding-top: 50px;
        }
    }
    @media (min-width: 481px) and (max-width: 768px){
        .group214{
            width: 100%;
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: 100px;
            justify-content: space-between;
            padding-top: 50px;
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .group214{
            grid-template-rows: repeat(2, 100px);
            grid-template-columns: repeat(2, 100px);
            /* grid-row-gap: 34px; */
            /* grid-column-gap: 20px; */
            grid-gap: 20px;
            justify-content: space-between;
            margin-top: 30px;
        }   
    }
    .rectangle{
        background-color: #C4C4C4;
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
    @media (min-width: 769px) and (max-width: 1024px){
        .share-paraph{
            /* font-size: 32px; */
        }
    }
    @media (min-width: 320px) and (max-width: 480px){
        .share-paraph{
            font-size: 24px;
            line-height: 36px;
            text-align: center;
        }   
    }
    @media (min-width: 320px) and (max-width: 480px){
        .secondary{
            width: 100%;
            /* margin: 0 auto; */
            /* margin-right: 20px; */
            margin-left: 20px;
        }   
    }
    
`;

function Testimonial(){
    return <TestimonialStyles>
        <div className="testimonial">
            <div className="share-idea">
                <p className="share-paraph">
                We support founders building a better future for everyone 
                </p>
                <div className="buttonwrapper">
                    <button className="secondary">
                        <Link to="/venture">Learn more about our ventures
                            <span>
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.50001L0 2.20712L1.41421 0.792908L6.12132 5.50001L1.41421 10.2071L0 8.79291L3.29289 5.50001Z" fill="#5974AA"/>
                                </svg>
                            </span>
                        </Link>
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
    </TestimonialStyles>
}
export default Testimonial;