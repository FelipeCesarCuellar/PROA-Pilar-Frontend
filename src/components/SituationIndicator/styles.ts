import styled from 'styled-components';

interface SIPRops {
    situation: string;
}

const colorHandler = (situation: string, object: string) => {
    if (situation === 'Normal') {
        if (object === 'container') {
            return '#CDFFDB';
        }
        return '#27C100';
    }
    if (situation === 'Atenção') {
        if (object === 'container') {
            return '#FFF1BF';
        }
        return '#C68E00';
    }
    if (situation === 'Desistente') {
        if (object === 'container') {
            return '#FFAEAE';
        }
        return '#FF0000';
    }
    if (object === 'container') {
        return '#D4D4D4';
    }
    return '#6B6B6B';
};

export const Container = styled.div<SIPRops>`
    padding: 4px 8px;
    border-radius: 12px;
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    background-color: ${(props) => colorHandler(props.situation, 'container')};
`;

export const Ball = styled.div<SIPRops>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${(props) => colorHandler(props.situation, 'ball')};
`;

export const Text = styled.div<SIPRops>`
    font-family: PoppinsBold;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: ${(props) => colorHandler(props.situation, 'text')};
`;
