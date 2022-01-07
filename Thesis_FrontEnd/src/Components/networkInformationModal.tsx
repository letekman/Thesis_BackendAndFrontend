import React, { ReactElement } from "react";
import styled from "styled-components";
import { CenterWrapper } from "./commonComponents";
import { ConfusionMatrix } from "./confusionMatrix";
import { contentProvider, ModelName } from "./contentProviderFile";


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

const NNArchitectureDisplay = styled.img`

`;

const NNArchitectureDisplayWrapper = styled(CenterWrapper)`
    margin-top: -75px;
`


export const NetworkInformationModal = (props: NetworkInformationModalProps): ReactElement => {

    return (
        <>
            <ContentWrapper>
                <CenteredText>{contentProvider[props.modelName].title}</CenteredText>
                <NNArchitectureDisplayWrapper>
                    <NNArchitectureDisplay src={contentProvider[props.modelName].archFilePath} alt="Architecture diagram"></NNArchitectureDisplay>
                </NNArchitectureDisplayWrapper>
                <ConfusionMatrix data={contentProvider[props.modelName].confuison_matrix_data}></ConfusionMatrix>
            </ContentWrapper>
        </>
    )
}
