import PropTypes from 'prop-types'

export default function TodoInput(props) {
    const { handleAddedTodos, todoValue, setTodoValue } = props
    // const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter an activity!" />
            <button onClick={() => {
                handleAddedTodos(todoValue)
                setTodoValue('')
                
            }}>Add</button>
        </header>
  )
}
TodoInput.propTypes = {
    handleAddedTodos: PropTypes.func.isRequired,
    todoValue: PropTypes.string.isRequired,
    setTodoValue: PropTypes.func.isRequired,
}