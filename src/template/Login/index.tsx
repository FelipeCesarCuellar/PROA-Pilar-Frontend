import ProaLogo from 'components/ProaLogo';
import { TextField, Checkbox } from '@mui/material';
import * as S from './styles';
import * as G from '../../styles/global';

const LoginTemplate = () => {
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
                        <TextField label="Email" fullWidth />
                        <TextField label="Senha" fullWidth />
                        <S.RemeberWrapper>
                            <Checkbox />
                            <S.RemeberText>Lembre-se de mim</S.RemeberText>
                        </S.RemeberWrapper>
                    </S.InputWrapper>
                    <S.RequestButton variant="contained">Login</S.RequestButton>
                </S.StandardAuth>
            </S.LeftWrapper>
            <S.LoginPicture src="assets/images/LoginPicture.svg" alt="" />
        </S.Container>
    );
};

export default LoginTemplate;
