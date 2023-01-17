import { todos } from "../../storage";

export const todoComponent = function(todo) {
    const t = document.createElement("div");
    t.textContent = todo.name;
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