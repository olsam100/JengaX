import React from 'react';
import HeaderIdea from '../components/HeaderIdea';
import styled from 'styled-components';
import Footer from '../components/Footer';
import ButtonGroup from '../components/ButtonGroup';
import Information from '../components/Information';
import { graphql } from 'gatsby';


const MainStyles = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin: 0 auto;
`;

const FooterStyles = {
    marginTop: '100px'
}

export const query = graphql`
    query{
        posts:  allSanityPost {
                nodes {
                    name
                    id
                    slug {
                        current
                        }
                    postTitle
                    description
                    category {
                        id
                        name
                        slug {
                            current
                        }
                    image {
                        asset {
                            gatsbyImageData
                        }
                    }
                    }
                }
    }
    }
 `;
// gatsbyImageData
// ...GatsbySanityImageFluid


function Ideas(props){
    return <MainStyles>
    <HeaderIdea />
    <ButtonGroup />
    <Information />
    <Footer style={{FooterStyles}}/>
    </MainStyles>
  }
  
  export default Ideas;

