import { useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

// image upload 기능은 일단 제외. 추후 추가 시 아래 링크 참조
// https://velog.io/@sklsh917/React-Quill%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0with-TypeScript
const Editor = ({ contents, setContents }: any) => {
    const QuillRef = useRef<ReactQuill>();
    // const [contents, setContents] = useState('');

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [
                        { size: ['small', false, 'large', 'huge'] },
                        { color: [] },
                    ],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                ],
            },
        }),
        []
    );
    return (
        <>
            <QuillEditor
                theme="snow"
                modules={modules}
                ref={(element) => {
                    if (element !== null) {
                        QuillRef.current = element;
                    }
                }}
                value={contents}
                onChange={(contents) => setContents(contents)}
                placeholder="내용을 입력해주세요."
            />
        </>
    );
};
const QuillEditor = styled(ReactQuill)`
    height: 100%;
`;

export default Editor;
