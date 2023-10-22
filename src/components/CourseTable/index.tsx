import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { theme } from 'styles/global';
import { useRouter } from 'next/router';
import Course from 'interfaces/Course';
import * as S from './styles';

interface CTProps {
    courses: Course[];
}

const CourseTable: React.FC<CTProps> = ({ courses }) => {
    const router = useRouter();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: theme.colors.institucional.blue
                        }}
                    >
                        <S.TableCellHead sx={{ color: '#FFF' }}>
                            Nome
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Corpo docente
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Nº de alunos
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Região
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Início
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Fim
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            ID
                        </S.TableCellHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course) => (
                        <TableRow
                            key={course.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                            onClick={() => {
                                router.push('/course');
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell component="th" scope="row">
                                {course.name}
                            </TableCell>
                            <TableCell align="left">
                                {course.teachers.join(', ')}
                            </TableCell>
                            <TableCell align="left">
                                {course.students.length}
                            </TableCell>
                            <TableCell align="left">{course.region}</TableCell>
                            <TableCell align="left">
                                {course.startDate}
                            </TableCell>
                            <TableCell align="left">{course.endDate}</TableCell>
                            <TableCell align="left">{course.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CourseTable;
