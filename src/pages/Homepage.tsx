import React, { useEffect, useState } from 'react'
import Element from '../components/Element'
import style from './Homepage.module.css'
import Input from '../components/Input'
import TrashElement from '../components/TrashElement'
interface JSONAPIData {
  userId: Number
  id: Number
  title: string
  completed: Boolean
}
export default function Homepage() {
  const [ToDoelements, setToDoElements] = useState<
    Array<{ text: string; color: string }>
  >([])
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
  const DeleteNode = (index: number) => {
    setDoneElements((prv) => prv.filter((e, i) => i !== index))
  }
  const Random = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor
  }
  const makeArrangements = (data: JSONAPIData[]) => {
    const ToDo: Array<{ text: string; color: string }> = []
    const Done: Array<{ text: string; color: string }> = []
    for (let i = 0; i < data.length; i++) {
      let temp = {
        text: data[i].title,
        color: Random(),
      }
      if (data[i].completed) {
        Done.push(temp)
      }
      ToDo.push(temp)
    }
    setToDoElements(ToDo)
    setDoneElements(Done)
    
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((json) =>
        makeArrangements(
          json
        )
      )
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
}
