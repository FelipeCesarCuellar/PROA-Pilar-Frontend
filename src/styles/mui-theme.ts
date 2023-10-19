import { createTheme } from '@mui/material';
import { theme } from './global';

const MuiTheme = createTheme({
    palette: {
        primary: {
            main: theme.colors.institucional.blue
        },
        secondary: {
            main: theme.colors.onSurface.mediumEmphasis
        }
    },
    typography: {
        fontFamily: ['PoppinsNormal', 'PoppinsLight', 'PoppinsBold'].join(','),
        button: {
            fontFamily: ['PoppinsBold', 'PoppinsNormal'].join(','),
            fontSize: 20
        }
    }
});

export default MuiTheme;
