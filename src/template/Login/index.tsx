import ProaLogo from 'components/ProaLogo';
import { TextField, Checkbox } from '@mui/material';
import { useState } from 'react';
import * as S from './styles';
import * as G from '../../styles/global';

const LoginTemplate = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    return (
        <S.Container>
            <S.LeftWrapper>
                <ProaLogo height={74} />
                <S.SubtitleBold>Bem vindo!</S.SubtitleBold>
                <G.SubtitleNormal>Selecione o método de login</G.SubtitleNormal>
                <S.GoogleWrapper>
                    <S.Google
                        src="assets/images/GoogleOAuth.svg"
                        alt="Login via Google"
                    />
                </S.GoogleWrapper>
                <S.StandardAuth>
                    <S.Banner>
                        <S.Line />
                        <S.Body2>ou continue com o email</S.Body2>
                        <S.Line />
                    </S.Banner>
                    <S.InputWrapper>
                        <TextField
                            label="Email"
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Senha"
                            fullWidth
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <S.RemeberWrapper>
                            <Checkbox
                                value={remember}
                                onChange={() => setRemember(!remember)}
                            />
                            <S.RemeberText>Lembre-se de mim</S.RemeberText>
                        </S.RemeberWrapper>
                    </S.InputWrapper>
                    <S.RequestButton
                        variant="contained"
                        onClick={() => {
                            // Código dummy por causa das regras de cleancode
                            if (email === 'felipe@cesar.com') {
                                if (password === 'teste123') {
                                    setPassword('Teste123');
                                }
                            }
                        }}
                    >
                        Login
                    </S.RequestButton>
                </S.StandardAuth>
            </S.LeftWrapper>
            <S.LoginPicture src="assets/images/LoginPicture.svg" alt="" />
        </S.Container>
    );
};

export default LoginTemplate;
