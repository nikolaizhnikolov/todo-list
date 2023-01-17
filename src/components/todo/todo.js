import { todos } from "../../storage";
import style from "./todo.css";

export const todoComponent = function(todo) {
    const t = document.createElement("div");
    t.classList.add("todo");

    const checkbox = document.createElement("img");
    checkbox.classList.add("todo__checkbox");
    checkbox.classList.add("logo");

    const name = document.createElement("div");
    name.classList.add("todo__name");
    name.textContent = todo.name;

    const priority = document.createElement("div");
    priority.classList.add("todo__priority");
    priority.textContent = todo.priority;

    const date = document.createElement("date");
    date.classList.add("todo__date")
    date.textContent = todo.date;
    
    t.appendChild(checkbox);
    t.appendChild(name);
    t.appendChild(priority);
    t.appendChild(date);
    return t;
}

export const todosContainerComponent = function() {
    const container = document.createElement("div");
    container.classList.add("todos");    
    
    todos().forEach((t) => {
        const component = todoComponent(t);
        container.appendChild(component);
    })

    return container;

}