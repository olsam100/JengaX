import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';


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
        width: 49px;
        background-color: #1f2354;
        color: #ffffff;
        font-weight: 500;
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
`;

// function countCategories(categories, category){
//     const counts = categories
//     .map(category => category.categories)
//     .flat()
//     .reduce((acc, cat) => {
//          const existingCategory = acc[category.id];
//         if (existingCategory){
//             existingCategory.count += 1
//         }else{
//              acc[category.id] = {
//                  id: category.id,
//                  name: category.name,
//                  count: 1
//             }
//         }
//         return acc; 
//     }, {})
//     const sortedCategories = Object.values(counts).sort((a, b) =>{
//         b.count - a.count
//     })
//     return sortedCategories; 
//     ;
// }

function ButtonGroup(){
    
//     console.log(categories);
// const groupCount = countCategories(categories.nodes);
// console.log(groupCount);
// {groupCount.map(category =>{
     
// })}
    return <ButtonGroupStyles>
        
        <div className="group111">
            <Link><button className="all btn">All</button></Link>
            <Link><button className="product btn">Product Updates</button></Link>
            <Link><button className="marketing btn">Marketing</button></Link>
            <Link><button className="company btn">Company</button></Link>
            <Link><button className="engineering btn">Engineering</button></Link>
        </div>

        {/* <div className="group111">
            <ul>
                <Link>{data.categories.nodes.map((node) =>{
                        <li key={node.slug.content}></li>

                    })}
                </Link>
            </ul>
        </div> */}
    </ButtonGroupStyles>
}

export default ButtonGroup;