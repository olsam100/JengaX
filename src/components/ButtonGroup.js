import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';


const ButtonGroupStyles = styled.div`
    @media (max-width: 480px){
        margin: 50px auto 0 auto;
        width: 80%;
        padding-left: 0;
        display: flex;
        padding-top: 20px;
    }
    @media (min-width: 481px) and (max-width: 768px){
        margin: 0 auto;
        width: 80%;
        padding-left: 0;
        display: flex;
    }
    @media (min-width: 769px) and (max-width: 1024px){
        margin: 0 auto;
        width: 80%;
        padding-left: 0;
    }
    @media (min-width: 1024px){
        width: 100%;
        margin: 0 auto;
        padding-left: 165px;
        width: 100%;
        /* padding-top: 80px; */
        max-width: 1224px;
    }

    @media (min-width: 481px) and (max-width: 768px){
        .group111{
            width: 100%;
            margin: 0 auto;
        }
        .btn{
            margin: 10px;
        }

    }
    @media (min-width: 320px) and (max-width: 480px){
        .group111{
            width: 100%;
            margin: 10px auto;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
        }
        .btn{
            margin: 10px;

        }

    }

    .btn{
        font-style: normal;
        font-family: 'Graphik';
        text-align: center;
        border-width: 0px;
        border-style: unset;
        border-radius: 6px;
        font-size: 12px;
        height: 32px;
        margin-left: 0;
    }
    
    .all{
        /* width: 49px;
        background-color: #1f2354;
        color: #ffffff;
        font-weight: 500; */

        width: auto;
        background-color: #ffffff;
        border: 1px solid rgba(125, 128, 159, 1);
        color: rgba(125, 128, 159, 1);
        font-weight: 500;
        margin-left: 11px;
        padding: 0 10px;
    }
    .product{
        width: 127px;
        background-color: #ffffff;
        border: 1px solid rgba(125, 128, 159, 1);
        color: rgba(125, 128, 159, 1);
        font-weight: 500;
        margin-left: 11px;
    }
    .marketing{
        width: 89px;
        background-color: #ffffff;
        border: 1px solid rgba(125, 128, 159, 1);
        color: rgba(125, 128, 159, 1);
        font-weight: 500;
        margin-left: 11px;
    }
    .company{
        width: 87px;
        background-color: #ffffff;
        border: 1px solid rgba(125, 128, 159, 1);
        color: rgba(125, 128, 159, 1);
        font-weight: 500;
        margin-left: 11px;
    }
    .engineering{
        width: 100px;
        background-color: #ffffff;
        border: 1px solid rgba(125, 128, 159, 1);
        color: rgba(125, 128, 159, 1);
        font-weight: 500;
        margin-left: 11px;
    }
    ul{
        display: flex;
    }
    li{
        list-style: none;
    }
    
`;


function ButtonGroup(props){
    const buttons = useStaticQuery(graphql`
        query {
            allSanityCategory  {
                nodes {
                    id
                    title
                } 
            }
        }
    `);
    return (
        <ButtonGroupStyles>
        
        <div className="group111">
            <ul>
                {buttons.allSanityCategory.nodes.map(post => <li key={post.id}>
                    <div className="group111">
                        <Link to={post.title.toLowerCase()}><button className="all btn">{post.title}</button></Link>
                        
                    </div>
                    
                </li>)}
            </ul>

        </div>

        </ButtonGroupStyles>
    )
}

export default ButtonGroup;