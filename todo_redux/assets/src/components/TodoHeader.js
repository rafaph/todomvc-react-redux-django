import React from "react";

class TodoHeader extends React.Component {

    static propTypes = {
        onCreateTodo: React.PropTypes.func.isRequired
    };

    onKeyDown = (event) => {
        if (event.which === 13) {
            const newTodo = this.refs.newTodo;
            const text = newTodo.value;
            if (!text) {
                return;
            }
            newTodo.value = "";
            this.props.onCreateTodo({text});
        }
    };

    componentDidMount() {
        this.refs.newTodo.focus();
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo"
                       placeholder="What needs to be done?"
                       ref="newTodo"
                       onKeyDown={this.onKeyDown}/>
            </header>
        );
    }
}

export default TodoHeader;