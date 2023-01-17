export const project = function (name, todos) {
    const p = Object.create(null);
    p.name = name;
    p.todos = todos;
    return p;
};

export const projects = [project("Todos", []), project("Project 2", [])];
//export const todos = [];