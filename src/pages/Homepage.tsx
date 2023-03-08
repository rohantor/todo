import React, { useEffect, memo } from 'react'
import Element from '../components/Element'
import style from './Homepage.module.css'
import Input from '../components/Input'
import TrashElement from '../components/TrashElement'
import  { todoSliceActions } from '../store/toDoReducers'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from '../store/store'
import { doneSliceActions } from '../store/doneReducer'

export default memo(function Homepage() {
  const dispatch = useDispatch()
  const ToDoelements = useSelector((state: RootStateType) => state.todo)
  const DoneElements = useSelector((state: RootStateType) => state.done)

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const index = event.dataTransfer.getData('index')
    dispatch(doneSliceActions.addToDone(ToDoelements[parseInt(index)]))
    dispatch(todoSliceActions.remove(index))
  }
  const DeleteNode = (index: number) => {
    dispatch(doneSliceActions.remove(index))
  }

  useEffect(() => {
    dispatch({ type: 'fecthTodo' })
  }, [])
  return (
    <div>
      <h1>
        To
        <img src='./todo.png' style={{ width: '100px' }} alt='To Do '></img>
        Do
      </h1>
      <section>
        {/* //
        
        First Componenet
        / */}
        <div className={style.ElementContainer}>
          <h1>To Do</h1>
          {ToDoelements.map((element, index) => {
            return (
              <>
                <Element key={index} ele={element} index={index}></Element>
              </>
            )
          })}
        </div>
        {/* //
        
        Second Componenet
        / */}
        <div className={style.InputContainer}>
          Enter Here
          <Input />
        </div>
        {/* //
        
        Third Componenet
        / */}
        <div
          className={style.ElementContainer}
          onDrop={handleDrop}
          onDragOver={enableDropping}
        >
          <h1>Done</h1>

          <div className={style.DoneBoxContainer}>
            {DoneElements?.map((element, index) => {
              return (
                <>
                  <div
                    onClick={() => {
                      DeleteNode(index)
                    }}
                  >
                    <TrashElement key={index} ele={element}></TrashElement>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
})
