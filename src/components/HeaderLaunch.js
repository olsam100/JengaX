import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Nav from "./Nav";


const HeaderLaunchStyles = styled.header`
    width: 100%;
    background-image: linear-gradient(#B2D9FB, #ffffff);
    display: flex;
    flex-direction: column;

    
/* styling starts here */
.group201{
    display: flex;
    flex-direction: column;
    padding-top: 121px;
}   
.wrapper{
    max-width: 578px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
        align-self: center;
}
.launch{
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    font-family: 'Graphik';
    color: #439EAB;
}
.text{
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    color: #101828;
    font-family: 'Graphik';
    line-height: 40px;
    text-align: center;
    margin: 0;
    padding-top: 9px;
    
}
.sentence{
    font-size: 18px;
    color: #667085;
    line-height: 28px;
    min-width: 720px;
    padding-top: 24px;
}
h1{
    font-size: 30px;
    color: #101828;
    font-weight: 600;
}
.word-group{
    display: flex;
    flex-direction: column;
    width: 720px;
    margin: 0 auto;
    line-height: 28px;
    font-size: 18px;
    font-family: "Graphik";
    color: #667085;
    padding-top: 96px;
}
/* styling ends here */


`;

function HeaderLaunch(props){
    return <HeaderLaunchStyles>
                <GlobalStyles />
                <Nav />
                

                <div className="group201">
                    <div className="wrapper">
                        <div className="heading1">
                            <Link to="/launch" className="launch">Launch</Link>
                        </div>
                        <div className="heading-text">
                            <p className="text">UX review presentations</p>
                        </div>
                    </div>
                </div>
                <div className="word-group">
                    <h1>Introduction</h1>
                    <p className="sentence">Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam 
                        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. 
                        Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus 
                        tincidunt. At feugiat sapien varius id.
                        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat 
                        lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. 
                    </p>
                </div>

               

    </HeaderLaunchStyles>
}
export default HeaderLaunch;