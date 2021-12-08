import { createGlobalStyle } from 'styled-components';



const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
:root{

}
html{
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
}
body{
    box-sizing: border-box;
    width: 100%;
    overflow: scroll;
}
ul{
    display: flex;
}
li{
    text-decoration: none;
}
a{
    text-decoration: none;
    font-size: 16px;
}
button{
    border-radius: 100px;
    width: 142px;
    height: 33px;
    background-color: #11253E;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Graphik';
    border-color: #11253e;
    border-image: none;
    cursor: pointer;
}

p{
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
@font-face {
    font-family: 'Graphik';
    src: url();
}

`;

export default GlobalStyles;