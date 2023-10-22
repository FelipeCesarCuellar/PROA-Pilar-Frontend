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

export const SearchWrapper = styled.div`
    width: 100%;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const TableWrapper = styled.div`
    width: 100%;
    padding: 0 100px 32px 100px;
`;
