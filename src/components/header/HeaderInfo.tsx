import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useHistory } from 'react-router-dom';

export type HeaderInfoProps = {
    userName: string;
    userId: string;
};

function HeaderInfo({ userName, userId }: HeaderInfoProps) {
    const history = useHistory();
    return (
        <Container>
            <Wrapper>
                <div>👶{userName}</div>
                <Button
                    onClick={() => {
                        history.push('/write');
                    }}
                >
                    Write
                </Button>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    width: 100%;
    padding-top: 8px;
    display: flex;
    font-size: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;

    margin: 20px;
`;

export default HeaderInfo;
