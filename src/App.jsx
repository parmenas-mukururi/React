import { useState } from 'react'
import './App.css'
import ProgressBarComponent from './components/ProgressBarComponent'
import InputComponent from './components/InputComponent'

function App() {

  const [progressValue, setProgressValue] = useState(0)
  const handleInputChange = (value) => {
    setProgressValue(value)
  }

  return (
    <>
      <ProgressBarComponent 
      label={<h1>Progress Bar</h1>}
      currentValue={progressValue}
      maxValue={100}
      minValue={0}

      />

      <InputComponent onInputChange = {handleInputChange}/>
    </>
  )
}

export default App
