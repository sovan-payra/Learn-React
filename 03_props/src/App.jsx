import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sovan Payra' age={23} img='https://images.unsplash.com/photo-1774816064876-10a893fc79e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
      <Card user='Subham Paul' age={21} img='https://images.unsplash.com/photo-1779862946942-942d2c7f05e9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Debasish Pal' age={24} img='https://images.unsplash.com/photo-1784988830862-91533b18a6d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App