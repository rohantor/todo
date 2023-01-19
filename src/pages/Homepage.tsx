import React, { useState } from 'react'
import Element from '../components/Element'
import { ElementData } from '../Data/elementdata'
import style from './Homepage.module.css'
import { nanoid } from 'nanoid'
import Input from '../components/Input'
export default function Homepage() {
  const [ToDoelements, setToDoelements] = useState(ElementData)
  const [DoneElements, setDoneElements] = useState<Array<number>>([])
  const [seletedElement, setSelectedElement] = useState(null)
  // const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.dataTransfer.setData('text', event.currentTarget.id)
  // }
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const index = event.dataTransfer.getData('index')
    const rgb = event.dataTransfer.getData('color')
    let temp = DoneElements
    if (temp.length === 5) {
      temp.splice(4, 1)
    }
    setDoneElements([ToDoelements[parseInt(index)], ...temp])
    console.log(index)
    console.log(rgb)
  }
  return (
    <div>
      <h1>Homepage</h1>
      <section>
        {/* //
        
        First Componenet
        / */}
        <div className={style.ElementContainer}>
          <h1>To Do</h1>
          {ToDoelements.map((element, index) => {
            return (
              <>
                <Element ele={element} index={index}></Element>
              </>
            )
          })}
        </div>
        {/* //
        
        Second Componenet
        / */}
        <div className={style.InputContainer}>
          Enter Here
          <Input></Input>
        </div>
        {/* //
        
        Third Componenet
        / */}
        <div className={style.ElementContainer}>
          <h1>Done</h1>
          <div className={style.DoneOuterBox}>
            <div
              className={style.DoneInsertBox}
              onDrop={handleDrop}
              onDragOver={enableDropping}
            >
              <h1>Throw Here</h1>
            </div>
            <div className={style.DoneBoxContainer}>
              {DoneElements.map((element, index) => {
                return (
                  <>
                    <Element ele={element} index={index}></Element>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* <div>
        <div id='d1' draggable='true' onDragStart={handleDragStart}>
          Drag me
        </div>
        <div id='d2' draggable='true' onDragStart={handleDragStart}>
          Or me!
        </div>
        <div onDragOver={enableDropping} onDrop={handleDrop}
        style={{height:'100px',width:'100ox',backgroundColor:'red'}}
        >
          Drop Area
        </div>
      </div> */}
    </div>
  )
}
