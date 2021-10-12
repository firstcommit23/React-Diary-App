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
                <UserName>👶{userName}</UserName>
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
    display: flex;
    font-size: 20px;
    justify-self: flex-end;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
    height: 32px;
    margin-right: 12px;
    align-items: center;
`;

const UserName = styled.div`
    margin-right: 12px;
`;

export default HeaderInfo;
