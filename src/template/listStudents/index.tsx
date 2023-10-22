/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ProaHeader from 'components/ProaHeader';
import SearchBar from 'components/SearchBar';
import StudentTable from 'components/StudentTable';
import Student from 'interfaces/student';
import { Button } from '@mui/material';
import * as S from './styles';
import sampleStudents from './sample';

const ListStudentsTemplate = () => {
    const [text, setText] = useState('');
    const [students, setStudents] = useState<Student[]>(sampleStudents);

    useEffect(() => {
        if (text !== '') {
            setStudents(
                sampleStudents.filter((student) => {
                    return student.name
                        .toLowerCase()
                        .includes(text.toLowerCase());
                })
            );
        } else {
            setStudents(sampleStudents);
        }
    }, [text]);

    return (
        <S.Container>
            <ProaHeader username="Felipe Silva" />
            <S.SearchWrapper>
                <SearchBar text={text} setText={setText} />
                <Button sx={{ fontSize: 16 }} variant="outlined">
                    Adicionar novo
                </Button>
            </S.SearchWrapper>
            <S.TableWrapper>
                <StudentTable students={students} />
            </S.TableWrapper>
        </S.Container>
    );
};

export default ListStudentsTemplate;
