import React, {useState} from 'react'

const InputComponent = ({onInputChange}) => {
    const [input, setInput] = useState(0)
const handleInput = (e) => {
setInput(e.target.value)
onInputChange(e.target.value)
}

  return (
    <div className='progress-input'>
        <h3>Input Percentage</h3>
<input type="number" value={input} onChange={handleInput} />
    </div>
  )
}

export default InputComponent