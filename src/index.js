import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import styled from 'styled-components';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const Wrapper = styled.div`
text-align: center
`;

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <Wrapper>
            <App />
        </Wrapper>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
