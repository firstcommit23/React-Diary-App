import { DefaultTheme } from 'styled-components';

export const theme = {
    color: {
        black: '#17181c',
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
