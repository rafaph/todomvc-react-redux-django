import React from "react";
import * as todoActions from "store/todo/actions";
import {connect} from "react-redux"
import TodoHeader from "components/TodoHeader";
import TodoList from "components/TodoList";
import TodoFooter from "components/TodoFooter";

@connect(store => ({
    todoStore: store.todos
}))
class TodoApp extends React.Component {

    onCreateTodo = (todo) => {
         this.props.dispatch(todoActions.create(todo));
    };

    onToggleTodo = (todo, index) => {
        todo.completed = !todo.completed;
        this.props.dispatch(todoActions.update(todo, index));
    };

    componentWillMount() {
        this.props.dispatch(todoActions.load())
    }

    render() {
        const {todos} = this.props.todoStore;
        return (
            <section className="todoapp">
                <TodoHeader onCreateTodo={this.onCreateTodo}/>
                <section className="main">
                    <input className="toggle-all" type="checkbox"/>
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <TodoList todos={todos} onToggle={this.onToggleTodo}/>
                    <TodoFooter count={todos.length}/>
                </section>
            </section>
        );
    }
}

export default TodoApp;