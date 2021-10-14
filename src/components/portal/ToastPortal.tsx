import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import Toast from '../toast/Toast';

const el = document.querySelector('#toast');
if (el === null) {
    throw new Error();
}

const ToastPortal = (): ReactPortal => ReactDOM.createPortal(<Toast />, el);

export default ToastPortal;
