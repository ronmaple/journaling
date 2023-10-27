const TodoItem = (props) => {
  const { item, onHandleDelete, onHandleCheck } = props

  const handleDeleteItem = (e) => {
    onHandleDelete(item.id)
  }
  const handleCheck = () => {
    onHandleCheck(item.id, true)
  }

  if (!item) {
    return
  }

  return (
    <li key={item.id} onClick={handleCheck}>
      <label>
        <input type="checkbox" checked={item.completed} />
        {item.title}
      </label>
      <button onClick={handleDeleteItem} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
