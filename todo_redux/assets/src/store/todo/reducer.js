import * as actionTypes from "./constants";

const initialState = {
    todos: [],
    loading: false,
    fetched: false,
    error: null
};


export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_TODOS_PEDING:
            return {
                ...state,
                loading: true,
                fetched: false,
                error: null
            };
        case actionTypes.LOAD_TODOS_REJECTED:
            return {
                ...state,
                loading: false,
                fetched: false,
                error: action.payload
            };
        case actionTypes.LOAD_TODOS_FULFILLED:
            return {
                ...state,
                todos: action.payload.data,
                loading: false,
                fetched: true,
                error: null
            };
        case actionTypes.UPDATE_TODO_FULFILLED:
            const {index, todo} = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, index),
                    todo,
                    ...state.todos.slice(index + 1)
                ]
            };
        case actionTypes.CREATE_TODO_FULFILLED:
            return {
                ...state,
                todos: [...state.todos, action.payload.todo]
            };
        default:
            return state;
    }
};