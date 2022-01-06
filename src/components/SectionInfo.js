import React from "react";
import styled from "styled-components";

const SectionStyle = styled.div`
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
        color: #667085;
        font-size: 18px;
        line-height: 28px;
        font-family: "Graphik";
        font-weight: 400;
        padding-top: 16px;
    }
`;

function SectionInfo(){
    return (
        <SectionStyle>
            <h1>Software and tools</h1>
            <p>Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.</p>
        </SectionStyle>
    )
}

export default SectionInfo;