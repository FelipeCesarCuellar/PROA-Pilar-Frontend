import React from 'react';
import ProaHeader from 'components/ProaHeader';
import { useRouter } from 'next/router';
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import * as S from './styles';

const CourseTemplate = () => {
    const user = {
        name: 'Felipe Silva'
    };
    const course = {
        name: 'Websites com HTML, CSS e JS do início',
        banner: '/assets/images/CourseBG.png',
        teachers: 'Bruno Jovenasso, Thiago Maia, Felipe Bergamini',
        start_date: '01/01/2023',
        finish_date: '01/06/2023',
        updated_at: '04/04/2023, 15:26',
        students: 120,
        id: 'PSI3472'
    };
    const router = useRouter();
    return (
        <S.Container>
            <ProaHeader username={user.name} />
            <S.Banner src={course.banner} />
            <S.CourseName>{course.name}</S.CourseName>
            <S.UpperData>
                <S.Section>
                    <S.Label>Corpo docente:</S.Label>
                    <FormControl sx={{ m: 1, minWidth: 480 }}>
                        <TextField value={course.teachers} disabled fullWidth />
                    </FormControl>
                </S.Section>
                <S.Section>
                    <S.Label>Região:</S.Label>
                    <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                        <Select
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            value="Brasil"
                        >
                            <MenuItem value="Brasil">Brasil</MenuItem>
                            <MenuItem value="SP">SP</MenuItem>
                            <MenuItem value="RJ">RJ</MenuItem>
                            <MenuItem value="SC">SC</MenuItem>
                        </Select>
                    </FormControl>
                </S.Section>
            </S.UpperData>
            <S.LowerData>
                <S.Label>Início:</S.Label>
                <S.SmallTextField value={course.start_date} disabled />
                <S.Label>Término:</S.Label>
                <S.SmallTextField value={course.finish_date} disabled />
                <S.Label>Inscritos:</S.Label>
                <S.SmallTextField
                    value={`${course.students} alunos`}
                    disabled
                />
            </S.LowerData>
            <S.Footer>
                <S.CourseData>
                    ID do curso: {course.id} - Última atualização em{' '}
                    {course.updated_at}
                </S.CourseData>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => router.push('/course')}
                >
                    Habilitar edição
                </Button>
            </S.Footer>
        </S.Container>
    );
};

export default CourseTemplate;
