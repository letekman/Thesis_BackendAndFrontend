import React, { ReactElement, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./navbar";
import { navyBlueThemeColor } from "./configuration";

import AppPage from "./appPage";
import { IntroPage } from "./introPage";




const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0%;
        min-height: 100%;
        background-color: ${navyBlueThemeColor};
        color: #FFFFFF;
    }

    #root {
        height: 100vh;
        font-family: "Lucida Console", "Courier New", monospace;
    }    
`;


const StartPage: React.FunctionComponent = (): ReactElement => {
    const [introPageState, setIntroPageState] = useState<Boolean>(true);
 
    return (
        <>
            <GlobalStyles />
            <Navbar setIntroPageState={setIntroPageState} introPageState={introPageState} ></Navbar>
            {introPageState ? <IntroPage setIntroPageState={setIntroPageState}></IntroPage> : <AppPage></AppPage>}

        </>
    )
};
export default StartPage;