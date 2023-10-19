import styled from 'styled-components';
import { theme } from 'styles/global';
import * as G from '../../styles/global';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.composition.background};
    justify-content: space-between;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
`;

export const ProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;

export const Username = styled(G.HeadlineBold)`
    color: ${theme.colors.institucional.blue};
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    width: 560px;
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 64px 100px;
`;

export const AccountData = styled.p`
    font-family: PoppinsLight;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;
