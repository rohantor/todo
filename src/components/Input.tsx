import React from 'react'
import style from './Input.module.css'
export default function Input() {
  return (
    <div>
      <textarea
        name=''
        id=''
        cols={60}
        rows={5}
        className={style.textarea}
      ></textarea>
      <button className={style.buttonSubmit}>Add</button>
    </div>
  )
}
