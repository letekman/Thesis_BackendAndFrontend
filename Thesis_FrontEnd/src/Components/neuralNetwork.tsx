import React, { ReactElement, useEffect, useState } from "react";
import { Button, CenterWrapper } from "./commonComponents";
import Loader from "react-loader-spinner";
import { Box, Modal, Paper } from "@material-ui/core";
import { contentProvider, ModelName } from "./contentProviderFile";
import { NetworkInformationModal } from "./networkInformationModal";
import styled from "styled-components";
import {  orangeThemeColor } from "./configuration";

type NeuralNetworkProps = {
    modelName: ModelName
    isFileLoaded: boolean
    sendInferRequest: (modelName: ModelName) => Promise<Response> | undefined
}

type Response = {
    result: string
}


const StyledPaper = styled(Paper)`
    background-color: rgb(244 162 97 / 86%) !important;
    transition: transform .2s;
    width: 150px;
    height: 150px;
    margin-bottom: 10px;


    &:hover {
        transform: scale(1.1);
    }

`;

const ResultDescription = styled.p`
    white-space: pre-line;
    text-align: center;  
    line-height: 1.2;
    margin: 0;
`;

const NetworkDescription = styled.p`
    white-space: pre-line;
    text-align: center;  
    font-size: 12px;
    line-height: 1.2;
    height: 40px;
`;

const StyledImg = styled.img`
    position: relative;
    bottom: 10px;
    width:100px;
    margin-top: 10px;

`;

const mapResultToText = (result: string) : string => {
    switch(result) {
        case "0":
            return "0 \n No DR"
        case "1":
            return "1 \n Mild"
        case "2":
            return '2 \n  Moderate'
        case "3":
            return "3 \n Severe"
        case "4":
            return "4\n Proliferative DR"
        default:
            return result
    }
}

export const NeuralNetwork = (props: NeuralNetworkProps): ReactElement => {

    const [isInferencing, setIsInfereced] = useState(false);
    const [result, setResult] = useState("");
    const [isModalOpened, setIsModalOpened] = useState(false);

    const infere = async () => {
        setIsInfereced(true);
        setResult("");
        const result = await props.sendInferRequest(props.modelName) as Response;
    
        setIsInfereced(false);
        setResult(result.result);
    }

    const onNetworkImgClickHandler = () => {
        setIsModalOpened(true)
    }

    const handleBackdropClick = () => {
        setIsModalOpened(false);
    }

    useEffect(() => {
        setResult("");
    }, [props.isFileLoaded])

    return (
        <CenterWrapper style={{width: '300px'}}>
            <StyledPaper elevation={15} onClick={onNetworkImgClickHandler} >
                <CenterWrapper>
                    <NetworkDescription> {contentProvider[props.modelName].title}</NetworkDescription>
                    <StyledImg src="./assets/NN_icon.png"></StyledImg>
                </CenterWrapper>
            </StyledPaper>
            {result.length > 0 && <ResultDescription>{mapResultToText(result)}</ResultDescription>}
            <Loader
                visible={isInferencing}
                type="ThreeDots"
                color={orangeThemeColor}
                height={80}
                width={80}
            />
            <Button disabled={!props.isFileLoaded} onClick={infere}>Evaluate</Button>
            <Modal open={isModalOpened} onClose={handleBackdropClick}>
                <Box>
                    <NetworkInformationModal modelName={props.modelName}></NetworkInformationModal>
                </Box>
            </Modal>
        </CenterWrapper>
    )
}