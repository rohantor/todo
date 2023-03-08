import React, { useState, ChangeEvent } from 'react'
import Covered from '../assets/trash-cover.svg'
import UnCovered from '../assets/trash-uncovered.svg'
import style from './Input.module.css'
import { useDispatch } from 'react-redux'
import { todoSliceActions } from '../store/toDoReducers'
interface propsInterface {
}
export default function Input(props: propsInterface) {
  const [textAreaInput, setTextAreaInput] = useState('')
  const [trashOpen ,setTrashOpen] =useState(false)
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaInput(event.target.value)
  }
  const Random = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor
  }
   const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
     event.preventDefault()
    

   }
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const index = event.dataTransfer.getData('index')
         setTrashOpen((prv) => !prv)
         dispatch(todoSliceActions.remove(index))
  }
  
  const Add = () => {
    if (textAreaInput !== '') {
      dispatch(
        todoSliceActions.addTodo({
          text: textAreaInput,
          color: Random(),
        })
      )
      setTextAreaInput('')
    }
  }
  return (
    <>
      <div>
        <textarea
          name=''
          maxLength={290}
          value={textAreaInput}
          id=''
          cols={60}
          rows={5}
          className={style.textareaInput}
          onChange={handleChange}
        ></textarea>
        <button className={style.buttonSubmit} onClick={Add}>
          Add
        </button>
      </div>
      <div>
        {trashOpen ? (
          <img
            className={style.cover1}
            src={UnCovered}
            alt=''
            onDrop={handleDrop}
            onDragOver={enableDropping}
            
          />
        ) : (
          <img className={style.cover1} src={Covered}  onDragEnter={() => setTrashOpen((prv)=>!prv)}alt='' />
        )}
      </div>
    </>
  )
}
