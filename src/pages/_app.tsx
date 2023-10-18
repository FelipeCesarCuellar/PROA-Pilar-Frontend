import { ThemeProvider } from '@mui/material';
import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';
import MuiTheme from 'styles/mui-theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppProvider>
                <ThemeProvider theme={MuiTheme}>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </AppProvider>
        </>
    );
}

export default MyApp;
