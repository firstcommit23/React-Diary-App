import React from 'react';

// TODO: 추후 수정
type DiaryListItemProps = {
    name: string;
    thumbnail: string;
    bio: string;
    blog: string;
};

function DiaryListItem({ name, thumbnail, bio, blog }: DiaryListItemProps) {
    return (
        <div>
            <div>{name}</div>
            <img src={thumbnail} alt="user thumbnail" />
            <div>{bio}</div>
            <div>{blog}</div>
        </div>
    );
}

export default DiaryListItem;
