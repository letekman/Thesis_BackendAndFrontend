import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button, CenterWrapper } from "./commonComponents";


type IntroPageProps = {
    setIntroPageState: (b: boolean) => void;
}

const ContentFormatter = styled.div`
    text-align: justify;
    text-justify: inter-word;
    width: 60%
`;

const Hyperlink = styled.a`
    font-family: "Lucida Console", "Courier New", monospace;
    text-decoration: none;
    &:link {
        color: #f2c9c9;
      }
      
      /* visited link */
      &:visited {
        color: #f2c9c9;
      }
      
      /* mouse over link */
      &:hover {
        color: #f5baba;
      }
      
      /* selected link */
      &:active {
        color: #f02626;
      }
`;



export const IntroPage = (props: IntroPageProps): ReactElement => {


    return (
        <>
            <CenterWrapper>
                <ContentFormatter>
                    <p>
                        This is an application enabling the user to detect diabetic rethinopathy based on the fundus photography and classify how advanced is the disease using neural network.
                    </p>
                    <p>
                        Diabetic retinopathy is a complication caused by diabetes, disease that leads to the high blood sugar level. As a result, blood vessels in the retina are damaged what can, in worst case, be the root of blindness. According to the American Diabetes Association, diabetic retinopathy is a main cause of blindness within adults in working age group in the United States of America in 2010. Early stages of diabetic retinopathy are not manifested by noticeable symptoms. Signs such as blurred vision, red eyes etc. usually appear when disease is more advanced. Luckily, preventive examinations for diabetics such as fundus examination enables to detect this disease.
                    </p>

                    <p>
                        More information about diabetic rethinoapthy can be found on the following pages:<br/>
                        <Hyperlink target="_blank" rel="noopener noreferrer" href="https://www.nhs.uk/conditions/diabetic-retinopathy/">Diabetic Retinopathy: Overview</Hyperlink><br/>
                        <Hyperlink target="_blank" rel="noopener noreferrer" href="https://www.aao.org/eye-health/diseases/what-is-diabetic-retinopathy">Diabetic Retinopathy: Causes, Symptoms, Treatment</Hyperlink><br/>
                        <Hyperlink target="_blank" rel="noopener noreferrer" href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/diabetic-retinopathy">At a glance: Diabetic Retinopathy</Hyperlink><br/>
                    </p>
                     <p>
                        The application offers the user three types of neural network model to test, each of them is based on the VGG-19 architecture. <br/><br/>
                        Moreover this application supports following features: <br/>
                        - load image using drag & drop functionality or browse from computer <br/>
                        - preview the loaded image <br/>
                        - present the user architecture of the neural network in graphical form <br/>
                        - send the image to the global database for the future reserach work <br/>
                    </p>
                    <p>
                    <br/>
                    <b>The project was created as a diploma project by Bartłomiej Stemborowski</b>

                    </p>

                </ContentFormatter>
                <Button onClick={() => props.setIntroPageState(false)}>Go to the application</Button>
            </CenterWrapper>


        </>
    )
};