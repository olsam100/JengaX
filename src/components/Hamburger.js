import React, {useState} from "react";
import styled from "styled-components";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';



function Hamburger(){
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        
    }
    return (
    <styledBurger>
        <div />
        <div />
        <div />
    </styledBurger>
    )
}
export default Hamburger;