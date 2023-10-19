import React, { useState } from 'react';
import ProaLogo from 'components/ProaLogo';
import MUISwitch from 'components/MUISwitch';
import * as S from './styles';
import * as G from '../../styles/global';

interface ProaHeaderProps {
    username: string;
    lightMode: string;
}

const ProaHeader: React.FC<ProaHeaderProps> = ({ username, lightMode }) => {
    const [mode, setMode] = useState(lightMode);
    return (
        <S.Container>
            <S.LeftSection>
                <ProaLogo height={74} />
                <S.GrayDivider />
                <G.Body2>Projeto Reter, Orientar e Acompanhar</G.Body2>
            </S.LeftSection>
            <S.Right>
                <S.Menu>
                    <S.Option>Alunos</S.Option>
                    <S.BlueDivider />
                    <S.Option>Cursos</S.Option>
                </S.Menu>
                <MUISwitch
                    mode={mode}
                    onChange={(e) =>
                        e.target.checked ? setMode('dark') : setMode('light')
                    }
                />
                <S.UserProfile>
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
