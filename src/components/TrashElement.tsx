import style from './Element.module.css'

export default function Element({ele}: {
                                        ele: {
                                        text: string
                                        color: string
                                        }
                        })
{
  
  return (
    <>
      <div
        className={style.container}
        style={{
          backgroundColor: `#${ele.color}`,
          textDecoration: 'line-through',
        }}
      >
        {ele.text.length > 20 ? ele.text.slice(0, 20) : ele.text}
        <br />
        
      </div>
    </>
  )
}
