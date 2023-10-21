import ProaHeader from 'components/ProaHeader';
import React from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import SituationIndicator from 'components/SituationIndicator';
import * as S from './styles';

const StudentTemplate = () => {
    const user = {
        username: 'Felipe Silva'
    };

    // Os valores em sx (exemplo: sx={{ m: 1 }}) estão em rem, ou seja, pra font-size: 100%, 1 rem === 16px;

    return (
        <S.Container>
            <ProaHeader username={user.username} />
            <S.ScreenTitle>Dados do estudante</S.ScreenTitle>
            <S.ProfilePicture src="/assets/images/temp_profile.png" alt="" />

            <S.FormWrapper>
                <TextField sx={{ mb: 1.5 }} fullWidth label="Nome Completo" />
                <TextField sx={{ mb: 1.5 }} fullWidth label="Email" />
                <TextField sx={{ mb: 1.5 }} fullWidth label="Telefone" />
                <TextField sx={{ mb: 1.5 }} fullWidth label="Cursos" />
                <FormControl sx={{ mb: 1.5 }}>
                    <InputLabel id="region-label">Região</InputLabel>
                    <Select
                        labelId="region-label"
                        id="region-select"
                        label="Região"
                    >
                        <MenuItem value="Brasil">Brasil</MenuItem>
                        <MenuItem value="SP">SP</MenuItem>
                        <MenuItem value="RJ">RJ</MenuItem>
                        <MenuItem value="SC">SC</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ mb: 1.5 }}>
                    <InputLabel id="situation-label">Situação</InputLabel>
                    <Select
                        labelId="situation-label"
                        id="situation-select"
                        label="Situação"
                    >
                        <MenuItem value="Brasil">
                            <SituationIndicator situation="Normal" />
                        </MenuItem>
                        <MenuItem value="SP">
                            <SituationIndicator situation="Atenção" />
                        </MenuItem>
                        <MenuItem value="RJ">
                            <SituationIndicator situation="Desistente" />
                        </MenuItem>
                    </Select>
                </FormControl>
            </S.FormWrapper>
            <S.Footer>
                <S.StudentData>
                    ID do aluno: 5428 - Última atualização em 21/10/2023 - 15:37
                </S.StudentData>
                <Button variant="contained">Salvar alterações</Button>
            </S.Footer>
        </S.Container>
    );
};

export default StudentTemplate;
