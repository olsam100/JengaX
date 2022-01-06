import React from "react";
import styled from "styled-components";

const OtherStyle = styled.div`
    padding-top: 48px;
    width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h1{
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        font-family: "Graphik";
        font-weight: 600;
    }
    p{
        font-size: 18px;
        line-height: 28px;
        color: #667085;
        font-family: "Graphik";
    }
`;

function OtherResources(){
    return (
        <OtherStyle>
            <h1>Other reources</h1>
            <p>Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. 
                Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac 
                ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                Lectus id duis vitae porttitor enim gravida morbi.
                Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                Suspendisse maecenas ac donec scelerisque diam sed est duis purus. 
            </p>
        </OtherStyle>
    )
}

export default OtherResources;