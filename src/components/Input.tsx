import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import Covered from '../assets/trash-cover.svg'
import UnCovered from '../assets/trash-uncovered.svg'
import style from './Input.module.css'
interface propsInterface {
  setToDoElements: Dispatch<SetStateAction<{ text: string; color: string }[]>>
}
export default function Input(props: propsInterface) {
  const [textAreaInput, setTextAreaInput] = useState('')
  const [trashOpen ,setTrashOpen] =useState(false)
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


    

    props.setToDoElements((prv) => prv.filter((_, i) => i !== parseInt(index)))

    
  }
  const Add = () => {
    if (textAreaInput !== '') {
      props.setToDoElements((prv) => [
        ...prv,
        { text: textAreaInput, color: Random() },
      ])
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
