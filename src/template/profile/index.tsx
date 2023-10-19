import React from 'react';
import ProaHeader from 'components/ProaHeader';
import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import * as S from './styles';

const ProfileTemplate = () => {
    const user = {
        photo: '/assets/images/temp_profile.png',
        username: 'Felipe Cesar Cuellar da Silva',
        email: 'felipecesar@usp.br',
        id: '123',
        updated_at: '30/2/1999, 23:59'
    };
    const router = useRouter();
    return (
        <S.Container>
            <ProaHeader username="Felipe Silva" />
            <S.Content>
                <S.ProfilePicture src={user.photo} alt="" />
                <S.Username>{user.username}</S.Username>
                <S.Inputs>
                    <TextField
                        fullWidth
                        label="Nome Completo"
                        value={user.username}
                    />
                    <TextField fullWidth label="Email" value={user.email} />
                    <TextField fullWidth label="Senha" type="password" />
                </S.Inputs>
                <Button variant="contained">Salvar Alterções</Button>
            </S.Content>
            <S.Footer>
                <S.AccountData>
                    ID de usuário: {user.id} - Última atualização em{' '}
                    {user.updated_at}
                </S.AccountData>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => router.push('/login')}
                >
                    Logout
                </Button>
            </S.Footer>
        </S.Container>
    );
};

export default ProfileTemplate;
