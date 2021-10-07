import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function List() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // fetch('http://bgjm.synology.me:50011/api/posts/jimin?pdate=2021')
        //     .then(res => res.json())
        //     .then(data => setPosts(data))
    });

    return (
        <div>
            <div>글 내용</div>
            <Link to="/write">글 쓰기</Link>
            {posts.map((post) => (
                <div key={post.id}>
                    <div>
                        {post.pdate}
                        {post.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default List;
