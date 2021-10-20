import React from 'react';
import toast from '../../lib/toast';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function DiaryButtonBox({
    id,
    onDelete,
}: {
    id: string | undefined;
    onDelete: (id: string) => void;
}) {
    const history = useHistory();
    const deleteAction = (id: string) => {
        confirmAlert({
            message: '작성하신 일기를 삭제하시겠습니까?',
            buttons: [
                { label: '삭제', onClick: () => onDelete(id) },
                { label: '취소', onClick: () => console.log('No') },
            ],
        });
    };
    return (
        <Container>
            <div
                onClick={() =>
                    toast.info('좋아요 기능은 아직 개발중이예요. 커밍순!!')
                }
            >
                좋아요
            </div>
            <div onClick={() => (id ? deleteAction(id) : null)}>삭제</div>
            <div onClick={() => history.push(`/write/${id}`)}>수정</div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;

    & > div {
        margin-right: 5px;
        font-size: 0.85rem;
        cursor: pointer;
    }
`;

export default DiaryButtonBox;
