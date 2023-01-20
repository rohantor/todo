import style from './Element.module.css'

export default function Element({
  ele,
  
}: {
  ele: string
  
}) {
 

  return (
    <>
      <div
        className={style.container}
        
        style={{ backgroundColor: 'greenyellow', textDecoration:'line-through'}}
      >
        {ele.length > 20 ? ele.slice(0, 20) : ele}
        
      </div>
    </>
  )
}
