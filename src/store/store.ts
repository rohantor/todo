import createSagaMiddleware from 'redux-saga'
import {  configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'
export type RootStateType = ReturnType<typeof rootReducer>
const saga = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
})

saga.run(rootSaga)
export default store