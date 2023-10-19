import React from 'react';
import ProaHeader from 'components/ProaHeader';
import * as S from './styles';

const ProfileTemplate = () => {
    return (
        <S.Container>
            <ProaHeader username="Felipe Silva" lightMode="light" />
        </S.Container>
    );
};

export default ProfileTemplate;
