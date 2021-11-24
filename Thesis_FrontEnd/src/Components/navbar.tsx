
import React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import { secondaryColor } from "./configuration";


const NavbarContainer = styled.div`
    background-color: ${secondaryColor};
    height: 8%;
    display:flex;
    justify-content: center;
    align-items: center;
`;


export const Navbar = (): ReactElement => {
    return (
        <NavbarContainer>
            <p>Application for detecting the rethinopathy based on the fundus image</p>
        </NavbarContainer >
    )
}
