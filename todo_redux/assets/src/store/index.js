import {applyMiddleware, createStore, combineReducers} from "redux";
import todoReducer from "store/todo/reducer";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk, promise(), logger());
const reducer = combineReducers({
    todos: todoReducer
});

export default createStore(reducer, middleware);