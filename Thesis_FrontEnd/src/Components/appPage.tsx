import React, { ReactElement, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./navbar";
import { evaluateEndpoint, navyBlueThemeColor } from "./configuration";
import { LoadImage } from "./loadImage";
import { NeuralNetwork } from "./neuralNetwork";
import { CenterWrapper, HorizontalWrapper } from "./commonComponents";
import { ModelName } from "./contentProviderFile";





export type ImgContainer = {
    file: File | null
    src: string
}

const AppPage: React.FunctionComponent = (): ReactElement => {

    const sendInferRequest = (modelName: ModelName) => {
        const formData = new FormData();
        if (imgContainer.file === null) {
            return;
        }
        formData.append("file", imgContainer.file);
        formData.append("consent", consent.toString());

        return fetch(evaluateEndpoint + modelName, {
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
            <CenterWrapper>
                <LoadImage setImgContainer={setImgContainer} imgPath={imgContainer.src} consent={consent} setConsent={setConsent} ></LoadImage>
            </CenterWrapper>
            <HorizontalWrapper>
                <NeuralNetwork modelName={ModelName.VGG19_Normal} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
                <NeuralNetwork modelName={ModelName.VGG19_Dropout} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
                <NeuralNetwork modelName={ModelName.VGG19_BatchNormalization} isFileLoaded={imgContainer.file !== null} sendInferRequest={sendInferRequest}></NeuralNetwork>
            </HorizontalWrapper>
        </>
    )
};
export default AppPage;