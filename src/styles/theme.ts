import { DefaultTheme } from 'styled-components';

export const theme = {
    color: {
        black: '#1E2222',

        grey1: '#EEEEEE', // border
        grey2: '#DDDDDD',
        grey3: '#C1C5C5', // placeholder
        grey4: '#8D9393',
        grey5: '#626666',

        white1: '#FFFFFF',
        white2: '#F5F5F5',

        mint1: '#A0E1E0',
        mint2: '#2AC1BC',
        mint3: '#219A95',

        red: '#F45452',
    },
    width: {
        maxWidth: '1192px',
    },
    buttonColorMap: {
        teal: '#111111',
        gray: 'gray',
        darkGray: '#eeeeee',
    },
};

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    laptop: customMediaQuery(1440),
    tablet: customMediaQuery(800),
    mobile: customMediaQuery(420),
};
