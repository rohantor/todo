import {
  ChangeEvent,
  DragEvent,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'
import style from './Element.module.css'



export default function Element({
  ele,
  index,
  setToDoElements,
}: {
  ele: { text: string; color: string }
  index: number
  setToDoElements: Dispatch<SetStateAction<{ text: string; color: string }[]>>
}) {
  const [doubleClickToggle, setdoubleClickToggle] = useState(false)
  const [textInput, setTextInput] = useState(ele.text)
  const textInputRef = useRef<HTMLInputElement>(null)
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    let obj = event.target as HTMLDivElement

    event.dataTransfer.setData('index', index.toString())
    event.dataTransfer.setData('color', obj.style.backgroundColor)
  }
  // const GetCurrentTimeDate = ()=>{

  //    var today = new Date()
  //   var date =
  //     today.getDate()  + '-' + (today.getMonth() + 1) + '-' +today.getFullYear()
  //   var time =
  //     today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  //   var dateTime = date + ' ' + time

  //   return dateTime
  // }
  const handleDoubleClick = () => {
    if (doubleClickToggle) {
      SaveState()
    }
    setdoubleClickToggle((prv) => !prv)

    console.log('Double Click')
  }
    const SaveState =()=>{
      if (textInput === '') {
        setTextInput(ele.text)
      } 
      setToDoElements((prv) => {
        let newPrv = prv
        newPrv[index].text = textInput
        return newPrv
      })
    }
  function HandleOnchange(event: ChangeEvent<HTMLInputElement>): void {
     
    setTextInput(event.target.value)
  }

  return (
    <>
      <div
        className={style.container}
        draggable={true}
        onDragStart={handleDragStart}
        style={{ backgroundColor: `#${ele.color}` }}
        onDoubleClick={handleDoubleClick}
      >
        {doubleClickToggle ? (
          <input
            value={textInput}
            ref={textInputRef}
            onChange={HandleOnchange}
            autoFocus
            maxLength={290}
            style={{ backgroundColor: `#${ele.color}` }}
            onBlur={SaveState}
          ></input>
        ) : textInput.length > 20 ? (
          textInput.slice(0, 20)
        ) : (
          textInput
        )}

        {textInput.length > 20 ? (
          <p className={style.tooltip}>{textInput}</p>
        ) : (
          true
        )}
      </div>
    </>
  )
}
