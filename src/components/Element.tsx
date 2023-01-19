import { DragEvent } from 'react'
import style from './Element.module.css'


export default function Element({
                        ele,
                        index,
                      }: {
                        ele: string
                        index: number
                      }) 
{
  
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {

    let obj = event.target as HTMLDivElement

    event.dataTransfer.setData('index', index.toString())
    event.dataTransfer.setData('color', obj.style.backgroundColor)

  }

  const Random =()=>{

    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  return (
    <>
      <div
        className={style.container}
        draggable={true}
        onDragStart={handleDragStart}
        style={{ backgroundColor: `#${Random()}` }}
      >
        {ele.length > 20 ? ele.slice(0, 20) : ele}
        {ele.length > 20 ? (<p className={style.tooltip}>{ele}</p>) : ele}
        
      </div>
    </>
  )
}
