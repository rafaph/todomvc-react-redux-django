import React from "react";
import {Provider} from "react-redux";
import {render} from "react-dom";
import TodoApp from "containers/TodoApp";
import store from "./store";


render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('wrapper')
);