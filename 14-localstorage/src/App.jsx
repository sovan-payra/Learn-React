import React from 'react'

const App = () => {

  const user = {
    userName: 'sovan',
    age: 22,
    location: 'Digha'
  }

  localStorage.setItem('user',JSON.stringify(user))

  const val = JSON.parse(localStorage.getItem('user'))
  console.log(val)

  return (
    <div>App</div>
  )
}

export default App