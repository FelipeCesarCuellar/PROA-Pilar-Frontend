import React from 'react';
import ProaHeader from 'components/ProaHeader';
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import { useRouter } from 'next/router';
import * as S from './styles';

const CreateCourseTemplate = () => {
    const user = {
        name: 'Felipe Silva'
    };

    const router = useRouter();

    return (
        <S.Container>
            <ProaHeader username={user.name} />
            <S.CourseCreationTitle>Criação de curso</S.CourseCreationTitle>
            <S.Banner>
                <S.Outline>Fazer upload da imagem de capa</S.Outline>
            </S.Banner>

            <FormControl sx={{ m: 1, width: 800, alignItems: 'center' }}>
                <S.Line>
                    <S.Label>Nome:</S.Label>
                    <TextField sx={{ width: 600 }} label="Nome" />
                </S.Line>
                <S.Line style={{ marginBottom: 8 }}>
                    <S.Label>Corpo docente:</S.Label>
                    <TextField sx={{ width: 600 }} label="Corpo docente" />
                </S.Line>
                <S.InfoText>
                    Lembrete: Separar nomes por vírgula. O primeiro membro do
                    corpo docente deve ser o coordenador do curso.
                </S.InfoText>
                <S.DateWrapper>
                    <S.DateLine
                        style={{ width: 366, justifyContent: 'flex-end' }}
                    >
                        <S.Label>Data de início:</S.Label>
                        <TextField type="date" sx={{ width: 180 }} />
                    </S.DateLine>
                    <S.DateLine>
                        <S.Label>Data de término:</S.Label>
                        <TextField type="date" sx={{ width: 180 }} />
                    </S.DateLine>
                </S.DateWrapper>
                <S.DateWrapper style={{ marginBottom: 8 }}>
                    <S.DateLine
                        style={{ width: 366, justifyContent: 'flex-end' }}
                    >
                        <S.Label>ID exclusivo:</S.Label>
                        <TextField
                            inputProps={{ maxLenght: 7 }}
                            sx={{ width: 180 }}
                            label="ID"
                        />
                    </S.DateLine>
                    <S.DateLine>
                        <S.Label>Região:</S.Label>
                        <Select sx={{ width: 180 }} value="Brasil">
                            <MenuItem value="Brasil">Brasil</MenuItem>
                            <MenuItem value="SP">SP</MenuItem>
                            <MenuItem value="RJ">RJ</MenuItem>
                            <MenuItem value="SC">SC</MenuItem>
                        </Select>
                    </S.DateLine>
                </S.DateWrapper>
                <S.InfoText>
                    Deve ser único. Máximo de 3 letras e 4 números.
                </S.InfoText>
            </FormControl>

            <S.ButtonWrapper>
                <Button variant="outlined" color="secondary">
                    Cancelar
                </Button>
                <Button
                    variant="contained"
                    onClick={() => router.push('/course')}
                >
                    Criar Curso
                </Button>
            </S.ButtonWrapper>
        </S.Container>
    );
};

export default CreateCourseTemplate;
