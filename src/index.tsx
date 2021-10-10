import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import rootReducer, { rootSaga } from './modules';
import GlobalStyle from './styles/GlobalStyles';
import App from './App';
import { theme } from './styles/theme';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
