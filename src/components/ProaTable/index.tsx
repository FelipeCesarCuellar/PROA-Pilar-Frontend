/* eslint-disable prettier/prettier */
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
import * as S from './styles';

function createData(
    name: string,
    email: string,
    courses: string,
    situation: string,
    state: string,
    id: string
) {
    return { name, email, courses, situation, state, id };
}

const rows = [
    createData(
        'Gustavo Zamboni do Carmo',
        'g.zamboni@gmail.com',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU001'
    ),
    createData(
        'Fernando Qiao Jie Tan',
        'fernandoqiao@gmail.com',
        'Programação, ADM',
        'Desistente',
        'SP',
        'ALU002'
    ),
    createData(
        'Felipe Bergamini de Souza',
        'fefe@gmail.com',
        'Programação, ADM',
        'Normal',
        'SP',
        'ALU003'
    ),
    createData(
        'Bruno Jovenasso',
        'bjovenasso2001@gmail.com',
        'Programação, ADM',
        'Atenção',
        'RJ',
        'ALU004'
    ),
    createData(
        'Caíque Yago de Paula Vargas Nascimento',
        'caiqueypvn@gmail.com',
        'Programação, ADM',
        'Atenção',
        'MG',
        'ALU005'
    )
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        style={{
                            backgroundColor: theme.colors.institucional.blue
                        }}
                    >
                        <S.TableCellHead>Nome</S.TableCellHead>
                        <S.TableCellHead align="left">Email</S.TableCellHead>
                        <S.TableCellHead align="left">Cursos</S.TableCellHead>
                        <S.TableCellHead align="left">Situação</S.TableCellHead>
                        <S.TableCellHead align="left">Estado</S.TableCellHead>
                        <S.TableCellHead align="left">ID único</S.TableCellHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0
                                }
                            }}
                            onClick={() => {}}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.courses}</TableCell>
                            <TableCell align="left">
                                <SituationIndicator situation={row.situation} />
                            </TableCell>
                            <TableCell align="left">{row.state}</TableCell>
                            <TableCell align="left">{row.id}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
