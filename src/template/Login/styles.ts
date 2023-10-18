import styled from 'styled-components';
import { theme } from 'styles/global';
import * as G from 'styles/global';
import { Button } from '@mui/material';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    padding-left: 100px;
    background-color: ${theme.colors.composition.background};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1120px) {
        justify-content: center;
        padding-right: 100px;
    }
`;

export const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 16px;
    padding-top: 32px;
`;

export const SubtitleBold = styled(G.SubtitleBold)`
    color: ${theme.colors.onSurface.highEmphasis};
    margin-top: 32px;
`;

export const StandardAuth = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 32px;
    align-items: center;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

export const Line = styled.div`
    background-color: ${theme.colors.onSurface.lowEmphasis};
    width: 150px;
    height: 2px;
`;

export const Body2 = styled(G.Body2)`
    color: ${theme.colors.onSurface.lowEmphasis};
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`;

export const GoogleWrapper = styled.div`
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Google = styled.img`
    cursor: pointer;
    height: 64px;
    width: auto;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;

export const RemeberWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
`;

export const RemeberText = styled.p`
    font-family: PoppinsLight;
    font-style: italic;
    color: ${theme.colors.onSurface.lowEmphasis};
    letter-spacing: 0.5px;
    line-height: 24px;
`;

export const RequestButton = styled(Button)`
    height: 56px;
    font-size: 20px;
    letter-spacing: 1.25px;
    font-weight: bold;
    width: 80%;
    margin-bottom: 32px;
`;

export const LoginPicture = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    @media (max-width: 1300px) {
        right: -12.5%;
    }
    @media (max-width: 1120px) {
        display: none;
    }
    background-attachment: fixed;
    height: 100%;
    width: auto;
`;
