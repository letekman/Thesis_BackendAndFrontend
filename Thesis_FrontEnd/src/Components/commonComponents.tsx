import styled from "styled-components";

export const CenterWrapper = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3%;
`;

export const HorizontalWrapper = styled(CenterWrapper)`
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 100px;
`;