import { takeLatest, call, put } from 'redux-saga/effects'
import { todoSliceActions } from './toDoReducers'
import { makeArrangements } from './helper'
import { doneSliceActions } from './doneReducer'

function* fetchTodo(): any {
  const res = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/users/1/todos'
  )
  const data = yield res.json()
  const arrangedData = makeArrangements(data)

  yield put(todoSliceActions.addToDos(arrangedData.ToDo))
  yield put(doneSliceActions.addDones(arrangedData.Done))
}
export default function* rootSaga() {
  yield takeLatest('fecthTodo', fetchTodo)
}
