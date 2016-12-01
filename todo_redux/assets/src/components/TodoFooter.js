import React from "react";
import {IndexLink, Link} from "react-router";

const TodoFooter = ({count, onClearCompleted}) => (
    <footer className="footer">
        <span className="todo-count"><strong>{count}</strong> {count > 1 ? "items" : "item"} left</span>
        <ul className="filters">
            <li>
                <IndexLink activeClassName="selected" to="/">All</IndexLink>
            </li>
            <li>
                <Link activeClassName="selected" to="/active">Active</Link>
            </li>
            <li>
                <Link activeClassName="selected" to="/completed">Completed</Link>
            </li>
        </ul>
        <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
    </footer>
);

export default TodoFooter;