import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { theme } from 'styles/global';
import SituationIndicator from 'components/SituationIndicator';
import Student from 'interfaces/student';
import { useRouter } from 'next/router';
import * as S from './styles';

interface BTProps {
    students: Student[];
}

const StudentTable: React.FC<BTProps> = ({ students }) => {
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
                            Email
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Telefone
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Cursos
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Situação
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            Estado
                        </S.TableCellHead>
                        <S.TableCellHead sx={{ color: '#FFF' }} align="left">
                            ID único
                        </S.TableCellHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                        <TableRow
                            key={student.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                            onClick={() => {
                                router.push('/student');
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell component="th" scope="row">
                                {student.name}
                            </TableCell>
                            <TableCell align="left">{student.email}</TableCell>
                            <TableCell align="left">{student.phone}</TableCell>
                            <TableCell align="left">
                                {student.courses}
                            </TableCell>
                            <TableCell align="left">
                                <SituationIndicator
                                    situation={student.situation}
                                />
                            </TableCell>
                            <TableCell align="left">{student.state}</TableCell>
                            <TableCell align="left">{student.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StudentTable;
