import * as types from "./constants";
import * as todoService from "services/todo";

export function load() {
    return {
        type: types.LOAD_TODOS,
        payload: todoService.load()
    };
}

export function update(todo, index) {
    return (dispatch) => {
        todoService
            .update(todo)
            .then(response => {
                dispatch({
                    type: types.UPDATE_TODO_FULFILLED,
                    payload: {
                        todo: response.data,
                        index: index
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: types.LOAD_TODOS_REJECTED,
                    payload: err
                });
            });
    };
}

export function create(todo) {
    return (dispatch) => {
        todoService
            .create(todo)
            .then(response => {
                dispatch({
                    type: types.CREATE_TODO_FULFILLED,
                    payload: {
                        todo: response.data
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: types.CREATE_TODO_REJECTED,
                    payload: err
                });
            });
    };
}
