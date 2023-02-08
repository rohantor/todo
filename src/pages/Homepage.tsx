import React, { useState } from 'react'
import Element from '../components/Element'
import style from './Homepage.module.css'
import Input from '../components/Input'
import TrashElement from '../components/TrashElement'

export default function Homepage() {
  const [ToDoelements, setToDoElements] = useState<Array<{text:string,color:string}>>([])
  const [DoneElements, setDoneElements] = useState<
    Array<{ text: string; color: string }>
  >([])

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const index = event.dataTransfer.getData('index')
    
    let temp = DoneElements

    
    setDoneElements([ToDoelements[parseInt(index)], ...temp])

    setToDoElements((prv) => prv.filter((_, i) => i !== parseInt(index)))

   
  }
  const DeleteNode = (index:number)=>{
      setDoneElements((prv) => prv.filter((e, i) => i !== index))
  }
  return (
    <div>
      <h1>
        To
        <img src='./todo.png' style={{ width: '100px' }}
        alt="To Do "
        ></img>
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
                <Element
                  key={index}
                  ele={element}
                  index={index}
                  setToDoElements={setToDoElements}
                ></Element>
              </>
            )
          })}
        </div>
        {/* //
        
        Second Componenet
        / */}
        <div className={style.InputContainer}>
          Enter Here
          <Input setToDoElements={setToDoElements} />
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
                    <div onClick={()=>{
                      DeleteNode(index) 

                    }}>
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
}
