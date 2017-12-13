import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { composeWithDevTools } from 'remote-redux-devtools';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        ));
    sagaMiddleware.run(rootSaga);
    return store;
}