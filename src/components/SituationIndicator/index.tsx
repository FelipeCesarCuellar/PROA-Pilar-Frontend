import React from 'react';
import * as S from './styles';

interface SIPRops {
    situation: string;
}

const SituationIndicator: React.FC<SIPRops> = ({ situation }) => {
    return (
        <S.Container situation={situation}>
            <S.Ball situation={situation} />
            <S.Text situation={situation}>{situation}</S.Text>
        </S.Container>
    );
};

export default SituationIndicator;
