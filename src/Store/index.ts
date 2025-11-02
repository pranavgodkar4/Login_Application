import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './Auth/AuthReducer.ts';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        auth:AuthReducer
    }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;