import React, { ReactElement, useState } from "react";
import { CenterWrapper } from "./commonComponents";
import Loader from "react-loader-spinner";
import { Box, Modal, Paper } from "@material-ui/core";
import { contentProvider, ModelName } from "./contentProviderFile";
import { NetworkInformationModal } from "./networkInformationModal";
import styled from "styled-components";
import { buttonColor, orangeThemeColor } from "./configuration";

type NeuralNetworkProps = {
    modelName: ModelName
    isFileLoaded: boolean
    sendInferRequest: (modelName: ModelName) => Promise<Response> | undefined
}

type Response = {
    result: string
}


const Button = styled.button`
  display:inline-block;
    background-color:${buttonColor};
    padding:0.3em 1.2em;
    margin: 15px;
    border:0.16em solid rgba(255,255,255,0);
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font: 5vmin;
    color:#FFFFFF;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align:center;
    transition: all 0.2s;

    &:active {
        box-shadow: box-shadow:
          7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
     
    }

    &:hover {
        border-color: rgba(255,255,255,1);
    }

    &:disabled {
        border:0.16em solid rgba(255,255,255,0);
        background-color: rgba(241, 78, 78, 0.2);
    }`;

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

    return (
        <CenterWrapper style={{width: '300px'}}>
            <StyledPaper elevation={15} onClick={onNetworkImgClickHandler} >
                <CenterWrapper>
                    <NetworkDescription> {contentProvider[props.modelName].title}</NetworkDescription>
                    <StyledImg src="./assets/NN_icon.png"></StyledImg>
                </CenterWrapper>
            </StyledPaper>
            {result.length > 0 && result}
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