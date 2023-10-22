import React from 'react';
import ProaLogo from 'components/ProaLogo';
import { useRouter } from 'next/router';
import * as S from './styles';
import * as G from '../../styles/global';

interface ProaHeaderProps {
    username: string;
}

const ProaHeader: React.FC<ProaHeaderProps> = ({ username }) => {
    const router = useRouter();
    return (
        <S.Container>
            <S.LeftSection>
                <ProaLogo height={74} />
                <S.GrayDivider />
                <G.Body2>Projeto Reter, Orientar e Acompanhar</G.Body2>
            </S.LeftSection>
            <S.Right>
                <S.Menu>
                    <S.Option onClick={() => router.push('/students')}>
                        Alunos
                    </S.Option>
                    <S.BlueDivider />
                    <S.Option onClick={() => router.push('/courses')}>
                        Cursos
                    </S.Option>
                </S.Menu>
                <S.UserProfile onClick={() => router.push('/profile')}>
                    <S.ProfilePicture
                        src="./assets/images/temp_profile.png"
                        alt=""
                    />
                    <S.Username>{username}</S.Username>
                </S.UserProfile>
            </S.Right>
        </S.Container>
    );
};

export default ProaHeader;
