import React from "react";
import TodoItem from "components/TodoItem";

const TodoList = ({todos, onToggle}) => (
    <ul className="todo-list">
        {todos.map((todo, index) => (
            <TodoItem todo={todo} onToggle={onToggle} index={index} key={todo.id}/>
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        text: React.PropTypes.string,
        completed: React.PropTypes.bool
    })).isRequired,
    onToggle: React.PropTypes.func.isRequired
};

export default TodoList;