import React, { ReactElement } from "react";
import styled from "styled-components";
import { ConfusionMatrix } from "./confusionMatrix";
import { contentProvider, ModelName } from "./contentProvider";



type NetworkInformationModalProps = {
    modelName: ModelName
}

const ContentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(0 0 0 / 70%);
    width:75%;
    max-height: 100%;
    overflow-y: auto;
`;

const CenteredText = styled.p`
    text-align: center;
`;


export const NetworkInformationModal = (props: NetworkInformationModalProps): ReactElement => {

    return (
        <>
            <ContentWrapper>
                {/* TODO: Fetch those data from backend. Retrive statistics about NN model from backend */}
                <CenteredText>{contentProvider[props.modelName].title}</CenteredText>
                <CenteredText>{contentProvider[props.modelName].description}</CenteredText>
                <ConfusionMatrix data={contentProvider[props.modelName].confuison_matrix_data}></ConfusionMatrix>
                <CenteredText>TODO: Add some graphical represtantion</CenteredText>
            </ContentWrapper>
        </>
    )
}
