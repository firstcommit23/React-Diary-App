import React from 'react';
import styled from 'styled-components';
import { getMoodIcon } from '../../lib/utils';

type MoodSeletorProps = {
    mood: string;
};

const moodArray = [];

function MoodSeletor({ mood = '' }: MoodSeletorProps) {
    return (
        <Container>
            {mood ? (
                <IconItem data-mood={mood}>{getMoodIcon(mood)}</IconItem>
            ) : (
                <></>
            )}
        </Container>
    );
}
const Container = styled.div``;

const IconItem = styled.span`
    cursor: pointer;
`;

export default MoodSeletor;
