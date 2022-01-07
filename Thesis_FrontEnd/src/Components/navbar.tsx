
import React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./commonComponents";
import { seaThemeColor } from "./configuration";


type NavbarProps = {
    setIntroPageState: (b: boolean) => void;
    introPageState: Boolean;
}

const StyledImg = styled.img`
    position: absolute; 
    right: 0;
 

    height:9%;


`;




const NavbarContainer = styled.div`
    background-color: ${seaThemeColor};
    height: 10%;
    display:flex;
    justify-content: center;
    align-items: center;
`;


const HomepageButton = styled(Button)`
    position: absolute; 
    left: 10px;
    border-radius:0;
`;

const StyledP = styled.div`



`;

export const Navbar = (props: NavbarProps): ReactElement => {
    return (
        <NavbarContainer>
            {!props.introPageState && <HomepageButton onClick={() => props.setIntroPageState(true)}>Go to startpage</HomepageButton> }
            <StyledP>Application for detecting the rethinopathy based on the fundus image</StyledP>
            <StyledImg src="./assets/pl_logo.png"></StyledImg>
        </NavbarContainer >
    )
}

