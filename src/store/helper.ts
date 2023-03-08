interface JSONAPIData {
  userId: Number
  id: Number
  title: string
  completed: Boolean
}
export const Random = () => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return randomColor
}
export const makeArrangements = (data: JSONAPIData[]) => {
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
  return ({ToDo,Done})
  
}
