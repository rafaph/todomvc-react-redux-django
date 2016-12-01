import axios from "axios";

export function load() {
    return axios.get("/api/todos/");
}

export function update(todo) {
    return axios.patch(`/api/todos/${todo.id}/`, todo);
}

export function create(todo) {
    return axios.post("/api/todos/", todo);
}