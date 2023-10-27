import { useState } from "react"

const TodoForm = (props) => {
  const { onHandleSubmit } = props
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === '') {
      return 
    }

    console.log('inputValue', inputValue)
    onHandleSubmit(inputValue)
    setInputValue('')
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={inputValue}
          onChange={handleInput}
          type="text"
          id="item"
        />
        <button>Add</button>
      </div>
    </form>
  )
}

export default TodoForm
