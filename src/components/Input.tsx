import React, { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import style from './Input.module.css'
interface propsInterface {
  setToDoElements: Dispatch<SetStateAction<string[]>>
}
export default function Input(props: propsInterface) {
  const [textAreaInput, setTextAreaInput] = useState('')
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaInput(event.target.value)
  }

  const Add = () => {
    if(textAreaInput!==''){

      props.setToDoElements((prv) => [...prv, textAreaInput])
      setTextAreaInput('')
    }
  }
  return (
    <div>
      <textarea
        name=''
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
  )
}
