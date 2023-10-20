import { TextField } from '@mui/material';
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

export const Banner = styled.img`
    width: 100%;
    height: 240px;
`;

export const CourseName = styled(HeadlineBold)`
    color: ${theme.colors.institucional.blue};
    margin-top: 16px;
`;

export const UpperData = styled.div`
    padding: 0 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
`;

export const Label = styled(BodyBold)`
    margin-right: 16px;
    margin-left: 32px;
`;

export const LowerData = styled(UpperData)`
    justify-content: flex-start;
    align-items: center;
`;

export const Data = styled.p`
    font-family: PoppinsLight;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-right: 32px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const CourseData = styled.p`
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
    justify-content: space-between;
    align-items: center;
    padding: 16px 100px 64px 100px;
    position: fixed;
    bottom: 0;
`;

export const SmallTextField = styled(TextField)`
    width: 172px;
`;
