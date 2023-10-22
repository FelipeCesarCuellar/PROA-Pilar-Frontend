import React from 'react';
import ProaHeader from 'components/ProaHeader';
import { MenuItem, Select } from '@mui/material';
import { Chart } from 'react-google-charts';
import * as S from './styles';

const DashboardTemplate = () => {
    const sampleData = {
        proanes: ['', '', ''],
        retentionRate: 0.8912,
        courses: ['', '', '', '', ''],
        region: 'Brasil'
    };

    const sampleChartData = [
        ['Mês', 'Alunos'],
        ['jan', 120],
        ['fev', 80],
        ['mar', 98],
        ['abr', 120],
        ['mai', 130],
        ['jun', 100],
        ['jul', 178],
        ['ago', 120],
        ['set', 180],
        ['out', 149],
        ['dez', 120]
    ];

    const options = {
        chart: {
            title: 'Proanes no Brasil'
        },
        colors: ['#1C3380']
    };

    return (
        <S.Container>
            <ProaHeader username="Felipe Silva" />
            <S.CardWrapper>
                <S.GeneralData>
                    <S.Card>
                        <S.Icon src="assets/images/ProaneLogo.svg" />
                        <S.RightSection>
                            <S.Title>Proanes</S.Title>
                            <S.Data>{sampleData.proanes.length}</S.Data>
                        </S.RightSection>
                    </S.Card>
                    <S.Card>
                        <S.Icon src="assets/images/RetentionLogo.svg" />
                        <S.RightSection>
                            <S.Title>Taxa de retenção</S.Title>
                            <S.Data>{sampleData.retentionRate * 100}%</S.Data>
                        </S.RightSection>
                    </S.Card>
                    <S.Card>
                        <S.Icon src="assets/images/CourseLogo.svg" />
                        <S.RightSection>
                            <S.Title>Cursos disponíveis</S.Title>
                            <S.Data>{sampleData.courses.length}</S.Data>
                        </S.RightSection>
                    </S.Card>
                </S.GeneralData>

                <S.Card>
                    <S.Icon src="assets/images/RegionLogo.svg" />
                    <S.RightSection>
                        <S.Title>Proanes</S.Title>
                        <Select value={sampleData.region} sx={{ width: 120 }}>
                            <MenuItem value="Brasil">Brasil</MenuItem>
                            <MenuItem value="SP">SP</MenuItem>
                            <MenuItem value="RJ">RJ</MenuItem>
                            <MenuItem value="MG">MG</MenuItem>
                        </Select>
                    </S.RightSection>
                </S.Card>
            </S.CardWrapper>
            <div style={{ width: '100%', padding: '0px 100px' }}>
                <S.ChartWrapper>
                    <Chart
                        chartType="Bar"
                        data={sampleChartData}
                        options={options}
                        width="100%"
                        height="400px"
                    />
                </S.ChartWrapper>
            </div>
        </S.Container>
    );
};

export default DashboardTemplate;
