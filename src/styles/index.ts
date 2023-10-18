import { createGlobalStyle } from 'styled-components';
import * as theme from './selectors';
import { Theme, defaultTheme } from './default.theme';

export { theme, defaultTheme };
export type { Theme };

export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        // Causa bugs no mui
        font-size: 100%;// Isso existe para que 1rem seja igual a 10px (62.5%), caso não tiver usando rem pode apagar;
    }
    @font-face {
        font-family: PoppinsBold;
        src: url('assets/fonts/Poppins-Bold.ttf') format('truetype');
    }
    @font-face {
        font-family: PoppinsNormal;
        src: url('assets/fonts/Poppins-Regular.ttf') format('truetype');
    }
    @font-face {
        font-family: PoppinsLight;
        src: url('assets/fonts/Poppins-Light.ttf') format('truetype');
    }
`;
