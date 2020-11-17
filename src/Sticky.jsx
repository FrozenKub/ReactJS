import React from "react";
import {Link} from "react-router-dom";


import styled from 'styled-components';

const UpperCorner = styled.div`
    position: absolute;
    top: 0vh;
    right: 5vw;
    width: 5vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const DivMenu = styled.div`
position: absolute;
width: 100bw;
height: 100vh;

`;


const LargerA = styled.a`
font-size: 14pt;
`;


const StickyUp = () => {
    return (
        <>
            <div class="block-stiky">
                <img src="/public/AnFoLogo.png" height="5%" width="5%" alt="Hi"/>
        </div>
            <UpperCorner>
                <LargerA>
                    <Link to="/">Home</Link>
                </LargerA>
            </UpperCorner>
    </>
);
}

export default StickyUp;