import styled from 'styled-components';

export const theme = {
    colors: {
        onSurface: {
            highEmphasis: '#1E2732',
            mediumEmphasis: '#545454',
            lowEmphasis: '#949494'
        },
        composition: {
            white: '#FFFFFF',
            background: '#FAFAFA',
            divider: '#E6EAED'
        },
        institucional: {
            blue: '#1C3380',
            lightBlue: '#01B5F2',
            yellow: '#FFCB00',
            purple: '#7F0091'
        }
    }
};

export const SubtitleBold = styled.p`
    font-family: PoppinsBold;
    font-size: 28px;
    font-weight: 800;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const SubtitleNormal = styled.p`
    font-family: PoppinsNormal;
    font-size: 28px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const Body1 = styled.p`
    font-family: PoppinsNormal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const Body2 = styled.p`
    font-family: PoppinsLight;
    font-size: 20px;
    font-style: italic;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const Button = styled.p`
    font-family: PoppinsBold;
    font-size: 24px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;

export const HeadlineBold = styled.p`
    font-family: PoppinsBold;
    font-size: 48px;
    color: ${theme.colors.onSurface.mediumEmphasis};
`;
