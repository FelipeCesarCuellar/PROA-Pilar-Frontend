import styled from 'styled-components';
import { BodyBold, HeadlineBold, theme } from 'styles/global';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.composition.background};
`;

export const Banner = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d2d6d9;
    margin-bottom: 16px;
`;

export const Outline = styled.div`
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px dashed ${theme.colors.onSurface.mediumEmphasis};
    border-radius: 8px;
    font-family: PoppinsBold;
    font-size: 24px;
    color: ${theme.colors.onSurface.mediumEmphasis};
    cursor: pointer;
`;

export const CourseCreationTitle = styled(HeadlineBold)`
    color: ${theme.colors.institucional.blue};
    margin-bottom: 16px;
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const InfoText = styled.p`
    font-family: PoppinsLight;
    font-size: 10px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
    margin-bottom: 8px;
    width: 100%;
`;

export const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
`;

export const DateLine = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin-top: 16px;
`;

export const Label = styled(BodyBold)`
    margin-right: 16px;
`;
