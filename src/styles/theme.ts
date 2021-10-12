import { DefaultTheme } from 'styled-components';

export const theme = {
    color: {
        black: '#17181c',
        while0: '#e0e0e0',
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
