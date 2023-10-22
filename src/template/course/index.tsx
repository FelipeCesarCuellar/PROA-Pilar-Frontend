import React, { useState } from 'react';
import ProaHeader from 'components/ProaHeader';
import { useRouter } from 'next/router';
import {
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField
} from '@mui/material';
import StudentTable from 'components/StudentTable';
import sampleStudents from 'template/listStudents/sample';
import * as S from './styles';

const CourseTemplate = () => {
    const user = {
        name: 'Felipe Silva'
    };
    const course = {
        name: 'Websites com HTML, CSS e JS do início',
        banner: '/assets/images/CourseBG.png',
        teachers: 'Bruno Jovenasso, Thiago Maia, Felipe Bergamini',
        start_date: '2023-01-01',
        finish_date: '2023-06-01',
        updated_at: '04/04/2023, 15:26',
        students: 120,
        id: 'PSI3472'
    };

    const [startDate, setStartDate] = useState(course.start_date);
    const [finishDate, setFinishDate] = useState(course.finish_date);
    const [teachers, setTeachers] = useState(course.teachers);
    const [editMode, setEditMode] = useState(false);

    const router = useRouter();
    return (
        <S.Container>
            <ProaHeader username={user.name} />
            <S.Banner src={course.banner} />
            <S.CourseName>{course.name}</S.CourseName>
            <S.UpperData>
                <S.Section>
                    <S.Label style={{ marginLeft: 0 }}>Corpo docente:</S.Label>
                    <FormControl sx={{ m: 1, minWidth: 480 }}>
                        <TextField
                            value={teachers}
                            disabled={!editMode}
                            fullWidth
                            onChange={(e) => setTeachers(e.target.value)}
                        />
                    </FormControl>
                </S.Section>
                <S.Section>
                    <S.Label>Região:</S.Label>
                    <FormControl
                        sx={{ m: 1, minWidth: 120 }}
                        disabled={!editMode}
                    >
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
                <S.Label style={{ marginLeft: 0 }}>Início:</S.Label>
                <S.SmallTextField
                    value={startDate}
                    disabled={!editMode}
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <S.Label>Término:</S.Label>
                <S.SmallTextField
                    value={finishDate}
                    disabled={!editMode}
                    type="date"
                    onChange={(e) => setFinishDate(e.target.value)}
                />
                <S.Label>Inscritos:</S.Label>
                <S.SmallTextField
                    value={course.students}
                    disabled
                    type="number"
                    style={{ width: 120 }}
                />
            </S.LowerData>
            <S.TableContainer>
                <StudentTable students={sampleStudents} />
            </S.TableContainer>

            <S.Footer>
                <S.CourseData>
                    ID do curso: {course.id} - Última atualização em{' '}
                    {course.updated_at}
                </S.CourseData>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                        setEditMode(!editMode);
                        router.push('/course');
                    }}
                >
                    Habilitar edição
                </Button>
            </S.Footer>
        </S.Container>
    );
};

export default CourseTemplate;
