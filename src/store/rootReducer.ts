import { combineReducers } from '@reduxjs/toolkit'
import toDo from './toDoReducers'
import done from './doneReducer'
export const rootReducer = combineReducers({
  todo: toDo.reducer,
  done: done.reducer,
})
