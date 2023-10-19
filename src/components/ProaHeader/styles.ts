import styled from 'styled-components';
import { Button } from '@mui/material';
import { theme } from '../../styles/global';
import * as G from '../../styles/global';

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 100px;
    align-items: center;
    background-color: ${theme.colors.composition.background};
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`;

export const GrayDivider = styled.div`
    background-color: ${theme.colors.composition.divider};
    width: 2px;
    height: 56px;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

export const Option = styled(Button)`
    padding: 8px;
    font-size: 20px;
    letter-spacing: 0.5px;
    line-height: 24px;
    font-family: PoppinsBold;
    color: ${theme.colors.institucional.blue};
`;

export const BlueDivider = styled.div`
    width: 4px;
    height: 40px;
    background-color: ${theme.colors.institucional.blue};
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-left: 40px;
`;

export const UserProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    cursor: pointer;
`;

export const ProfilePicture = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

export const Username = styled(G.Body1)`
    color: ${theme.colors.institucional.blue};
`;
