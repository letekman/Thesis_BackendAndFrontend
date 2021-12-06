import { Checkbox, FormControlLabel } from "@mui/material";
import React, { ChangeEvent, ReactElement, useState} from "react";
import styled from "styled-components";
import { ImgContainer } from "./app";
import { buttonColor, seaThemeColor } from "./configuration";
import { CenterWrapper } from "./commonComponents";


type LoadImageProps = {
    setImgContainer: (f: ImgContainer) => void
    imgPath: string
    consent: boolean
    setConsent: (b: boolean) => void
}

type DragAndDropAreaProps = {
    isFileOver: boolean;
}

const DragAndDropArea = styled.div<DragAndDropAreaProps>`
    background-color: ${seaThemeColor};
    height:250px;
    width:250px;
    color: black;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    text-align: center;
    opacity: ${props => props.isFileOver ? '0.5' : '1'};
    border: ${props => props.isFileOver ? '5px solid black' : ''};
    margin: 0 0px 20px 0;
`;

const ButtonLoadImage = styled.label`
    display:inline-block;
    background-color:${buttonColor};
    padding:0.3em 1.2em;
    margin:0.6em 0.3em 0.3em 0;
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
        box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
        transform: translateY(4px);
    }

    &:hover {
        border-color: rgba(255,255,255,1);
    }
`;

const DisableDragOver = styled(CenterWrapper)`
    padding: 0;
    pointer-events: none;
    width: inherit;
    height: inherit;
`;

const Img = styled.img`
    width: inherit;
    height: inherit;
`;

const InvisibleInput = styled.input`
    display: none;
`;

const ErrorParagraph = styled.p`
    color: red;
`;


export const LoadImage = (props: LoadImageProps): ReactElement => {
    const [isCorrectType, setIsCorrectType] = useState(true);
    const [isFileOver, setIsFileOver] = useState(false);

    const possibleTypes = ['image/jpeg', 'image/png', 'image/bmp'];

    const loadFileHandler = (f: File) => {
        if(possibleTypes.indexOf(f.type) === -1){
            setIsCorrectType(false);
            props.setImgContainer({src: "", file: null});
            return;
        }
        setIsCorrectType(true);
        props.setImgContainer({src: URL.createObjectURL(f) as string, file: f});
    }

    const onDragHandler = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onDragEnterHandler = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsFileOver(true);
        }
    }

    const onDragLeaveHandler = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFileOver(false);
    }

    const onDropHandler = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            e.dataTransfer.clearData();
            loadFileHandler(e.dataTransfer.files[0]);
        }
        setIsFileOver(false);
    }

    const handleInputFilesUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            loadFileHandler(e.target.files[0])
        }
    }


    return (
        <>
            <DragAndDropArea isFileOver={isFileOver} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} onDrop={onDropHandler} onDragOver={onDragHandler}>
                <DisableDragOver>
                    {props.imgPath === "" ? <><p>Drag and drop to upload image in jpg, bpm or png format </p> {!isCorrectType && <ErrorParagraph>INCORECT FILE TYPE</ErrorParagraph>} </>: <Img src={props.imgPath}></Img>}
                </DisableDragOver>
            </DragAndDropArea>
            <InvisibleInput accept={possibleTypes.join(", ")} type="file" id="img" onChange={handleInputFilesUpload} />
            <FormControlLabel control={<Checkbox checked={props.consent} onChange={(e) => props.setConsent(e.target.checked)} />} label="I consent to save uploaded photo in the database"></FormControlLabel>
            <ButtonLoadImage htmlFor="img">Click to upload image</ButtonLoadImage>
        </>
    )
}