import React from "react";
import styled from "styled-components";

const QuoteStyle = styled.div`
@media (max-width: 320px){
    width: 60%;
    margin: 0 auto;
}
@media (min-width: 320px) and (max-width: 480px){
    width: 60%;
    margin: 0 auto;
}
@media (min-width: 481px) and (max-width: 768px){
    width: 60%;
    margin: 0 auto;
}
@media (min-width: 769px) and (max-width: 1024px){
    margin: 0 auto;
    padding-top: 48px;
}
@media (min-width: 1025px) and (max-width: 1200px){
    margin: 0 auto;
    padding-top: 48px;
}
@media (min-width: 1201px){
    padding-top: 48px;
    width: 720px;
    margin: 0 auto;
}
@media (min-width: 481px) and (max-width: 768px){
    .quotebox{
        margin: 0 auto;
        width: 60%;
        display: flex;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    .quotebox{
        margin: 0 auto;
        width: 60%;
        display: flex;
    }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .quotebox{
        margin: 0 auto;
        width: 720px;
        display: flex;
    }
}
@media (min-width: 1201px){
    .quotebox{
        margin: 0 auto;
        display: flex;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    .quoteline{
        align-items: flex-start;
        border-left: 2px solid #6941C6;
        height: inherit;
    }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .quoteline{
        align-items: flex-start;
        border-left: 2px solid #6941C6;
        /* width: 2px; */
        height: inherit;
    }
}
@media (min-width: 1201px){
    .quoteline{
        align-self: flex-start;
        border-left: 2px solid #6941C6;
        /* width: 2px; */
        min-height: 194px;
    }
}
@media (min-width: 769px) and (max-width: 1024px){
    .quote-word{
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .quote-word{
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
}
    @media (min-width: 1201px){
        .quote-word{
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
@media (min-width: 769px) and (max-width: 1024px){
    .long-word{
            font-family: "Graphik";
            font-weight: 500;
            font-size: 18px;
            line-height: 36px;
            color: #101828;
            font-style: italic;
    }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .long-word{
            font-family: "Graphik";
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            color: #101828;
            font-style: italic;
    }
}
    @media (min-width: 1201px){
        .long-word{
            font-family: "Graphik";
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            color: #101828;
            font-style: italic;
        }
    }
@media (min-width: 769px) and (max-width: 1024px){
    .professional-name{
        font-size: 14px;
        font-weight: 400;
        font-family: "Graphik";
        color: #667085;
        padding-top: 32px;
        }
}
@media (min-width: 1025px) and (max-width: 1200px){
    .professional-name{
        font-size: 16px;
        font-weight: 400;
        font-family: "Graphik";
        color: #667085;
        padding-top: 32px;
        }
}
    
    @media (min-width: 1201px){
        .professional-name{
            font-size: 16px;
            font-weight: 400;
            font-family: "Graphik";
            color: #667085;
            padding-top: 32px;
        }
    }
`;

function QuoteContainer(){
    return (
        <QuoteStyle>
            <div className="quotebox"> 
                <div className="quoteline"></div>
                <div className="quote-word">
                    <p className="long-word">"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained living by voices we shall never hear."</p>
                    <p className="professional-name"> — Olivia Rhye, Product Designer</p>
                </div>

            </div>
        </QuoteStyle>
    )
}

export default QuoteContainer;