import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        color: #757575;
    }
    a {
        text-decoration: none;
        color: #000;
    }
`;
export default GlobalStyle;
