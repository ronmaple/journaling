import TodoItem from '../TodoItem/TodoItem'

const TodoList = (props) => {
  const { todoList, onHandleDelete, onHandleCheck } = props

  return (
    <ul className="list">
      {todoList.map((item) => {
        return (
          <TodoItem
            item={item}
            onHandleCheck={onHandleCheck}
            onHandleDelete={onHandleDelete}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
