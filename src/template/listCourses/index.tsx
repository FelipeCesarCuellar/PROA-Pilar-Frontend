/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ProaHeader from 'components/ProaHeader';
import SearchBar from 'components/SearchBar';
import { Button } from '@mui/material';
import Course from 'interfaces/Course';
import CourseTable from 'components/CourseTable';
import * as S from './styles';
import sampleCourses from './sample';

const ListCoursesTemplate = () => {
    const [text, setText] = useState('');
    const [courses, setCourses] = useState<Course[]>(sampleCourses);

    useEffect(() => {
        if (text !== '') {
            setCourses(
                sampleCourses.filter((course) => {
                    return course.name
                        .toLowerCase()
                        .includes(text.toLowerCase());
                })
            );
        } else {
            setCourses(sampleCourses);
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
                <CourseTable courses={courses} />
            </S.TableWrapper>
        </S.Container>
    );
};

export default ListCoursesTemplate;
