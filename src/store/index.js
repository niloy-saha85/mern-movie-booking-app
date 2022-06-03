import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
const sagaMiddleware =  createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middlewares])
});

sagaMiddleware.run(rootSaga);

export default store;
