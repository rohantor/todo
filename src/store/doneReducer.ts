import { createSlice, current } from '@reduxjs/toolkit/'

const initialState: Array<{ text: string; color: string }> = []
const doneSlice = createSlice({
  name: 'done',
  initialState: initialState,
  reducers: {
    addToDone(state, action) {
      console.log('State: ' + current(state))
      console.log(action)
      return [...state, action.payload]
    },
    remove(state, action) {
      console.log('State: ' + action.payload)
      state.splice(action.payload, 1)
    },
    addDones(state, action){

       return [...state, ...action.payload]
    }
  },
})

export default doneSlice
export const doneSliceActions = doneSlice.actions
