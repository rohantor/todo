import { createSlice } from '@reduxjs/toolkit/'

const initialState: Array<{ text: string; color: string }> = []
const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload]
    },
    remove(state, action) {
      console.log('State: ' + action.payload)
      state.splice(action.payload, 1)
    },
    update(state, action) {
      state[action.payload.index].text = action.payload.data
    },
    addToDos(state, action) {
      return [...state, ...action.payload]
    },
  },
})

export default todoSlice
export const todoSliceActions = todoSlice.actions
