import {
  ChangeEvent,
  DragEvent,
  useState,
  useRef,
  useEffect,
} from 'react'
import Style from './Element.module.css'
import { useDispatch } from 'react-redux';
import { todoSliceActions } from '../store/toDoReducers';

export default function Element({
  ele,
  index,
}: {
  ele: { text: string; color: string }
  index: number
  
}) {
  const [doubleClickToggle, setdoubleClickToggle] = useState(false)
  const [textInput, setTextInput] = useState('')
  const dispatch =useDispatch()
  const textInputRef = useRef<HTMLInputElement>(null)
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    let obj = event.target as HTMLDivElement

    event.dataTransfer.setData('index', index.toString())
    event.dataTransfer.setData('color', obj.style.backgroundColor)
  }
  useEffect(()=>{
    setTextInput(ele?.text)
  },[ele?.text])
  const handleDoubleClick = () => {
    if (doubleClickToggle) {
      SaveState()
    }
    setdoubleClickToggle((prv) => !prv)
  }
  const SaveState = () => {
    if (textInput === '') {
      setTextInput(ele.text)
    }
    dispatch(todoSliceActions.update({index:index,data:textInput}))
  }
  function HandleOnchange(event: ChangeEvent<HTMLInputElement>): void {
    setTextInput(event.target.value)
  }
  
  return (
    <>
      <div
        className={Style.container}
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
        ) : textInput?.length > 20 ? (
          textInput?.slice(0, 20)
        ) : (
          textInput
        )}

        {textInput?.length > 20 ? (
          <p className={Style.tooltip}>{textInput}</p>
        ) : (
          true
        )}
      </div>
    </>
  )
}
