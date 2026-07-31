import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({ user: "Sovan", age: 21 })
  const [val, setVal] = useState(10)

  const btnClicked = () => {
    const newNum = { ...num }
    newNum.user = 'Riju'
    setNum(newNum)
  }

  const changeVal = () => {
    setVal(prev => (prev+1))
    setVal(prev => (prev+1))
    setVal(prev => (prev+1))
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
      <br />
      <h1>{val}</h1>
      <button onClick={changeVal}>click me</button>
    </div>
  )
}

export default App