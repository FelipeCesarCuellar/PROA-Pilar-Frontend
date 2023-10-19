import React from 'react';
import ProaHeader from 'components/ProaHeader';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
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
        updated_at: 'sometime',
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
                    <S.Data>{course.teachers}</S.Data>
                </S.Section>
                <S.Section>
                    <S.Label>Região:</S.Label>
                </S.Section>
            </S.UpperData>
            <S.LowerData>
                <S.Label>Início:</S.Label>
                <S.Data>{course.start_date}</S.Data>
                <S.Label>Término:</S.Label>
                <S.Data>{course.finish_date}</S.Data>
                <S.Label>Inscritos:</S.Label>
                <S.Data>{course.students} alunos</S.Data>
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
