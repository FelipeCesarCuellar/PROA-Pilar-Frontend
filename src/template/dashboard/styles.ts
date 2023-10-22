import styled from 'styled-components';
import { theme } from 'styles/global';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.composition.background};
`;

export const CardWrapper = styled.div`
    width: 100%;
    padding: 24px 100px;
    @media (max-width: 1200px) {
        padding: 24px 16px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const GeneralData = styled.div`
    display: flex;
    flex-direction: row;
    gap: 32px;
    @media (max-width: 1200px) {
        gap: 16px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    padding: 16px;
    background-color: ${theme.colors.composition.white};
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`;

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Title = styled.p`
    font-family: PoppinsBold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const Data = styled(Title)`
    padding: 4px 8px;
    border-radius: 4px;
    width: fit-content;
    background-color: rgba(127, 0, 145, 0.25);
`;

export const ChartWrapper = styled.div`
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    font-family: PoppinsBold;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`;
