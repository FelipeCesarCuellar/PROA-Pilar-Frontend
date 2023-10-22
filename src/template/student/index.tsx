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
import sampleStudents from 'template/listStudents/sample';
import * as S from './styles';

const StudentTemplate = () => {
    const user = {
        username: 'Felipe Silva'
    };
    const student = sampleStudents[3];

    // Os valores em sx (exemplo: sx={{ m: 1 }}) estão em rem, ou seja, pra font-size: 100%, 1 rem === 16px;

    return (
        <S.Container>
            <ProaHeader username={user.username} />
            <S.ScreenTitle>Dados do estudante</S.ScreenTitle>
            <S.ProfilePicture src="/assets/images/temp_student.png" alt="" />

            <S.FormWrapper>
                <TextField
                    sx={{ mb: 1.5 }}
                    fullWidth
                    label="Nome Completo"
                    value={student.name}
                />
                <TextField
                    sx={{ mb: 1.5 }}
                    fullWidth
                    label="Email"
                    value={student.email}
                />
                <TextField
                    sx={{ mb: 1.5 }}
                    fullWidth
                    label="Telefone"
                    value={student.phone}
                />
                <TextField
                    sx={{ mb: 1.5 }}
                    fullWidth
                    label="Cursos"
                    value={student.courses}
                />
                <FormControl sx={{ mb: 1.5 }}>
                    <InputLabel id="region-label">Região</InputLabel>
                    <Select
                        labelId="region-label"
                        id="region-select"
                        label="Região"
                        value={student.state}
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
                        value={student.situation}
                    >
                        <MenuItem value="Normal">
                            <SituationIndicator situation="Normal" />
                        </MenuItem>
                        <MenuItem value="Atenção">
                            <SituationIndicator situation="Atenção" />
                        </MenuItem>
                        <MenuItem value="Desistente">
                            <SituationIndicator situation="Desistente" />
                        </MenuItem>
                    </Select>
                </FormControl>
            </S.FormWrapper>
            <S.Footer>
                <S.StudentData style={{ left: 100 }}>
                    ID do aluno: 5428
                </S.StudentData>
                <Button variant="contained">Salvar alterações</Button>
                <S.StudentData style={{ right: 100 }}>
                    Atualizado em 21/10/2023 - 15:37
                </S.StudentData>
            </S.Footer>
        </S.Container>
    );
};

export default StudentTemplate;
