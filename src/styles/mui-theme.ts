import { createTheme } from '@mui/material';
import { theme } from './global';

const MuiTheme = createTheme({
    palette: {
        primary: {
            main: theme.colors.institucional.blue
        }
    },
    typography: {
        fontFamily: ['PoppinsNormal', 'PoppinsLight', 'PoppinsBold'].join(',')
    }
});

export default MuiTheme;
