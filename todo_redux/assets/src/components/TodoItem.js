import React from "react";

class TodoItem extends React.Component {

    static propTypes = {
        todo: React.PropTypes.shape({
            id: React.PropTypes.number,
            completed: React.PropTypes.bool,
            text: React.PropTypes.text
        }).isRequired,
        index: React.PropTypes.number,
        onToggle: React.PropTypes.func.isRequired
    };

    onToggle = () => {
        this.props.onToggle(this.props.todo, this.props.index);
    };

    render() {
        const {completed, text} = this.props.todo;
        return (
            <li className={completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.onToggle} defaultChecked={completed}/>
                    <label>{text}</label>
                    <button className="destroy"/>
                </div>
                <input className="edit" defaultValue={text}/>
            </li>
        );
    }
}

export default TodoItem;