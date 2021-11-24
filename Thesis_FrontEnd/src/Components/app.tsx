import React, { ReactElement, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Navbar } from "./navbar";
import { primaryColor } from "./configuration";
import { LoadImage } from "./loadImage";
import { NeuralNetwork } from "./neuralNetwork";
import { CenterWrapper } from "./styledComponents";
import { ModelName } from "./contentProvider";



const HorizontalWrapper = styled(CenterWrapper)`
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 100px;
`;

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0%;
        min-height: 100%;
        background-color: ${primaryColor};
        color: #FFFFFF;
    }

    #root {
        height: 100vh;
        font-family: "Lucida Console", "Courier New", monospace;
    }    
`;

export type ImgContainer = {
    file: File | null
    src: string
}

const App: React.FunctionComponent = (): ReactElement => {

    const sendInferRequest = (modelName: ModelName) => {
        const formData = new FormData();
        if (imgContainer.file === null) {
            return;
        }
        formData.append("file", imgContainer.file);
        formData.append("consent", consent.toString());

        return fetch("http://localhost:5000/evaluate/" + modelName, {
            method: "post",
            body: formData
        }).then(response => response.json()).catch(error => {
            console.error(error);
        });
    }

    const [imgContainer, setImgContainer] = useState<ImgContainer>({ src: "", file: null });
    const [consent, setConsent] = useState(false);

    return (
        <>
            <GlobalStyles />
            <Navbar></Navbar>
            <CenterWrapper>
                <LoadImage setImgContainer={setImgContainer} imgPath={imgContainer.src} consent={consent} setConsent={setConsent} ></LoadImage>
            </CenterWrapper>
            <HorizontalWrapper>
                <NeuralNetwork modelName={ModelName.model_1} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
                <NeuralNetwork modelName={ModelName.model_2} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
                <NeuralNetwork modelName={ModelName.model_3} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
            </HorizontalWrapper>
        </>
    )
};
export default App;