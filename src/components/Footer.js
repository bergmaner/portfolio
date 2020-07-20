import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
box-sizing: border-box;
padding: 20px;
font-size: 20px;
background: #e4e4e4;
color: #000;
font-family: 'footerFont';
`;


const Footer = () =>{
    return(
        <Container>COPYWRIGHT &copy; 2020 BY BERG KACPER</Container>
    )
}
export default Footer;