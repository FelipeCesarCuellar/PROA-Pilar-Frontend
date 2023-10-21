import styled from 'styled-components';
import { HeadlineBold, theme } from 'styles/global';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.composition.background};
`;

export const ScreenTitle = styled(HeadlineBold)`
    color: ${theme.colors.institucional.blue};
    margin-bottom: 16px;
`;

export const ProfilePicture = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    margin-bottom: 16px;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 560px;
    margin-bottom: 16px;
`;

export const StudentData = styled.p`
    position: absolute;
    left: 100px;
    font-family: PoppinsLight;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 32px 100px 32px 100px;
    background-color: ${theme.colors.composition.background};
`;
